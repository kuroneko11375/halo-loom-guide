import {writeFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {guides} from './content.mjs';
const root=dirname(fileURLToPath(import.meta.url));
const booth='https://kuronekodev.booth.pm/items/8914197';
const ids=['start','workspace','custom','motion','editions','faq'];
const languages=[['ja','JP','index.html'],['en','EN','en.html'],['zh-Hant','ZH','zh.html']];
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
for(const [lang,label,file] of languages){
 const c=guides[lang];
 const title=(i)=>`<h2><span>0${i+1}</span>${c.nav[i]}</h2>`;
 const html=`<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Halo Loom — ${c.manual}</title><meta name="description" content="${escape(c.intro)}"><meta name="theme-color" content="#6056a1"><link rel="stylesheet" href="site.css"><link rel="icon" href="favicon.svg" type="image/svg+xml">${languages.map(([l,,f])=>`<link rel="alternate" hreflang="${l}" href="${f}">`).join('')}</head>
<body id="top"><a class="skip" href="#main">${c.skip}</a><header><div class="top"><a class="brand" href="${file}"><small>黒猫Dev</small>Halo Loom</a><nav class="languages" aria-label="Language">${languages.map(([l,n,f])=>`<a href="${f}" lang="${l}"${l===lang?' aria-current="page"':''}>${n}</a>`).join('')}</nav></div></header>
<div class="hero"><div class="hero-copy"><div class="eyebrow">HALO LOOM / USER GUIDE</div><h1>${c.headline}</h1><p>${c.intro}</p><div class="buttons"><a class="button" href="#start">${c.begin}</a><a class="button secondary" href="${booth}">${c.booth} ↗</a></div><p class="muted">${c.version}</p></div><img src="assets/05-crystals.png" alt="${c.heroAlt}" width="1024" height="1024"></div>
<div class="shell"><aside><nav aria-label="${c.contents}"><p>${c.contents}</p>${ids.map((id,i)=>`<a href="#${id}">0${i+1} &nbsp; ${c.nav[i]}</a>`).join('')}</nav></aside><main id="main">
<section id="start">${title(0)}<p>${c.before}</p><div class="note">${c.importNote}</div><ol class="steps">${c.steps.map(([h,p])=>`<li><h3>${h}</h3><p>${p}</p></li>`).join('')}</ol><div class="note">${c.freeStart}</div></section>
<section id="workspace">${title(1)}<p>${c.workspaceIntro}</p><div class="workspace">${c.workspaces.map(([h,p,img])=>`<figure><h3>${h}</h3><p>${p}</p><a href="assets/${img}"><img loading="lazy" src="assets/${img}" alt="${c.screenshot} — ${h}" width="661" height="865"></a><figcaption>${c.enlarge}</figcaption></figure>`).join('')}</div><p class="muted">${c.captureNote}</p></section>
<section id="custom">${title(2)}<p>${c.customIntro}</p><ol>${c.customSteps.map(p=>`<li>${p}</li>`).join('')}</ol><h3>${c.placementTitle}</h3><p>${c.placement}</p><div class="note">${c.customWarning}</div><details><summary>${c.clipTitle}</summary><p>${c.clip}</p></details></section>
<section id="motion">${title(3)}<div class="gallery">${c.effects.map(([name,img])=>`<figure><img loading="lazy" src="assets/${img}" alt="${name}" width="1024" height="1024"><figcaption>${name}</figcaption></figure>`).join('')}</div><p>${c.effectNote}</p><h3>${c.motionTitle}</h3><p>${c.motion}</p><h3>${c.starTitle}</h3><p>${c.star}</p><h3>${c.randomTitle}</h3><p>${c.random}</p><div class="note">${c.preview}</div></section>
<section id="editions">${title(4)}<div class="table-wrap"><table><thead><tr>${c.columns.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${c.rows.map(([a,b,d])=>`<tr><th scope="row">${a}</th><td>${b}</td><td>${d}</td></tr>`).join('')}</tbody></table></div><p class="muted">${c.editionNote}</p></section>
<section id="faq">${title(5)}${c.faq.map(([h,p])=>`<details><summary>${h}</summary><p>${p}</p></details>`).join('')}<p>${c.support} <a href="${booth}">${c.booth} ↗</a></p><p class="back"><a href="#top">↑ ${c.top}</a></p></section>
</main></div><footer class="footer"><p>黒猫Dev · Halo Loom<br>${c.updated}</p><p>${c.rights}<br><a href="https://github.com/kuroneko11375/halo-loom-guide">GitHub</a> · <a href="${booth}">BOOTH</a></p></footer></body></html>`;
 writeFileSync(resolve(root,file),html,'utf8');
 console.log(`Built ${file} (${lang})`);
}
