/* ============================================================
   Hero reveal, anime.js v4

   v4 exposes named exports and has no default export, so this is
   `import { animate, onScroll }`, never `anime()`.

   The bare 'animejs' specifier resolves through the import map in
   index.html, which points at js/vendor/anime.esm.min.js. There is
   no bundler in this project and node_modules is gitignored, so the
   bundle is vendored into the repo and re-copied by `npm run vendor`
   on install.

   Two site rules this has to respect:
   - The page must read with JavaScript disabled. Nothing here sets
     an initial hidden state; that lives behind `.js` in CSS, which
     is only applied when scripting is on.
   - prefers-reduced-motion must skip the motion entirely.
   ============================================================ */
import { animate, onScroll } from 'animejs';

const hero = document.querySelector('.hero');
const targets = hero && hero.querySelectorAll('.hero-anim');

if (hero && targets && targets.length) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    // No motion. Drop the pre-animation state so the hero just renders.
    hero.classList.add('hero-ready');
  } else {
    animate(targets, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 900,
      delay: (el, i) => i * 90,
      ease: 'out(3)',
      autoplay: onScroll({
        target: hero,
        // fire when the hero's top edge reaches the bottom of the viewport
        enter: 'bottom top',
        // method-name sync: play once on enter, do not scrub with scroll
        sync: 'play',
        onEnter: () => hero.classList.add('hero-ready')
      })
    });
  }
}
