// Generatorul site-ului Accoria: node src/build.js [--prod]
// Scrie toate paginile din src/content.js și src/pagini/*, plus 404.html, robots.txt, sitemap.xml, llms.txt și pattern-ul cu emblema.
const fs = require('fs');
const path = require('path');
const { SITE, SERVICII, NAV, ACASA, SUBSOL, PAGINA404 } = require('./content.js');
const SERV = require('./pagini/servicii.js');
const ALTE = require('./pagini/alte.js');
const BLOG = require('./pagini/blog.js');
const LEGAL = require('./pagini/legal.js');

const PROD = process.argv.includes('--prod');
const ROOT = path.join(__dirname, '..');
const SITE_URL = PROD ? SITE.domeniu : 'https://cristiangirbovu.github.io/accoria-preview';
const AN = new Date().getFullYear();
const AZI = new Date().toISOString().slice(0, 10);
const VER = Date.now().toString(36).slice(-6);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (rel, slug) => (slug ? `${rel}${slug}/` : rel);
const abs = (slug) => `${SITE_URL}${link('/', slug)}`;
const servDupaSlug = (slug) => SERVICII.find((s) => s.slug === slug);

// Logourile din pachetul de brand, ca SVG inline (fără cereri suplimentare, culori exacte)
function citesteSvg(file) {
  const raw = fs.readFileSync(path.join(ROOT, 'assets/img', file), 'utf8');
  const vb = raw.match(/viewBox="([^"]+)"/)[1];
  const inner = raw.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  return { vb, inner };
}
function svgInline(file, { h = 40, cls = '', label = 'Accoria' } = {}) {
  const { vb, inner } = citesteSvg(file);
  const [, , w, hh] = vb.split(' ').map(Number);
  const width = Math.round((h * w) / hh * 10) / 10;
  return `<svg class="${cls}" viewBox="${vb}" width="${width}" height="${h}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}
const LOGO_POZ = svgInline('accoria-logo-pozitiv.svg', { h: 42, cls: 'logo-svg' });
const LOGO_NEG = svgInline('accoria-logo-negativ.svg', { h: 38, cls: 'logo-svg' });
const EMBLEMA = svgInline('accoria-emblema-pozitiv.svg', { h: 96, cls: 'emblema-svg', label: 'Emblema Accoria' });

// Pattern-ul din manual: emblema repetată, în ivoriu, cu opacitate mică, pe fonduri prună (fundal secundar)
function scriePattern() {
  const { inner } = citesteSvg('accoria-emblema-monocrom-ivoriu.svg');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-760 -760 2520 2520"><g opacity="0.055">${inner}</g></svg>`;
  fs.writeFileSync(path.join(ROOT, 'assets/img/pattern-emblema.svg'), svg);
}

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';
const waIcon = (size = 26) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="${WA_PATH}"/></svg>`;

// ---------- Date structurate
const jsonld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const ORGANIZATIA = {
  '@context': 'https://schema.org', '@type': 'AccountingService', '@id': `${SITE_URL}/#organizatie`,
  name: SITE.nume, legalName: SITE.firma, url: `${SITE_URL}/`, telephone: SITE.telefonTel, email: SITE.email,
  logo: `${SITE_URL}/assets/favicon-512.png`, image: `${SITE_URL}/assets/og-accoria.png`,
  address: { '@type': 'PostalAddress', addressLocality: 'Popești-Leordeni', addressRegion: 'Ilfov', addressCountry: 'RO' },
  areaServed: ['București', 'Ilfov'], priceRange: 'de la 450 lei pe lună',
};
const crumbsLd = (items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.nume, item: c.url })) });
const faqLd = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })) });

// ---------- Cadrul paginii
function head(page, rel, ld = []) {
  const url = page.slug === '404.html' ? `${SITE_URL}/404.html` : abs(page.slug);
  return `<!doctype html>
<html lang="ro" data-pagina-cookie="${link(rel, 'politica-cookie-uri')}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${PROD && !page.noindex ? '' : '<meta name="robots" content="noindex, nofollow">\n'}<link rel="canonical" href="${url}">
<meta property="og:type" content="${page.tipOg || 'website'}">
<meta property="og:locale" content="ro_RO">
<meta property="og:site_name" content="${esc(SITE.nume)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}/assets/og-accoria.png">
<link rel="icon" href="${rel}assets/favicon.ico" sizes="any">
<link rel="icon" href="${rel}assets/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="${rel}assets/apple-touch-icon.png">
<link rel="preload" href="${rel}assets/fonts/geologica-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${rel}assets/fonts/geologica-latin-ext.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${rel}assets/style.css?v=${VER}">
${ld.map(jsonld).join('\n')}
</head>`;
}

function header(rel, activ, areOferta) {
  const items = NAV.map((n) => {
    const cls = n.slug === activ ? ' class="activ"' : '';
    if (n.sub) {
      return `<li class="are-sub"><a href="${link(rel, n.slug)}"${cls}>${esc(n.eticheta)}</a><button class="sub-btn" type="button" aria-expanded="false" aria-label="Deschide meniul ${esc(n.eticheta)}"><span></span></button>
<ul class="sub">${n.sub.map((s) => `<li><a href="${link(rel, s.slug)}">${esc(s.nume)}</a></li>`).join('')}</ul></li>`;
    }
    return `<li><a href="${link(rel, n.slug)}"${cls}>${esc(n.eticheta)}</a></li>`;
  }).join('\n');
  return `<header class="antet">
<div class="bara wrap">
<a class="logo" href="${link(rel)}" aria-label="Accoria, prima pagină">${LOGO_POZ}</a>
<nav class="nav" aria-label="Meniul principal">
<ul class="meniu">
${items}
</ul>
</nav>
<a class="btn btn-auriu btn-antet" href="${areOferta ? '#oferta' : link(rel, 'contact')}">Cere o ofertă</a>
<button class="burger" type="button" aria-expanded="false" aria-controls="meniu-mobil" aria-label="Meniu"><span></span><span></span><span></span></button>
</div>
</header>`;
}

function footer(rel) {
  const col = (titlu, items) => `<div class="col"><h2>${esc(titlu)}</h2><ul>${items.map((i) => `<li><a href="${link(rel, i.slug)}">${esc(i.eticheta || i.nume)}</a></li>`).join('')}</ul></div>`;
  return `<footer class="subsol pattern">
<div class="wrap">
<div class="subsol-grid">
<div class="col col-brand">
<a class="logo" href="${link(rel)}" aria-label="Accoria, prima pagină">${LOGO_NEG}</a>
<p>${esc(SITE.descriptor)}</p>
</div>
${col('Servicii', [...SERVICII, { eticheta: 'Schimbare contabil', slug: 'schimbare-contabil' }])}
${col('Firma', SUBSOL.firma)}
<div class="col"><h2>Contact</h2><ul>
<li>${esc(SITE.localitate)}</li>
<li><a href="tel:${SITE.telefonTel}">${esc(SITE.telefon)}</a></li>
<li><a href="https://wa.me/${SITE.whatsapp}" rel="noopener">WhatsApp</a></li>
<li><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></li>
</ul></div>
</div>
<div class="subsol-jos">
<p>© ${AN} ${esc(SITE.firma)} · CUI ${esc(SITE.cui)} · ${esc(SITE.regcom)}</p>
<ul>${SUBSOL.legal.map((i) => `<li><a href="${link(rel, i.slug)}">${esc(i.eticheta)}</a></li>`).join('')}<li><a href="${link(rel, 'politica-cookie-uri')}#setari" data-setari-cookie>Setări cookie-uri</a></li></ul>
</div>
</div>
</footer>
<a class="fab" href="https://wa.me/${SITE.whatsapp}" rel="noopener" aria-label="Scrie-ne pe WhatsApp">${waIcon(28)}</a>
<script src="${rel}assets/app.js?v=${VER}" defer></script>
<script src="${rel}assets/consimtamant.js?v=${VER}" defer></script>
</body>
</html>`;
}

function render(page, rel, body, activ, { areOferta = false, ld = [] } = {}) {
  return `${head(page, rel, ld)}
<body class="pagina-${activ}" data-pagina="${activ}">
<a class="sari" href="#continut">Sari la conținut</a>
${header(rel, activ, areOferta)}
<main id="continut">
${body}
</main>
${footer(rel)}`;
}

// ---------- Componente
const sec = (cls, inner, id) => `<section class="sec ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;
const titlu = (t, p, tag = 'h2') => `<div class="sec-cap"><${tag}>${esc(t)}</${tag}><span class="linie" aria-hidden="true"></span>${p ? `<p class="sec-text">${esc(p)}</p>` : ''}</div>`;
const pill = (t) => `<span class="pastila">${esc(t)}</span>`;
const bife = (items) => `<ul class="bife">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
const sigiliu = (n) => `<span class="sigiliu" aria-hidden="true">${n}</span>`;
const carduri = (items, cls = 'grid-3') => `<ul class="${cls}">${items.map((c) => `<li class="card"><span class="linie-mica" aria-hidden="true"></span><h3>${esc(c.nume)}</h3><p>${esc(c.text)}</p></li>`).join('')}</ul>`;
const pasi = (items, cls = '') => `<ol class="pasi ${cls}">${items.map((p, i) => `<li class="card">${sigiliu(i + 1)}<div><h3>${esc(p.nume)}</h3><p>${esc(p.text)}</p></div></li>`).join('')}</ol>`;
const faq = (items, t = 'Întrebări frecvente') => `${titlu(t)}<div class="faq-list">${items.map((q) => `<details><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}</div>`;
const proza = (par) => par.map((p) => `<p>${esc(p)}</p>`).join('');

function capPagina({ crumbs = [], h1, lead, eticheta, meta }, rel) {
  const fir = crumbs.length ? `<nav class="crumbs" aria-label="Fir de navigare"><ol><li><a href="${link(rel)}">Acasă</a></li>${crumbs.map((c, i) => (i === crumbs.length - 1 ? `<li aria-current="page">${esc(c.nume)}</li>` : `<li><a href="${link(rel, c.slug)}">${esc(c.nume)}</a></li>`)).join('')}</ol></nav>` : '';
  return `<section class="cap-pagina"><div class="wrap">${fir}${eticheta ? pill(eticheta) : ''}<h1>${esc(h1)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ''}${meta ? `<p class="meta">${meta}</p>` : ''}</div></section>`;
}

// Pagini legate care nu sunt servicii numerotate (cardul primește linia aurie în loc de sigiliu)
const EXTRA = { 'schimbare-contabil': { slug: 'schimbare-contabil', nume: 'Schimbare contabil', scurt: 'Preluăm evidența fără declarații pierdute: verificăm ce s-a depus, ce lipsește și preluăm documentele.' } };
const cardDupaSlug = (slug) => servDupaSlug(slug) || EXTRA[slug];
// Numerele (sigiliile) apar doar unde lista este completă: pe Acasă și pe hub; în selecții, cardul primește linia aurie
function servCard(s, rel, { lat = false, text, numar = true } = {}) {
  const i = SERVICII.indexOf(s);
  const marcaj = numar && i >= 0 ? sigiliu(i + 1) : '<span class="linie-mica" aria-hidden="true"></span>';
  return `<article class="card serv-card${lat ? ' lat' : ''}">${marcaj}<h3><a class="acopera" href="${link(rel, s.slug)}">${esc(s.nume)}</a></h3><p>${esc(text || s.scurt)}</p><span class="mai" aria-hidden="true">Detalii</span></article>`;
}
const legate = (slugs, rel) => `${titlu('Servicii legate')}<div class="serv-grid">${slugs.map((sl) => servCard(cardDupaSlug(sl), rel, { numar: false })).join('')}</div>`;

// Formularul de ofertă (pe prună), cu titlu și text proprii pe fiecare pagină
function oferta(rel, cta = { titlu: ACASA.oferta.titlu, text: ACASA.oferta.text }) {
  const O = ACASA.oferta;
  const optiuni = (arr) => arr.map((o) => `<option>${esc(o)}</option>`).join('');
  return sec('oferta', `<div class="oferta-grid">
<div class="oferta-text">
<h2>${esc(cta.titlu)}</h2>
<p>${esc(cta.text)}</p>
<ul class="contact-list">
<li><a href="tel:${SITE.telefonTel}">${esc(SITE.telefon)}</a></li>
<li><a href="https://wa.me/${SITE.whatsapp}" rel="noopener">${waIcon(20)} WhatsApp</a></li>
<li><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></li>
</ul>
</div>
<form class="formular" action="#" method="post" novalidate>
<div class="camp"><label for="f-nume">Nume și prenume</label><input id="f-nume" name="nume" type="text" autocomplete="name" required></div>
<div class="camp"><label for="f-telefon">Telefon</label><input id="f-telefon" name="telefon" type="tel" autocomplete="tel" required></div>
<div class="camp"><label for="f-email">E-mail</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
<div class="camp"><label for="f-firma">Firma <span class="opt">(opțional)</span></label><input id="f-firma" name="firma" type="text" autocomplete="organization"></div>
<div class="camp"><label for="f-forma">Forma de organizare</label><select id="f-forma" name="forma">${optiuni(O.forme)}</select></div>
<div class="camp"><label for="f-serviciu">Serviciul dorit</label><select id="f-serviciu" name="serviciu">${optiuni(O.servicii)}</select></div>
<div class="camp camp-lat"><label for="f-mesaj">Mesaj</label><textarea id="f-mesaj" name="mesaj" rows="4"></textarea></div>
<div class="camp camp-lat bifa"><input id="f-acord" name="acord" type="checkbox" required><label for="f-acord">${esc(O.consimtamant)} <a href="${link(rel, 'politica-de-confidentialitate')}">Politica de confidențialitate</a></label></div>
<div class="camp camp-lat"><button class="btn btn-auriu" type="submit">${esc(O.btn)}</button></div>
</form>
</div>`, 'oferta');
}

// ---------- Pagina principală
function hero(h, rel) {
  return `<section class="hero">
<div class="wrap hero-grid">
<div class="hero-text">
<h1>${esc(h.h1)}</h1>
<p class="lead">${esc(h.lead)}</p>
<div class="butoane">
<a class="btn btn-auriu" href="${h.btnPrimar.href}">${esc(h.btnPrimar.text)}</a>
<a class="btn btn-contur-ivoriu" href="${h.btnSecundar.href || link(rel, h.btnSecundar.slug)}">${esc(h.btnSecundar.text)}</a>
</div>
</div>
<div class="hero-foto">
<div class="foto-loc" role="img" aria-label="Documente, stilou și calculator de birou, pe lemn, în lumină caldă">
<span class="h h1"></span><span class="h h2"></span><span class="h h3"></span><span class="lin"></span>
</div>
</div>
</div>
<div class="wrap">
<ul class="repere">${h.repere.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
</div>
</section>`;
}

function acasaPage(rel) {
  const A = ACASA;
  const cine = sec('cine', `<h2 class="h-mic">${esc(A.cine.titlu)}</h2>${carduri(A.cine.segmente, 'cine-grid')}`);
  const S = A.servicii;
  const servicii = sec('servicii crem', `${titlu(S.titlu, S.text)}
<div class="serv-grid">${SERVICII.map((s, i) => servCard(s, rel, { lat: i === 0, text: i === 0 ? s.lung : undefined })).join('')}
<div class="card serv-card card-cta"><h3>${esc(S.cta.titlu)}</h3><p>${esc(S.cta.text)}</p><a class="btn btn-auriu" href="${S.cta.href}">${esc(S.cta.btn)}</a></div>
</div>`);
  const nisa = sec('nisa', `<div class="nisa-grid">
<div>${pill(A.nisa.eticheta)}<h2>${esc(A.nisa.titlu)}</h2><p>${esc(A.nisa.text)}</p><a class="btn btn-pruna" href="${link(rel, A.nisa.btn.slug)}">${esc(A.nisa.btn.text)}</a></div>
<div class="card card-lista">${bife(A.nisa.puncte)}</div>
</div>`);
  const proces = sec('proces crem', `${titlu(A.proces.titlu)}${pasi(A.proces.pasi)}
<div class="promisiuni pattern">
<h3>${esc(A.proces.promisiuniTitlu)}</h3>
<ul>${A.proces.promisiuni.map((p) => `<li><strong>${esc(p.nume)}</strong><p>${esc(p.text)}</p></li>`).join('')}</ul>
</div>`);
  const tarife = sec('tarife', `${titlu(A.tarife.titlu, A.tarife.text)}${niveluri(A.tarife.niveluri, A.tarife.btn)}<p class="nota">${esc(A.tarife.nota)}</p>`, 'tarife');
  const schimbare = sec('schimbare crem', `<div class="schimbare-grid">
<div><h2>${esc(A.schimbare.titlu)}</h2><p>${esc(A.schimbare.text)}</p></div>
<div><a class="btn btn-pruna" href="${link(rel, A.schimbare.btn.slug)}">${esc(A.schimbare.btn.text)}</a></div>
</div>`);
  const despre = sec('despre', `<div class="despre-grid">
<div>${titlu(A.despre.titlu)}${proza(A.despre.paragrafe)}<a class="link-sageata" href="${link(rel, A.despre.btn.slug)}">${esc(A.despre.btn.text)}</a></div>
${panouFapte(A.despre.fapte)}
</div>`);
  const termene = sec('termene crem', `<div class="termene-grid">
<div class="card termene-card">${pill(A.termene.eticheta)}<h2>${esc(A.termene.titlu)}</h2>
<dl>${A.termene.randuri.map((r) => `<div><dt>${esc(r.data)}</dt><dd>${esc(r.text)}</dd></div>`).join('')}</dl></div>
<div class="articole"><h2>${esc(A.blog.titlu)}</h2>
<ul class="articole-grid">${BLOG.ARTICOLE.map((a) => artCard(a, rel)).join('')}</ul>
<a class="link-sageata" href="${link(rel, A.blog.btn.slug)}">${esc(A.blog.btn.text)}</a></div>
</div>`);
  const intrebari = sec('faq', faq(A.faq.intrebari, A.faq.titlu));
  return [hero(A.hero, rel), cine, servicii, nisa, proces, tarife, schimbare, despre, termene, intrebari, oferta(rel)].join('\n');
}

const panouFapte = (fapte) => `<div class="card despre-panou">${EMBLEMA}<dl>${fapte.map((f) => `<div><dt>${esc(f.nume)}</dt><dd>${esc(f.text)}</dd></div>`).join('')}</dl></div>`;
const artCard = (a, rel) => `<li class="card art-card">${pill(a.cat)}<h3><a class="acopera" href="${link(rel, 'blog/' + a.slug)}">${esc(a.titlu)}</a></h3><p>${esc(a.rezumat)}</p><span class="data">${esc(a.dataText)}</span></li>`;

function niveluri(lista, btn) {
  return `<div class="niveluri">${lista.map((n) => `<div class="nivel${n.recomandat ? ' rec' : ''}">
${n.recomandat ? pill('Recomandat') : ''}
<h3>${esc(n.nume)}</h3>
<p class="pret"><span class="de-la">de la</span> <span class="suma">${esc(n.pret)}</span> <span class="luna">lei/lună</span></p>
<p class="pentru">${esc(n.pentru)}</p>
${bife(n.include)}
<a class="btn ${n.recomandat ? 'btn-auriu' : 'btn-contur-pruna'}" href="${btn.href}">${esc(btn.text)}</a>
</div>`).join('')}</div>`;
}

// ---------- Paginile de servicii
function paginaServiciu(p, rel) {
  const cap = capPagina({ crumbs: [{ nume: 'Servicii', slug: 'servicii' }, { nume: p.h1 }], h1: p.h1, lead: p.lead }, rel);
  const intro = sec('intro', `<div class="intro-grid"><div class="proza">${proza(p.intro)}</div><div class="card card-include"><h2>${esc(p.include.titlu)}</h2>${bife(p.include.puncte)}</div></div>`);
  const pentru = sec('crem', `${titlu('Pentru cine')}${carduri(p.pentru)}`);
  const incepem = sec('', `${titlu('Cum începem')}${pasi(p.pasi, 'auto')}`);
  const intrebari = sec('crem faq', faq(p.faq));
  const leg = sec('', legate(p.legate, rel));
  return [cap, intro, pentru, incepem, intrebari, leg, oferta(rel, p.cta)].join('\n');
}

function paginaHub(rel) {
  const H = SERV.HUB;
  const cap = capPagina({ crumbs: [{ nume: 'Servicii' }], h1: H.h1, lead: H.lead }, rel);
  const lista = sec('', `<div class="serv-grid">${SERVICII.map((s, i) => servCard(s, rel, { lat: i === 0, text: i === 0 ? s.lung : undefined })).join('')}
<div class="card serv-card card-cta"><h3>${esc(ACASA.servicii.cta.titlu)}</h3><p>${esc(ACASA.servicii.cta.text)}</p><a class="btn btn-auriu" href="#oferta">${esc(ACASA.servicii.cta.btn)}</a></div></div>`);
  const extra = sec('crem', `${titlu(H.extra.titlu)}${carduri(H.extra.carduri, 'grid-2')}`);
  return [cap, lista, extra, oferta(rel)].join('\n');
}

// ---------- Celelalte pagini
function paginaTarife(rel) {
  const T = ALTE.TARIFE;
  const cap = capPagina({ crumbs: [{ nume: 'Tarife' }], h1: T.h1, lead: T.lead }, rel);
  const niv = sec('', `${niveluri(T.niveluri, { text: 'Cere o ofertă', href: '#oferta' })}<p class="nota">${esc(T.nota)}</p>`);
  const fact = sec('crem', `${titlu(T.factori.titlu, T.factori.text)}${carduri(T.factori.carduri)}`);
  const sep = sec('', `<div class="intro-grid"><div>${titlu(T.separat.titlu, T.separat.text)}</div><div class="card card-include">${bife(T.separat.puncte)}</div></div>`);
  const intrebari = sec('crem faq', faq(T.faq));
  return [cap, niv, fact, sep, intrebari, oferta(rel, T.cta)].join('\n');
}

function paginaSchimbare(rel) {
  const S = ALTE.SCHIMBARE;
  const cap = capPagina({ crumbs: [{ nume: 'Schimbare contabil' }], h1: S.h1, lead: S.lead }, rel);
  const intro = sec('intro', `<div class="intro-grid"><div class="proza">${proza(S.intro)}</div><div class="card card-include"><h2>${esc(S.documente.titlu)}</h2>${bife(S.documente.puncte)}</div></div>`);
  const semne = sec('crem', `${titlu(S.semne.titlu)}${carduri(S.semne.carduri)}`);
  const cum = sec('', `${titlu(S.pasi.titlu)}${pasi(S.pasi.lista, 'auto')}`);
  const intrebari = sec('crem faq', faq(S.faq));
  return [cap, intro, semne, cum, intrebari, oferta(rel, S.cta)].join('\n');
}

function paginaLocal(rel) {
  const L = ALTE.LOCAL;
  const cap = capPagina({ crumbs: [{ nume: 'Contabilitate în Popești-Leordeni' }], h1: L.h1, lead: L.lead }, rel);
  const intro = sec('intro', `<div class="intro-grid"><div class="proza">${proza(L.intro)}</div><div class="card card-include"><h2>${esc(L.zone.titlu)}</h2>${bife(L.zone.puncte)}</div></div>`);
  const serv = sec('crem', `${titlu('Serviciile noastre')}<div class="serv-grid patru">${L.servicii.map((sl) => servCard(servDupaSlug(sl), rel, { numar: false })).join('')}</div>`);
  const intrebari = sec('faq', faq(L.faq));
  return [cap, intro, serv, intrebari, oferta(rel, L.cta)].join('\n');
}

function paginaDespre(rel) {
  const D = ALTE.DESPRE;
  const cap = capPagina({ crumbs: [{ nume: 'Despre' }], h1: D.h1, lead: D.lead }, rel);
  const poveste = sec('', `<div class="despre-grid"><div class="proza">${proza(D.poveste)}</div>${panouFapte(D.fapte)}</div>`);
  const princ = sec('crem', `${titlu(D.principii.titlu)}${carduri(D.principii.carduri, 'grid-4')}`);
  const prom = sec('', `<div class="promisiuni pattern"><h3>${esc(ACASA.proces.promisiuniTitlu)}</h3><ul>${ACASA.proces.promisiuni.map((p) => `<li><strong>${esc(p.nume)}</strong><p>${esc(p.text)}</p></li>`).join('')}</ul></div>`);
  const cond = sec('crem', `<div class="intro-grid"><div>${titlu(D.conducere.titlu)}<p class="proza-p">${esc(D.conducere.text)}</p></div><div class="card card-persoana"><span class="sigiliu-mare" aria-hidden="true">${EMBLEMA}</span><h3>${esc(D.conducere.nume)}</h3><p>${esc(D.conducere.rol)}</p></div></div>`);
  return [cap, poveste, princ, prom, cond, oferta(rel, D.cta)].join('\n');
}

function paginaContact(rel) {
  const C = ALTE.CONTACT;
  const O = ACASA.oferta;
  const optiuni = (arr) => arr.map((o) => `<option>${esc(o)}</option>`).join('');
  const cap = capPagina({ crumbs: [{ nume: 'Contact' }], h1: C.h1, lead: C.lead }, rel);
  const grid = sec('contact', `<div class="contact-grid">
<div>
<h2>${esc(C.canale.titlu)}</h2>
<ul class="contact-list pruna">
<li><a href="tel:${SITE.telefonTel}">${esc(SITE.telefon)}</a></li>
<li><a href="https://wa.me/${SITE.whatsapp}" rel="noopener">${waIcon(20)} WhatsApp</a></li>
<li><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></li>
<li>${esc(SITE.localitate)}</li>
</ul>
<p class="sec-text">${esc(C.canale.text)}</p>
<h2 class="h-mic sus">${esc(C.dupa.titlu)}</h2>
${pasi(C.dupa.pasi, 'lista')}
</div>
<form class="formular card" id="oferta" action="#" method="post" novalidate>
<h2 class="camp-lat">Cere o ofertă</h2>
<div class="camp"><label for="f-nume">Nume și prenume</label><input id="f-nume" name="nume" type="text" autocomplete="name" required></div>
<div class="camp"><label for="f-telefon">Telefon</label><input id="f-telefon" name="telefon" type="tel" autocomplete="tel" required></div>
<div class="camp"><label for="f-email">E-mail</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
<div class="camp"><label for="f-firma">Firma <span class="opt">(opțional)</span></label><input id="f-firma" name="firma" type="text" autocomplete="organization"></div>
<div class="camp"><label for="f-forma">Forma de organizare</label><select id="f-forma" name="forma">${optiuni(O.forme)}</select></div>
<div class="camp"><label for="f-serviciu">Serviciul dorit</label><select id="f-serviciu" name="serviciu">${optiuni(O.servicii)}</select></div>
<div class="camp camp-lat"><label for="f-mesaj">Mesaj</label><textarea id="f-mesaj" name="mesaj" rows="4"></textarea></div>
<div class="camp camp-lat bifa"><input id="f-acord" name="acord" type="checkbox" required><label for="f-acord">${esc(O.consimtamant)} <a href="${link(rel, 'politica-de-confidentialitate')}">Politica de confidențialitate</a></label></div>
<div class="camp camp-lat"><button class="btn btn-auriu" type="submit">${esc(O.btn)}</button></div>
</form>
</div>`);
  const harta = sec('crem', `${titlu('Unde suntem', SITE.localitate)}<div class="harta-acord" data-harta-q="${esc(C.harta.q)}" data-harta-titlu="${esc(C.harta.titlu)}"></div>`);
  const intrebari = sec('faq', faq(C.faq));
  return [cap, grid, harta, intrebari].join('\n');
}

function paginaMultumim(rel) {
  const M = ALTE.MULTUMIM;
  return [capPagina({ h1: M.h1, lead: M.text }, rel), sec('', `<div class="butoane sus-0"><a class="btn btn-pruna" href="${link(rel)}">Prima pagină</a><a class="btn btn-contur-pruna" href="tel:${SITE.telefonTel}">Sună: ${esc(SITE.telefon)}</a></div>`)].join('\n');
}

// ---------- Blogul
function paginaBlog(rel) {
  const B = BLOG.INDEX;
  const cap = capPagina({ crumbs: [{ nume: 'Blog' }], h1: B.h1, lead: B.lead }, rel);
  const lista = sec('', `<ul class="articole-grid doua">${BLOG.ARTICOLE.map((a) => artCard(a, rel)).join('')}</ul>`);
  return [cap, lista].join('\n');
}

function blocuri(corp) {
  return corp.map((b) => {
    if (b.t === 'h2') return `<h2>${esc(b.s)}</h2>`;
    if (b.t === 'p') return `<p>${esc(b.s)}</p>`;
    if (b.t === 'ul') return `<ul>${b.s.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    if (b.t === 'ol') return `<ol>${b.s.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>`;
    if (b.t === 'nota') return `<p class="nota-bloc">${esc(b.s)}</p>`;
    if (b.t === 'buton') return `<p><button type="button" class="btn btn-contur-pruna" data-setari-cookie>${esc(b.s)}</button></p>`;
    if (b.t === 'tabel') return `<div class="tabel-derulant"><table><thead><tr>${b.cap.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.randuri.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return '';
  }).join('\n');
}

function paginaArticol(a, rel) {
  const cap = capPagina({ crumbs: [{ nume: 'Blog', slug: 'blog' }, { nume: a.titlu }], h1: a.titlu, eticheta: a.cat, meta: `<time datetime="${a.data}">${esc(a.dataText)}</time> · ${esc(SITE.nume)}` }, rel);
  const corp = sec('', `<article class="proza articol">${blocuri(a.corp)}</article>`);
  const altele = BLOG.ARTICOLE.filter((x) => x.slug !== a.slug);
  const alte = sec('crem', `${titlu('Alte articole')}<ul class="articole-grid doua">${altele.map((x) => artCard(x, rel)).join('')}</ul>`);
  const cta = sec('', `<div class="schimbare-grid"><div><h2>Întrebări despre firma ta?</h2><p>Scrie-ne ce te încurcă. Îți răspundem în scris, pe situația ta.</p></div><div><a class="btn btn-pruna" href="${link(rel, 'contact')}">Cere o ofertă</a></div></div>`);
  return [cap, corp, alte, cta].join('\n');
}

function paginaLegal(p, rel) {
  const cap = capPagina({ crumbs: [{ nume: p.h1 }], h1: p.h1, lead: `Ultima actualizare: ${p.data}` }, rel);
  const corp = sec('', `<div class="proza legal">${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ''}${blocuri(p.corp)}</div>`);
  return [cap, corp].join('\n');
}

function pagina404(rel) {
  return sec('p404', `<div class="p404-grid">
${EMBLEMA}
<div><h1>${esc(PAGINA404.h1)}</h1><p>${esc(PAGINA404.text)}</p>
<div class="butoane"><a class="btn btn-pruna" href="${link(rel)}">Prima pagină</a><a class="btn btn-contur-pruna" href="${link(rel, 'contact')}">Contact</a></div></div>
</div>`);
}

// ---------- Scriere
function write(file, html) {
  const f = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
  console.log('scris', file, (html.length / 1024).toFixed(1), 'KB');
}
const publice = []; // pentru sitemap și llms.txt
function pagina(slug, page, body, activ, opts) {
  const rel = slug ? '../'.repeat(slug.split('/').length) : './';
  write(slug ? `${slug}/index.html` : 'index.html', render({ ...page, slug }, rel, typeof body === 'function' ? body(rel) : body, activ, opts));
  if (!page.noindex) publice.push({ slug, title: page.title, description: page.description });
}

scriePattern();

// Acasă
pagina('', { title: ACASA.title, description: ACASA.description }, acasaPage, 'acasa', { areOferta: true, ld: [ORGANIZATIA, { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.nume, url: `${SITE_URL}/` }, faqLd(ACASA.faq.intrebari)] });

// Servicii
pagina('servicii', SERV.HUB, paginaHub, 'servicii', { areOferta: true, ld: [crumbsLd([{ nume: 'Acasă', url: abs('') }, { nume: 'Servicii', url: abs('servicii') }])] });
for (const p of SERV.PAGINI) {
  const s = servDupaSlug(p.slug);
  pagina(p.slug, p, (rel) => paginaServiciu(p, rel), 'servicii', { areOferta: true, ld: [
    { '@context': 'https://schema.org', '@type': 'Service', name: s.nume, description: p.description, provider: { '@id': `${SITE_URL}/#organizatie` }, areaServed: ['București', 'Ilfov'], url: abs(p.slug) },
    faqLd(p.faq),
    crumbsLd([{ nume: 'Acasă', url: abs('') }, { nume: 'Servicii', url: abs('servicii') }, { nume: p.h1, url: abs(p.slug) }]),
  ] });
}

// Celelalte
const simple = [
  ['tarife', ALTE.TARIFE, paginaTarife, 'tarife', ALTE.TARIFE.faq],
  ['schimbare-contabil', ALTE.SCHIMBARE, paginaSchimbare, 'schimbare', ALTE.SCHIMBARE.faq],
  ['contabilitate-popesti-leordeni', ALTE.LOCAL, paginaLocal, 'local', ALTE.LOCAL.faq],
  ['despre', ALTE.DESPRE, paginaDespre, 'despre', null],
];
for (const [slug, p, fn, activ, f] of simple) {
  pagina(slug, p, fn, activ, { areOferta: true, ld: [crumbsLd([{ nume: 'Acasă', url: abs('') }, { nume: p.h1, url: abs(slug) }]), ...(f ? [faqLd(f)] : []), ...(slug === 'contabilitate-popesti-leordeni' ? [ORGANIZATIA] : [])] });
}
pagina('contact', ALTE.CONTACT, paginaContact, 'contact', { areOferta: true, ld: [ORGANIZATIA, crumbsLd([{ nume: 'Acasă', url: abs('') }, { nume: 'Contact', url: abs('contact') }]), faqLd(ALTE.CONTACT.faq)] });
pagina('multumim', { ...ALTE.MULTUMIM, noindex: true }, paginaMultumim, 'multumim');

// Blog
pagina('blog', BLOG.INDEX, paginaBlog, 'blog', { ld: [crumbsLd([{ nume: 'Acasă', url: abs('') }, { nume: 'Blog', url: abs('blog') }])] });
for (const a of BLOG.ARTICOLE) {
  pagina(`blog/${a.slug}`, { title: `${a.titlu} | Accoria`, description: a.description, tipOg: 'article' }, (rel) => paginaArticol(a, rel), 'blog', { ld: [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.titlu, description: a.description, datePublished: a.data, dateModified: a.data, inLanguage: 'ro', author: { '@type': 'Organization', name: SITE.nume, url: `${SITE_URL}/` }, publisher: { '@id': `${SITE_URL}/#organizatie` }, image: `${SITE_URL}/assets/og-accoria.png`, mainEntityOfPage: abs(`blog/${a.slug}`) },
    crumbsLd([{ nume: 'Acasă', url: abs('') }, { nume: 'Blog', url: abs('blog') }, { nume: a.titlu, url: abs(`blog/${a.slug}`) }]),
  ] });
}

// Legale
for (const p of [LEGAL.CONFIDENTIALITATE, LEGAL.COOKIE, LEGAL.TERMENI]) pagina(p.slug, p, (rel) => paginaLegal(p, rel), 'legal');

// 404: legături absolute, ca să meargă de pe orice adresă (și sub /accoria-preview/)
const baza = `${SITE_URL}/`;
write('404.html', render({ slug: '404.html', title: PAGINA404.title, description: PAGINA404.description, noindex: true }, baza, pagina404(baza), '404'));

// Fișiere tehnice
write('robots.txt', PROD ? `User-agent: *\nAllow: /\nSitemap: ${SITE.domeniu}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publice.map((p) => `<url><loc>${abs(p.slug)}</loc><lastmod>${AZI}</lastmod></url>`).join('\n')}\n</urlset>\n`);
write('llms.txt', `# ${SITE.nume}\n\n> ${SITE.descriptor}. Firmă de contabilitate din Popești-Leordeni (jud. Ilfov), pentru SRL-uri din București și Ilfov: contabilitate, consultanță fiscală, înființări și modificări la Registrul Comerțului, analiză cash-flow, salarizare. Denumire legală: ${SITE.firma}. Contact: ${SITE.email}, ${SITE.telefon}.\n\n## Pagini\n\n${publice.map((p) => `- [${p.title.replace(/ \| Accoria$/, '')}](${abs(p.slug)}): ${p.description}`).join('\n')}\n`);
write('.nojekyll', '');

// Verificare: niciun em dash sau en dash în HTML-ul generat
for (const p of [...publice.map((x) => (x.slug ? `${x.slug}/index.html` : 'index.html')), '404.html', 'multumim/index.html']) {
  const html = fs.readFileSync(path.join(ROOT, p), 'utf8');
  const dash = html.match(/[\u2013\u2014]/g);
  if (dash) console.warn('ATENȚIE: liniuțe lungi în', p, dash.length);
}
console.log('gata:', publice.length + 2, 'pagini, PROD =', PROD, 'SITE_URL =', SITE_URL);
