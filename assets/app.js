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

  // Formularul de ofertă: în machetă nu trimite nicăieri; validarea nativă rămâne pentru implementare
  var form = document.querySelector('.formular');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (form.getAttribute('action') === '#') e.preventDefault();
    });
  }
})();
