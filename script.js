// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Dark mode toggle
document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');

});

const dot = document.querySelector('.cursor-dot');

window.addEventListener('mousemove', (e) => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
