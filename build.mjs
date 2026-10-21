// node build.mjs → index.html (ja) / en.html / zh.html
import { writeFileSync } from 'node:fs';
import { meta, guides, soundSources, newCards } from './content.mjs';

const pages = [
  ['ja', 'index.html', 'ja'],
  ['en', 'en.html', 'en'],
  ['zh-Hant', 'zh.html', 'zh-Hant'],
];
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;)/g, '&amp;').replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '');
const ext = (href, label) => `<a href="${href}" target="_blank" rel="noopener">${label}<span class="ext" aria-hidden="true">↗</span></a>`;

const order = ['news', 'reinstall', 'start', 'workspace', 'motion', 'interaction', 'menu', 'custom', 'editions', 'faq', 'credits'];

function section(c, key, n, body, cls = '') {
  const s = c[key];
  const num = key === 'news' || key === 'reinstall' ? '' : `<span class="num">${String(n).padStart(2, '0')}</span>`;
  return `<section id="${s.id}" class="sec ${cls}"><h2>${num}${s.title}</h2>${body}</section>`;
}

function render(lang, file, htmlLang) {
  const c = guides[lang];
  const langs = pages.map(([l, f]) => `<a href="${f}"${l === lang ? ' aria-current="page"' : ''} hreflang="${pages.find(p => p[0] === l)[2]}">${guides[l].langName}</a>`).join('');
  let n = 0;
  const nums = {};
  for (const k of order) if (k !== 'news' && k !== 'reinstall') nums[k] = ++n;

  const toc = order.map(k => `<li><a href="#${c[k].id}">${nums[k] ? `<span class="num">${String(nums[k]).padStart(2, '0')}</span>` : '<span class="num">★</span>'}${c[k].nav}</a></li>`).join('');

  const news = c.news;
  const newsBody = `<p class="lead">${news.lead}</p>
<figure class="video"><video controls preload="none" playsinline poster="assets/v060/pv-poster.jpg" width="1280" height="720"><source src="assets/v060/pv.mp4" type="video/mp4"></video><figcaption>${news.video}</figcaption></figure>
<div class="cards">${news.cards.map(([h, p], i) => `<article class="card"><a class="zoom" href="assets/v060/${newCards[i]}.jpg" data-caption="${esc(strip(h))}"><img src="assets/v060/${newCards[i]}.jpg" alt="${esc(strip(h))}" width="1600" height="900" loading="lazy"></a><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>
<ul class="more">${news.more.map(m => `<li>${m}</li>`).join('')}</ul>`;

  const r = c.reinstall;
  const reinstallBody = `<ol class="flow">${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
<p class="note warn">${r.keep}</p><p class="note">${r.tip}</p><p>${r.after}</p>`;

  const s = c.start;
  const startBody = `<p class="note env">${s.env}</p>
<ol class="steps">${s.steps.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join('')}</ol>
<p class="note">${s.free}</p>`;

  const w = c.workspace;
  const wsBody = `<p class="lead">${w.lead}</p>
<dl class="tabs">${w.tabs.map(([h, p]) => `<div><dt>${h}</dt><dd>${p}</dd></div>`).join('')}</dl>
<h3>${w.basicTitle}</h3>
<div class="split">${w.basic.map(([h, p]) => `<div class="panel"><h4>${h}</h4><p>${p}</p></div>`).join('')}</div>
<p class="note pumpkin">${w.halloween}</p>`;

  const m = c.motion;
  const motionBody = `<div class="split three">
<div class="panel"><h3>${m.motionTitle}</h3><p>${m.motion}</p></div>
<div class="panel"><h3>${m.starTitle}</h3><p>${m.star}</p></div>
<div class="panel"><h3>${m.ornamentTitle}</h3><p>${m.ornament}</p></div></div>
<p class="note">${m.previewTip}</p>`;

  const it = c.interaction;
  const icons = ['ShowHalo', 'Charge', 'ModeStar', 'Cancel', 'Expand'];
  const interBody = `<p class="lead">${it.lead}</p>
<ol class="cycle">${it.steps.map(([h, p], i) => `<li><img src="assets/icons/${icons[i]}.png" alt="" width="56" height="56" loading="lazy"><div><h3>${h}</h3><p>${p}</p></div></li>`).join('')}</ol>
<h3>${it.dirTitle}</h3>
<div class="dirs">${it.dirs.map(([h, p], i) => `<div class="dir d${i}"><span class="arrow" aria-hidden="true">${['→', '↑', '↗'][i]}</span><h4>${h}</h4><p>${p}</p></div>`).join('')}</div>
<p class="note warn">${it.wrist}</p><p class="note">${it.pc}</p><p class="note">${it.gesture}</p>`;

  const mn = c.menu;
  const menuBody = `<p class="lead">${mn.lead}</p>
<div class="radial"><div class="root"><img src="assets/icons/HaloLoom.png" alt="" width="64" height="64"><span>Halo Loom</span></div>
<ul>${mn.items.map(([ic, h, p]) => `<li><img src="assets/icons/${ic}.png" alt="" width="44" height="44" loading="lazy"><div><strong>${h}</strong><span>${p}</span></div></li>`).join('')}</ul></div>
<p class="note">${mn.note}</p>`;

  const cu = c.custom;
  const customBody = `<ol class="steps compact">${cu.steps.map(p => `<li><p>${p}</p></li>`).join('')}</ol>
<h3>${cu.placeTitle}</h3><p>${cu.place}</p><p class="note warn">${cu.warn}</p>`;

  const e = c.editions;
  const edBody = `<div class="table-wrap"><table class="compare"><thead><tr>${e.cols.map((h, i) => `<th scope="col"${i === 2 ? ' class="full"' : ''}>${h}</th>`).join('')}</tr></thead>
<tbody>${e.rows.map(([h, a, b]) => `<tr><th scope="row">${h}</th><td>${a}</td><td class="full">${b}</td></tr>`).join('')}</tbody></table></div>
<p class="note">${e.note}</p>`;

  const f = c.faq;
  const faqBody = `${f.items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}
<p>${f.support} ${ext(meta.booth, 'BOOTH')}</p>`;

  const cr = c.credits;
  const crBody = `<p class="lead">${cr.lead}</p>
<h3>${cr.soundTitle}</h3><p>${cr.sound}</p>
<div class="table-wrap"><table class="src"><thead><tr>${cr.soundCols.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>${soundSources.map(([cue, t, a, id]) => `<tr><td><code>${cue}</code></td><td>${t}</td><td>${a}</td><td>${ext(`https://pixabay.com/sound-effects/${t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${id}/`, id)}</td></tr>`).join('')}</tbody></table></div>
<h3>${cr.visualTitle}</h3><p>${cr.visual}</p><p>${cr.own}</p><p class="muted">${cr.avatar}</p>`;

  const bodies = { news: newsBody, reinstall: reinstallBody, start: startBody, workspace: wsBody, motion: motionBody, interaction: interBody, menu: menuBody, custom: customBody, editions: edBody, faq: faqBody, credits: crBody };
  const sections = order.map(k => section(c, k, nums[k], bodies[k], k === 'reinstall' ? 'alert' : '')).join('\n');

  const h = c.hero;
  return `<!doctype html>
<html lang="${htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${c.title}</title>
<meta name="description" content="${esc(c.description)}">
<meta name="color-scheme" content="dark">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.description)}">
<meta property="og:image" content="https://kuroneko11375.github.io/halo-loom-guide/assets/v060/main.jpg">
<meta property="og:type" content="website">
${pages.map(([, f, hl]) => `<link rel="alternate" hreflang="${hl}" href="https://kuroneko11375.github.io/halo-loom-guide/${f === 'index.html' ? '' : f}">`).join('\n')}
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="site.css">
<script src="gallery.js" defer></script>
</head>
<body id="top">
<a class="skip" href="#main">${c.skip}</a>
<header class="bar"><a class="brand" href="#top"><img src="favicon.svg" alt="" width="28" height="28">Halo Loom <span>v${meta.version}</span></a><nav class="langs" aria-label="Language">${langs}</nav></header>
<div class="hero"><div class="sky" aria-hidden="true"></div>
<div class="hero-copy"><p class="eyebrow">${h.eyebrow}</p><h1>${h.headline}</h1><p class="lead">${h.lead}</p>
<div class="buttons"><a class="btn" href="#${c.start.id}">${h.start}</a><a class="btn ghost" href="${meta.booth}" target="_blank" rel="noopener">${h.booth} ↗</a></div>
<p class="badge">${h.badge}</p></div>
<a class="hero-art zoom" href="assets/v060/main.jpg" data-caption="${esc(h.imageAlt)}"><img src="assets/v060/main.jpg" alt="${esc(h.imageAlt)}" width="1200" height="1200" fetchpriority="high"></a></div>
<aside class="banner"><strong>${c.banner.title}</strong><span>${c.banner.text}</span><a href="#${c.reinstall.id}">${c.banner.link} →</a></aside>
<div class="layout">
<nav class="toc" aria-label="${esc(c.toc)}"><p>${c.toc}</p><ol>${toc}</ol></nav>
<main id="main">
${sections}
</main></div>
<footer class="foot"><p>黒猫Dev · Halo Loom v${meta.version} · ${c.updatedLabel} ${meta.updated}</p><p>${c.footer}</p>
<p><a href="#${c.credits.id}">${c.credits.nav}</a> · ${ext(meta.booth, 'BOOTH')} · ${ext(meta.github, 'GitHub')} · <a href="#top">↑ ${c.top}</a></p></footer>
<dialog id="viewer" aria-label="${esc(c.enlarge)}"><button type="button" class="close" aria-label="${esc(c.close)}">×</button><figure><img alt=""><figcaption></figcaption></figure></dialog>
</body>
</html>
`;
}

for (const [lang, file, hl] of pages) writeFileSync(new URL(file, import.meta.url), render(lang, file, hl));
console.log('built', pages.map(p => p[1]).join(', '));
