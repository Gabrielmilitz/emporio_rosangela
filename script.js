// ano
document.getElementById('year').textContent = new Date().getFullYear();

// animações suaves ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.2 });
document.querySelectorAll('.fadein').forEach(el => observer.observe(el));

// ===== Menu Mobile =====
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('primary-nav');

function closeMenu(){
  nav.classList.remove('open');
  document.body.classList.remove('noscroll');
  if(menuBtn){
    menuBtn.setAttribute('aria-expanded','false');
    menuBtn.setAttribute('aria-label','Abrir menu');
    menuBtn.querySelector('.icon-burger').style.display = '';
    menuBtn.querySelector('.icon-close').style.display = 'none';
  }
}
function openMenu(){
  nav.classList.add('open');
  document.body.classList.add('noscroll');
  if(menuBtn){
    menuBtn.setAttribute('aria-expanded','true');
    menuBtn.setAttribute('aria-label','Fechar menu');
    menuBtn.querySelector('.icon-burger').style.display = 'none';
    menuBtn.querySelector('.icon-close').style.display = '';
  }
}
menuBtn?.addEventListener('click', ()=>{
  const isOpen = nav.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', (e)=>{
  if(!nav || !menuBtn) return;
  const inside = nav.contains(e.target) || menuBtn.contains(e.target);
  if(!inside && nav.classList.contains('open')) closeMenu();
});
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && nav.classList.contains('open')) closeMenu();
});

// ===== Debug opcional: marca imagens quebradas =====
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('error', ()=>{
    console.warn('Imagem não carregou:', img.getAttribute('src'));
    img.style.background='repeating-linear-gradient(45deg,#444,#444 10px,#555 10px,#555 20px)';
    img.style.minHeight='160px';
  });
});

// ===== Leaflet opcional (você usa iframe) =====
if (window.L && document.getElementById('map')) {
  const map = L.map('map', { scrollWheelZoom: false }).setView([-29.6794167, -53.5826389], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '&copy; OpenStreetMap'
  }).addTo(map);
  L.marker([-29.6794167, -53.5826389]).addTo(map).bindPopup('Bolo no Portão').openPopup();
}
