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

const cursorDot = document.querySelector('.cursor-dot');

if (cursorDot) {
  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateDot() {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;

    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;

    requestAnimationFrame(animateDot);
  }

  animateDot();
} else {
  console.warn('Cursor dot element not found in the DOM.');
}

