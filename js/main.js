'use strict';
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('pending');
    observer.observe(element);
  });
  motionPreference.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.pending').forEach((element) => element.classList.remove('pending'));
    }
  });
}
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const destination = document.getElementById(link.hash.slice(1));
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
    }
  });
});
