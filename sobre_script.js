// ano no rodapé
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// revelar seções suavemente quando entram na tela
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
