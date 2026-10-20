document.getElementById('year').textContent = new Date().getFullYear();
const links = [...document.querySelectorAll('.nav > div a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        for (const link of links) {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }
  }, {rootMargin: '-15% 0px -55% 0px'});
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
