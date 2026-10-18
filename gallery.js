(() => {
  "use strict";

  const viewer = document.getElementById("image-viewer");
  const viewerImage = document.getElementById("image-viewer-image");
  const viewerCaption = document.getElementById("image-viewer-caption");
  const closeButton = viewer?.querySelector(".image-viewer-close");

  // Keep the normal image links when native modal dialogs are unavailable.
  if (!viewer || typeof viewer.showModal !== "function" || !viewerImage || !viewerCaption || !closeButton) return;

  const assets = new URL("assets/", document.baseURI);
  let opener = null;
  let readingPosition = null;
  let bodyWasLocked = false;

  closeButton.addEventListener("click", () => viewer.close());

  viewer.addEventListener("click", (event) => {
    if (event.target !== viewer || event.button !== 0) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });

  // Native Escape, the close button and any other close() call share cleanup.
  viewer.addEventListener("close", () => {
    if (!bodyWasLocked) document.body.classList.remove("image-viewer-open");
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    if (readingPosition) window.scrollTo({ left: readingPosition.x, top: readingPosition.y, behavior: "instant" });
    viewerImage.removeAttribute("src");
    viewerImage.alt = "";
    viewerCaption.textContent = "";
    opener = null;
    readingPosition = null;
  });

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest("a[href]");
    if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target.toLowerCase() !== "_self")) return;
    const image = anchor.querySelector("img");
    if (!image) return;

    let source;
    try {
      source = new URL(anchor.href, document.baseURI);
    } catch {
      return;
    }
    if (source.origin !== window.location.origin || !source.pathname.startsWith(assets.pathname) || !/\.(?:png|jpe?g|webp)$/i.test(source.pathname)) return;

    const position = { x: window.scrollX, y: window.scrollY };
    const caption = image.getAttribute("alt") || "";
    viewerImage.src = source.href;
    viewerImage.alt = caption;
    viewerCaption.textContent = caption;

    // Only cancel navigation after showModal succeeds, retaining link fallback.
    try {
      viewer.showModal();
    } catch {
      viewerImage.removeAttribute("src");
      viewerImage.alt = "";
      viewerCaption.textContent = "";
      return;
    }
    event.preventDefault();
    opener = anchor;
    readingPosition = position;
    bodyWasLocked = document.body.classList.contains("image-viewer-open");
    document.body.classList.add("image-viewer-open");
    closeButton.focus({ preventScroll: true });
  });
})();
