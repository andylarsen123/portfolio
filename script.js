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

document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  });
});

const cursorLabelEls = document.querySelectorAll('a, button');

cursorLabelEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorDot.classList.add('show-label');
  });
  el.addEventListener('mouseleave', () => {
    cursorDot.classList.remove('show-label');
  });
});

