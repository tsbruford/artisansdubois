/* ============================================================
   Artisans du Bois site behaviour
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Gallery data ---------- */
  const GALLERY = [
    { src: 'exterior-1', cat: 'exterior', tag: 'Exterior', title: 'Stone Arched Entry' },
    { src: 'exterior-2', cat: 'exterior', tag: 'Exterior', title: 'Mediterranean Double-Entry' },
    { src: 'exterior-3', cat: 'exterior', tag: 'Exterior', title: 'Hand-Carved Front Doors' },
    { src: 'exterior-4', cat: 'exterior', tag: 'Exterior', title: 'Grand Arched Entrance' },
    { src: 'exterior-5', cat: 'exterior', tag: 'Exterior', title: 'Custom Estate Door' },
    { src: 'exterior-6', cat: 'exterior', tag: 'Exterior', title: 'Estate Entryway' },
    { src: 'interior-1', cat: 'interior', tag: 'Interior', title: 'Gallery Hall Passage Doors' },
    { src: 'interior-2', cat: 'interior', tag: 'Interior', title: 'Arched Interior Doorway' },
    { src: 'interior-3', cat: 'interior', tag: 'Interior', title: 'Carved Passage Door' },
    { src: 'interior-4', cat: 'interior', tag: 'Interior', title: 'Arched Double Doors' },
    { src: 'interior-5', cat: 'interior', tag: 'Interior', title: 'Transom Passage Door' },
    { src: 'interior-6', cat: 'interior', tag: 'Interior', title: 'Raised-Panel Door' },
    { src: 'custom-1', cat: 'custom', tag: 'Custom Build', title: 'Library & Built-Ins' },
    { src: 'custom-2', cat: 'custom', tag: 'Custom Build', title: 'Domed Ceiling Room' },
    { src: 'custom-3', cat: 'custom', tag: 'Custom Build', title: 'Bespoke Kitchen' },
    { src: 'custom-4', cat: 'custom', tag: 'Custom Build', title: 'Wine Cellar' },
    { src: 'custom-5', cat: 'custom', tag: 'Custom Build', title: 'Curved Staircase' },
    { src: 'custom-6', cat: 'custom', tag: 'Custom Build', title: 'Carved Relief Panel' },
    { src: 'hardware-1', cat: 'hardware', tag: 'Hardware', title: 'Wrought-Iron Strap Hinges' },
    { src: 'hardware-2', cat: 'hardware', tag: 'Hardware', title: 'Hand-Forged Scroll Hardware' },
    { src: 'hardware-3', cat: 'hardware', tag: 'Hardware', title: 'Leaded Glass & Detail' },
    { src: 'hardware-4', cat: 'hardware', tag: 'Hardware', title: 'Detailed Door Joinery' }
  ];

  /* ---------- Build gallery ---------- */
  const grid = document.getElementById('galleryGrid');
  GALLERY.forEach((item, i) => {
    const fig = document.createElement('figure');
    fig.className = 'tile reveal';
    fig.dataset.cat = item.cat;
    fig.dataset.index = i;
    fig.innerHTML =
      '<img src="images/gallery/' + item.src + '.jpg" alt="' + item.title + '" loading="lazy">' +
      '<figcaption class="tile-cap"><span class="tile-tag">' + item.tag + '</span>' + item.title + '</figcaption>';
    grid.appendChild(fig);
  });

  /* ---------- Filters ---------- */
  const filters = document.querySelectorAll('.filter');
  const tiles = Array.from(document.querySelectorAll('.tile'));
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      tiles.forEach(t => {
        const show = (f === 'all' || t.dataset.cat === f);
        t.classList.toggle('hide', !show);
      });
    });
  });

  /* ---------- Lightbox ---------- */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  let visible = [];        // currently-visible gallery indices
  let pos = 0;

  function currentVisible() {
    return tiles.filter(t => !t.classList.contains('hide')).map(t => +t.dataset.index);
  }
  function openLB(idx) {
    visible = currentVisible();
    pos = visible.indexOf(idx);
    render();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function render() {
    const item = GALLERY[visible[pos]];
    lbImg.src = 'images/gallery/' + item.src + '.jpg';
    lbImg.alt = item.title;
    lbCap.textContent = item.title + ' · ' + item.tag;
  }
  function step(d) { pos = (pos + d + visible.length) % visible.length; render(); }
  function closeLB() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  grid.addEventListener('click', e => {
    const tile = e.target.closest('.tile');
    if (tile) openLB(+tile.dataset.index);
  });
  document.getElementById('lbClose').addEventListener('click', closeLB);
  document.getElementById('lbNext').addEventListener('click', () => step(1));
  document.getElementById('lbPrev').addEventListener('click', () => step(-1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
  });

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section, .tile, .craft-card, .about-media, .about-text').forEach(el => {
    el.classList.add('reveal'); io.observe(el);
  });


  /* ---------- Gallery slideshow (cross-fade) ---------- */
  const SLIDES = ['exterior-1', 'interior-2', 'custom-2', 'exterior-3', 'interior-4', 'custom-4', 'exterior-6', 'custom-6'];
  const show = document.getElementById('slideshow');
  if (show) {
    SLIDES.forEach((s, i) => {
      const d = document.createElement('div');
      d.className = 'slide' + (i === 0 ? ' on' : '');
      d.style.backgroundImage = "url('images/gallery/" + s + ".jpg')";
      show.appendChild(d);
    });
    const slides = show.querySelectorAll('.slide');
    if (slides.length > 1) {
      let si = 0;
      setInterval(() => {
        slides[si].classList.remove('on');
        si = (si + 1) % slides.length;
        slides[si].classList.add('on');
      }, 4200);
    }
  }

  /* ---------- Year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
