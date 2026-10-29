// Generatorul site-ului Accoria: node src/build.js [--prod]
// Scrie index.html (pagina principală), 404.html, robots.txt și pattern-ul cu emblema, din src/content.js.
const fs = require('fs');
const path = require('path');
const { SITE, SERVICII, NAV, ACASA, SUBSOL, PAGINA404 } = require('./content.js');

const PROD = process.argv.includes('--prod');
const ROOT = path.join(__dirname, '..');
const SITE_URL = PROD ? SITE.domeniu : 'https://cristiangirbovu.github.io/accoria-preview';
const AN = new Date().getFullYear();
const VER = Date.now().toString(36).slice(-6);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (rel, slug) => (slug ? `${rel}${slug}/` : rel);

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

function head(page, rel) {
  const url = `${SITE_URL}${link('/', page.slug)}`;
  return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${PROD && !page.noindex ? '' : '<meta name="robots" content="noindex, nofollow">\n'}<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
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
</head>`;
}

function header(rel, activ) {
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
<a class="btn btn-auriu btn-antet" href="${activ === 'acasa' ? '#oferta' : link(rel, 'contact')}">Cere o ofertă</a>
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
<ul>${SUBSOL.legal.map((i) => `<li><a href="${link(rel, i.slug)}">${esc(i.eticheta)}</a></li>`).join('')}<li><a href="#" class="setari-cookie">Setări cookie-uri</a></li></ul>
</div>
</div>
</footer>
<a class="fab" href="https://wa.me/${SITE.whatsapp}" rel="noopener" aria-label="Scrie-ne pe WhatsApp">${waIcon(28)}</a>
<script src="${rel}assets/app.js?v=${VER}" defer></script>
</body>
</html>`;
}

const sec = (cls, inner, id) => `<section class="sec ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;
const titlu = (t, p) => `<div class="sec-cap"><h2>${esc(t)}</h2><span class="linie" aria-hidden="true"></span>${p ? `<p class="sec-text">${esc(p)}</p>` : ''}</div>`;
const pill = (t) => `<span class="pastila">${esc(t)}</span>`;
const bife = (items) => `<ul class="bife">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
const sigiliu = (n) => `<span class="sigiliu" aria-hidden="true">${n}</span>`;

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
  const cine = sec('cine', `<h2 class="h-mic">${esc(A.cine.titlu)}</h2>
<ul class="cine-grid">${A.cine.segmente.map((s) => `<li class="card"><span class="linie-mica" aria-hidden="true"></span><h3>${esc(s.nume)}</h3><p>${esc(s.text)}</p></li>`).join('')}</ul>`);

  const S = A.servicii;
  const servicii = sec('servicii crem', `${titlu(S.titlu, S.text)}
<div class="serv-grid">${SERVICII.map((s, i) => `<article class="card serv-card${i === 0 ? ' lat' : ''}">${sigiliu(i + 1)}<h3><a class="acopera" href="${link(rel, s.slug)}">${esc(s.nume)}</a></h3><p>${esc(i === 0 && s.lung ? s.lung : s.scurt)}</p><span class="mai" aria-hidden="true">${esc(S.detalii)}</span></article>`).join('')}
<div class="card serv-card card-cta"><h3>${esc(S.cta.titlu)}</h3><p>${esc(S.cta.text)}</p><a class="btn btn-auriu" href="${S.cta.href}">${esc(S.cta.btn)}</a></div>
</div>`);

  const nisa = sec('nisa', `<div class="nisa-grid">
<div>${pill(A.nisa.eticheta)}<h2>${esc(A.nisa.titlu)}</h2><p>${esc(A.nisa.text)}</p><a class="btn btn-pruna" href="${link(rel, A.nisa.btn.slug)}">${esc(A.nisa.btn.text)}</a></div>
<div class="card card-lista">${bife(A.nisa.puncte)}</div>
</div>`);

  const proces = sec('proces crem', `${titlu(A.proces.titlu)}
<ol class="pasi">${A.proces.pasi.map((p, i) => `<li class="card">${sigiliu(i + 1)}<h3>${esc(p.nume)}</h3><p>${esc(p.text)}</p></li>`).join('')}</ol>
<div class="promisiuni pattern">
<h3>${esc(A.proces.promisiuniTitlu)}</h3>
<ul>${A.proces.promisiuni.map((p) => `<li><strong>${esc(p.nume)}</strong><p>${esc(p.text)}</p></li>`).join('')}</ul>
</div>`);

  const tarife = sec('tarife', `${titlu(A.tarife.titlu, A.tarife.text)}
<div class="niveluri">${A.tarife.niveluri.map((n) => `<div class="nivel${n.recomandat ? ' rec' : ''}">
${n.recomandat ? pill('Recomandat') : ''}
<h3>${esc(n.nume)}</h3>
<p class="pret"><span class="de-la">de la</span> <span class="suma">${esc(n.pret)}</span> <span class="luna">lei/lună</span></p>
<p class="pentru">${esc(n.pentru)}</p>
${bife(n.include)}
<a class="btn ${n.recomandat ? 'btn-auriu' : 'btn-contur-pruna'}" href="${A.tarife.btn.href}">${esc(A.tarife.btn.text)}</a>
</div>`).join('')}</div>
<p class="nota">${esc(A.tarife.nota)}</p>`, 'tarife');

  const schimbare = sec('schimbare crem', `<div class="schimbare-grid">
<div><h2>${esc(A.schimbare.titlu)}</h2><p>${esc(A.schimbare.text)}</p></div>
<div><a class="btn btn-pruna" href="${link(rel, A.schimbare.btn.slug)}">${esc(A.schimbare.btn.text)}</a></div>
</div>`);

  const despre = sec('despre', `<div class="despre-grid">
<div>${titlu(A.despre.titlu)}${A.despre.paragrafe.map((p) => `<p>${esc(p)}</p>`).join('')}<a class="link-sageata" href="${link(rel, A.despre.btn.slug)}">${esc(A.despre.btn.text)}</a></div>
<div class="card despre-panou">${EMBLEMA}<dl>${A.despre.fapte.map((f) => `<div><dt>${esc(f.nume)}</dt><dd>${esc(f.text)}</dd></div>`).join('')}</dl></div>
</div>`);

  const termene = sec('termene crem', `<div class="termene-grid">
<div class="card termene-card">${pill(A.termene.eticheta)}<h2>${esc(A.termene.titlu)}</h2>
<dl>${A.termene.randuri.map((r) => `<div><dt>${esc(r.data)}</dt><dd>${esc(r.text)}</dd></div>`).join('')}</dl></div>
<div class="articole"><h2>${esc(A.blog.titlu)}</h2>
<ul class="articole-grid">${A.blog.articole.map((a) => `<li class="card art-card">${pill(a.cat)}<h3><a class="acopera" href="${link(rel, 'blog/' + a.slug)}">${esc(a.titlu)}</a></h3><p>${esc(a.text)}</p></li>`).join('')}</ul>
<a class="link-sageata" href="${link(rel, A.blog.btn.slug)}">${esc(A.blog.btn.text)}</a></div>
</div>`);

  const faq = sec('faq', `${titlu(A.faq.titlu)}
<div class="faq-list">${A.faq.intrebari.map((q) => `<details><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}</div>`);

  const O = A.oferta;
  const optiuni = (arr) => arr.map((o) => `<option>${esc(o)}</option>`).join('');
  const oferta = sec('oferta', `<div class="oferta-grid">
<div class="oferta-text">
<h2>${esc(O.titlu)}</h2>
<p>${esc(O.text)}</p>
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

  return [cine, servicii, nisa, proces, tarife, schimbare, despre, termene, faq, oferta].join('\n');
}

function pagina404(rel) {
  return sec('p404', `<div class="p404-grid">
${EMBLEMA}
<div><h1>${esc(PAGINA404.h1)}</h1><p>${esc(PAGINA404.text)}</p>
<div class="butoane"><a class="btn btn-pruna" href="${link(rel)}">Prima pagină</a><a class="btn btn-contur-pruna" href="${link(rel, 'contact')}">Contact</a></div></div>
</div>`);
}

function render(page, rel, body, activ) {
  return `${head(page, rel)}
<body class="pagina-${activ}">
<a class="sari" href="#continut">Sari la conținut</a>
${header(rel, activ)}
<main id="continut">
${body}
</main>
${footer(rel)}`;
}

function write(file, html) {
  const f = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
  console.log('scris', file, (html.length / 1024).toFixed(1), 'KB');
}

scriePattern();

// Pagina principală
const acasa = { slug: '', title: ACASA.title, description: ACASA.description };
write('index.html', render(acasa, './', hero(ACASA.hero, './') + '\n' + acasaPage('./'), 'acasa'));

// Pagina 404: legături absolute, ca să meargă de pe orice adresă (și sub /accoria-preview/)
const baza = `${SITE_URL}/`;
write('404.html', render({ slug: '404.html', title: PAGINA404.title, description: PAGINA404.description, noindex: true }, baza, pagina404(baza), '404'));

// Fișiere tehnice
write('robots.txt', PROD ? `User-agent: *\nAllow: /\nSitemap: ${SITE.domeniu}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
write('.nojekyll', '');

// Verificare: niciun em dash sau en dash în HTML-ul generat
for (const f of ['index.html', '404.html']) {
  const html = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const dash = html.match(/[–—]/g);
  if (dash) console.warn('ATENȚIE: liniuțe lungi în', f, dash.length);
}
console.log('gata, PROD =', PROD, 'SITE_URL =', SITE_URL);
