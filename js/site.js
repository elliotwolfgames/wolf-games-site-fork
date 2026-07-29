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
})();
