// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// lightbox simples
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const big = lightbox.querySelector('img');
  document.querySelectorAll('.thumb').forEach(img => {
    img.addEventListener('click', () => {
      big.src = img.src;
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
}

// mapa Leaflet: ponto fixo
const mapEl = document.getElementById('map');
if (mapEl && window.L) {
  const LAT = -29.6794167;
  const LON = -53.5826389;

  const map = L.map('map', { scrollWheelZoom:false }).setView([LAT, LON], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  L.marker([LAT, LON]).addTo(map).bindPopup('Bolo no Portão').openPopup();
  map.on('click', () => map.scrollWheelZoom.enable()); // habilita scroll após clique
}
