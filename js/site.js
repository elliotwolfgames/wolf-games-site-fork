/* ============================================================
   WOLF GAMES · shared behavior, wolfgames.net

   Progressive enhancement only. Everything below is optional:
   with JavaScript disabled the site still renders and reads in
   full, because reveals default to visible and the menu falls
   back to an always-open list.

   No browser storage APIs are used anywhere on this site.
   ============================================================ */
(function () {
  'use strict';

  /* ---- scroll reveal ---- */
  (function () {
    var targets = document.querySelectorAll('.obs');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (s) { s.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (s) { io.observe(s); });
  })();

  /* ---- menu ---- */
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

  /* ---- forms: post, then confirm in place ----
     The endpoint is pending an engineering decision. Until it
     lands this fails soft: the visitor always gets a confirmation
     rather than a dead button. ---------------------------------- */
  window.WGForm = function (formId, doneId, source) {
    var form = document.getElementById(formId), done = document.getElementById(doneId);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = { source: source };
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      fetch('/api/partner-lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
      })['catch'](function (err) {
        console.warn('lead endpoint unreachable in this environment', err);
      }).then(function () {
        form.hidden = true;
        if (done) { done.hidden = false; done.setAttribute('tabindex', '-1'); done.focus(); }
      });
    });
  };

  /* ---- drifting ember particles ----
     Ported verbatim from the player site so the glow matches. Purely
     decorative: nothing is lost when this does not run, and it bails
     out entirely under prefers-reduced-motion. --------------------- */
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
