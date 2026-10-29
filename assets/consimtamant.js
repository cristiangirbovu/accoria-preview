// Acordul pentru cookie-uri (Legea 506/2004 + GDPR), conform Politicii de cookie-uri:
// bannerul la prima vizită (Accept toate / Refuz / Setări, refuzul la fel de vizibil ca acceptul), setările pe categorii,
// harta Google încărcată doar după acord și instrumentele de măsurare, care pornesc doar cu acord și doar cu cod completat.
// Alegerea se ține în stocarea locală a browserului, cheia „ac_cookie”, 12 luni (cum scrie în politică).
(function () {
  var CHEIE = 'ac_cookie';
  var VALABIL_ZILE = 365;
  // Codurile de măsurare se completează la lansare; cele goale nu se încarcă.
  var MASURARE = { ga4: '', clarity: '', googleAds: '', metaPixel: '' };
  // Măsurarea pornește doar pe domeniul site-ului, nu și pe copiile de lucru.
  var PE_DOMENIU = /(^|\.)accoria\.ro$/.test(location.hostname);
  var PAGINA_COOKIE = document.documentElement.getAttribute('data-pagina-cookie') || '#';

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function citeste() {
    try {
      var v = JSON.parse(localStorage.getItem(CHEIE) || 'null');
      if (!v || !v.data) return null;
      if ((Date.now() - new Date(v.data).getTime()) / 86400000 > VALABIL_ZILE) return null;
      return v;
    } catch (e) { return null; }
  }
  var stare = citeste();

  function salveaza(alegere) {
    stare = { versiune: 1, data: new Date().toISOString(), statistici: !!alegere.statistici, marketing: !!alegere.marketing, harti: !!alegere.harti };
    try { localStorage.setItem(CHEIE, JSON.stringify(stare)); } catch (e) {}
    ascundeBanner();
    aplica();
  }

  // Harta Google: până la acord, în locul ei stă un panou cu buton
  function completeazaHarti() {
    document.querySelectorAll('.harta-acord[data-harta-q]').forEach(function (el) {
      var q = el.getAttribute('data-harta-q');
      if (stare && stare.harti) {
        var f = document.createElement('iframe');
        f.className = 'harta-contact';
        f.title = el.getAttribute('data-harta-titlu') || 'Hartă';
        f.src = 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&output=embed&hl=ro';
        f.loading = 'lazy';
        f.referrerPolicy = 'no-referrer-when-downgrade';
        f.allowFullscreen = true;
        el.replaceWith(f);
      } else if (!el.childElementCount) {
        el.innerHTML = '<p>Harta este oferită de Google Maps și se afișează doar cu acordul tău pentru cookie-urile Google.</p>'
          + '<div class="harta-acord-actiuni"><button type="button" class="btn btn-pruna" data-cookie="harta">Afișează harta</button>'
          + '<a class="harta-deschide" href="https://www.google.com/maps/search/?api=1&amp;query=' + encodeURIComponent(q) + '" target="_blank" rel="noopener">Deschide în Google Maps</a></div>';
      }
    });
  }

  // Măsurarea: Google Analytics și Microsoft Clarity cu acordul pentru statistici; Google Ads și Meta Pixel cu acordul pentru marketing
  var gtagIncarcat = false, clarityIncarcat = false, pixelIncarcat = false;
  function incarcaScript(src) { var s = document.createElement('script'); s.async = true; s.src = src; document.head.appendChild(s); }
  function incarcaMasurare() {
    if (!PE_DOMENIU) return;
    var stat = !!(stare && stare.statistici), mkt = !!(stare && stare.marketing);
    if ((MASURARE.ga4 || MASURARE.googleAds) && (stat || mkt)) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
      if (!gtagIncarcat) {
        window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        incarcaScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MASURARE.ga4 || MASURARE.googleAds));
        window.gtag('js', new Date());
        gtagIncarcat = true;
      }
      window.gtag('consent', 'update', { analytics_storage: stat ? 'granted' : 'denied', ad_storage: mkt ? 'granted' : 'denied', ad_user_data: mkt ? 'granted' : 'denied', ad_personalization: mkt ? 'granted' : 'denied' });
      if (stat && MASURARE.ga4) window.gtag('config', MASURARE.ga4);
      if (mkt && MASURARE.googleAds) window.gtag('config', MASURARE.googleAds);
    }
    if (stat && MASURARE.clarity && !clarityIncarcat) {
      (function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, 'clarity', 'script', MASURARE.clarity);
      clarityIncarcat = true;
    }
    if (mkt && MASURARE.metaPixel && !pixelIncarcat) {
      /* eslint-disable */
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
      window.fbq('init', MASURARE.metaPixel);
      window.fbq('track', 'PageView');
      pixelIncarcat = true;
    }
  }

  // Evenimente (trimise doar cu acordul pentru statistici):
  //   generate_lead  pagina „Mulțumim”, după trimiterea formularului (form_name din adresă)
  //   contact        clic pe telefon, WhatsApp sau e-mail (method, link_location)
  function masoara(eveniment, parametri) {
    if (gtagIncarcat && stare && stare.statistici && typeof window.gtag === 'function') window.gtag('event', eveniment, parametri || {});
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me/"]');
    if (!a) return;
    var href = a.getAttribute('href');
    var metoda = href.indexOf('tel:') === 0 ? 'telefon' : href.indexOf('mailto:') === 0 ? 'email' : 'whatsapp';
    var zona = a.closest('.antet') ? 'antet' : a.closest('.subsol') ? 'subsol' : a.classList.contains('fab') ? 'flotant' : 'pagina';
    masoara('contact', { method: metoda, link_location: (document.body.getAttribute('data-pagina') || 'alta') + '-' + zona });
  });

  function aplica() {
    completeazaHarti();
    incarcaMasurare();
    if (document.body.getAttribute('data-pagina') === 'multumim') masoara('generate_lead', { form_name: new URLSearchParams(location.search).get('f') || 'oferta' });
  }

  // Bannerul (prima vizită) și setările pe categorii
  function arataBanner() {
    if (document.querySelector('.cookie-banner')) return;
    var b = document.createElement('div');
    b.className = 'cookie-banner';
    b.setAttribute('role', 'region');
    b.setAttribute('aria-label', 'Cookie-uri');
    b.innerHTML = '<p class="cookie-titlu">Cookie-uri</p>'
      + '<p class="cookie-text">Folosim cookie-uri necesare pentru funcționarea site-ului. Cu acordul tău, folosim și cookie-uri pentru statistici (Google Analytics, Microsoft Clarity), pentru măsurarea reclamelor (Google Ads, Meta) și pentru afișarea hărții (Google Maps). Poți schimba oricând alegerea din „Setări cookie-uri”, în subsolul site-ului. Detalii în <a href="' + esc(PAGINA_COOKIE) + '">Politica de cookie-uri</a>.</p>'
      + '<div class="cookie-butoane"><button type="button" class="btn btn-auriu" data-cookie="accept">Accept toate</button>'
      + '<button type="button" class="btn btn-contur-pruna" data-cookie="refuz">Refuz</button>'
      + '<button type="button" class="cookie-link" data-cookie="setari">Setări</button></div>';
    document.body.appendChild(b);
  }
  function ascundeBanner() { var b = document.querySelector('.cookie-banner'); if (b) b.remove(); }

  var CATEGORII = [
    { cheie: 'necesare', titlu: 'Necesare (mereu active)', text: 'Țin minte alegerea ta privind cookie-urile.' },
    { cheie: 'statistici', titlu: 'Statistici', text: 'Google Analytics și Microsoft Clarity, pe date agregate sau anonimizate.' },
    { cheie: 'marketing', titlu: 'Marketing', text: 'Google Ads și Meta Pixel, pentru măsurarea reclamelor.' },
    { cheie: 'harti', titlu: 'Hărți', text: 'Google Maps, pe pagina de Contact.' },
  ];
  function deschideSetari() {
    var d = document.querySelector('.cookie-setari');
    if (!d) {
      d = document.createElement('dialog');
      d.className = 'cookie-setari';
      d.setAttribute('aria-labelledby', 'cookie-setari-titlu');
      d.innerHTML = '<form method="dialog"><h2 id="cookie-setari-titlu">Setări cookie-uri</h2>'
        + '<button type="submit" class="cookie-inchide" aria-label="Închide">×</button>'
        + CATEGORII.map(function (c) { return '<label class="cookie-categorie"><input type="checkbox" name="' + c.cheie + '"' + (c.cheie === 'necesare' ? ' checked disabled' : '') + '><span><b>' + c.titlu + '</b>' + c.text + '</span></label>'; }).join('')
        + '<div class="cookie-butoane"><button type="button" class="btn btn-auriu" data-cookie="salveaza">Salvează alegerea</button>'
        + '<button type="button" class="btn btn-contur-pruna" data-cookie="accept">Accept toate</button></div>'
        + '<p class="cookie-nota">Detalii în <a href="' + esc(PAGINA_COOKIE) + '">Politica de cookie-uri</a>.</p></form>';
      document.body.appendChild(d);
    }
    ['statistici', 'marketing', 'harti'].forEach(function (k) { d.querySelector('input[name="' + k + '"]').checked = !!(stare && stare[k]); });
    if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
  }
  function inchideSetari() { var d = document.querySelector('.cookie-setari'); if (d && d.open) d.close(); }

  document.addEventListener('click', function (e) {
    var deschide = e.target.closest('[data-setari-cookie]');
    if (deschide) { e.preventDefault(); deschideSetari(); return; }
    var t = e.target.closest('[data-cookie]');
    if (!t) return;
    var actiune = t.getAttribute('data-cookie');
    if (actiune === 'accept') { salveaza({ statistici: true, marketing: true, harti: true }); inchideSetari(); }
    else if (actiune === 'refuz') salveaza({ statistici: false, marketing: false, harti: false });
    else if (actiune === 'setari') deschideSetari();
    else if (actiune === 'salveaza') {
      var d = document.querySelector('.cookie-setari');
      salveaza({ statistici: d.querySelector('input[name="statistici"]').checked, marketing: d.querySelector('input[name="marketing"]').checked, harti: d.querySelector('input[name="harti"]').checked });
      inchideSetari();
    }
    else if (actiune === 'harta') salveaza(Object.assign({ statistici: false, marketing: false }, stare || {}, { harti: true }));
  });

  window.AcCookie = { aplica: aplica, deschideSetari: deschideSetari, masoara: masoara };

  function porneste() {
    aplica();
    if (!stare) arataBanner();
    if (location.hash === '#setari') deschideSetari();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', porneste); else porneste();
})();
