// Back to Character Select with "B"
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase()==='b' && !/input|textarea|select/i.test(e.target.tagName)) {
    window.location.href = '/start/';
  }
});

// Star burst on click (brief color cycle then navigate)
document.querySelectorAll('.icon-badge[data-star]').forEach(el => {
  el.addEventListener('click', (e) => {
    // slight burst before leaving; remove if you want instant nav
    e.preventDefault();
    el.classList.add('is-star');
    setTimeout(() => window.location.href = el.href, 350);
  });
});

// Basic reveal-on-scroll
const els = [...document.querySelectorAll('.card, .section h2, .hero h1, .hero p')];
const io = new IntersectionObserver((entries)=>{
  entries.forEach(ent => {
    if (ent.isIntersecting) ent.target.classList.add('is-in');
  });
},{threshold:.1});
els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
