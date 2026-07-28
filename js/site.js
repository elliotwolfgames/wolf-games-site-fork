/* ============================================================
   WOLF GAMES — shared site behaviour for wolfgames.net
   Cache-busting for internal links, scroll reveals, the
   hamburger menu, and the ember particle field.
   Extracted from the original index.html / about.html so every
   page behaves identically. No dependencies, no build step.
   ============================================================ */
(function () {
  'use strict';

  /* ---- always fetch the latest build of internal pages ---- */
  (function () {
    var t = Date.now();
    var sel = 'a[href$="index.html"],a[href$="vault.html"],a[href$="about.html"],' +
              'a[href$="problem.html"],a[href$="how-it-works.html"],' +
              'a[href$="demo.html"],a[href$="contact.html"],a[href$="legal.html"]';
    document.querySelectorAll(sel).forEach(function (a) {
      a.href = a.getAttribute('href') + '?t=' + t;
    });
  })();

  /* ---- scroll reveal ---- */
  (function () {
    var targets = document.querySelectorAll('.obs');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (s) { s.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (s) { io.observe(s); });
  })();

  /* ---- hamburger menu ---- */
  (function () {
    var burger = document.getElementById('burger'), menu = document.getElementById('menu');
    if (!burger || !menu) return;
    function setOpen(open) {
      burger.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    burger.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  })();

  /* ---- ember particles ---- */
  window.WGParticles = function (id, color, count) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var el = document.getElementById(id);
    if (!el) return;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('i');
      var s = (1.5 + Math.random() * 2.6).toFixed(1);
      p.style.left = (Math.random() * 100).toFixed(2) + '%';
      p.style.width = s + 'px'; p.style.height = s + 'px';
      p.style.setProperty('--pc', color);
      p.style.setProperty('--pt', (7 + Math.random() * 10).toFixed(1) + 's');
      p.style.setProperty('--pd', (-Math.random() * 17).toFixed(1) + 's');
      p.style.setProperty('--px', Math.round(Math.random() * 140 - 70) + 'px');
      p.style.setProperty('--po', (0.2 + Math.random() * 0.45).toFixed(2));
      el.appendChild(p);
    }
  };
})();
