// Accoria: meniul mobil, meniul derulant Servicii, mici comportamente. Fără dependențe.
(function () {
  'use strict';
  var antet = document.querySelector('.antet');
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    nav.id = 'meniu-mobil';
    burger.addEventListener('click', function () {
      var deschis = antet.classList.toggle('nav-deschis');
      burger.setAttribute('aria-expanded', deschis ? 'true' : 'false');
      document.documentElement.classList.toggle('meniu-deschis', deschis);
    });
  }

  // Meniul derulant: pe desktop se deschide la hover (CSS) și la clic pe săgeată; pe telefon lista este mereu desfășurată
  document.querySelectorAll('.are-sub').forEach(function (li) {
    var btn = li.querySelector('.sub-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var deschis = li.classList.toggle('deschis');
      btn.setAttribute('aria-expanded', deschis ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.are-sub')) return;
    document.querySelectorAll('.are-sub.deschis').forEach(function (li) {
      li.classList.remove('deschis');
      var b = li.querySelector('.sub-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.are-sub.deschis').forEach(function (li) { li.classList.remove('deschis'); });
    if (antet && antet.classList.contains('nav-deschis')) {
      antet.classList.remove('nav-deschis');
      document.documentElement.classList.remove('meniu-deschis');
      if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    }
  });

  // Legăturile din meniul mobil închid meniul
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && antet.classList.contains('nav-deschis')) {
        antet.classList.remove('nav-deschis');
        document.documentElement.classList.remove('meniu-deschis');
        if (burger) burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Formularul de ofertă: pe preview (action="#") nu trimite nicăieri; pe accoria.ro merge la trimite.php
  var pornit = Date.now();
  var eroare = new URLSearchParams(location.search).get('eroare');
  document.querySelectorAll('.formular').forEach(function (form) {
    var pagina = form.querySelector('input[name="pagina"]');
    if (pagina) pagina.value = location.pathname;
    // Mesajul de eroare întors de server, deasupra formularului de pe pagină
    var text = eroare && form.getAttribute('data-eroare-' + eroare);
    if (text) {
      var p = document.createElement('p');
      p.className = 'formular-eroare camp-lat';
      p.setAttribute('role', 'alert');
      p.textContent = text;
      var primul = form.querySelector('.camp');
      form.insertBefore(p, primul);
      // Mesajul ajunge în mijlocul ecranului (adresa duce doar la începutul secțiunii, iar pe telefon formularul e mai jos)
      // (după încărcare și după saltul browserului la #oferta, care altfel îl suprascrie)
      window.addEventListener('load', function () { setTimeout(function () { p.scrollIntoView({ block: 'center' }); }, 200); });
    }
    form.addEventListener('submit', function (e) {
      if (form.getAttribute('action') === '#') { e.preventDefault(); return; }
      var t = form.querySelector('input[name="t"]');
      if (t) t.value = String(Date.now() - pornit);
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
    });
  });
  // Butonul de trimitere redevine activ dacă vizitatorul se întoarce pe pagină cu „Înapoi”
  window.addEventListener('pageshow', function () {
    document.querySelectorAll('.formular button[type="submit"][disabled]').forEach(function (b) { b.disabled = false; b.removeAttribute('aria-busy'); });
  });
})();
