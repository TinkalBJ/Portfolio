// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Nav Toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Active Section Highlight
const links = document.querySelectorAll('.nav__link');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const setActive = (id) => links.forEach(l =>
  l.setAttribute('aria-current', l.getAttribute('href') === `#${id}` ? 'true' : 'false')
);
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
sections.forEach(s => io.observe(s));

// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
const applyTheme = (t) => document.documentElement.setAttribute('data-theme', t);
const stored = localStorage.getItem('theme');
applyTheme(stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next); localStorage.setItem('theme', next);
  });
}

// Typed.js Hero Animation
if (window.Typed) {
  new Typed('#typed', {
    strings: ['Java Developer', 'Frontend Developer', 'Data Science Enthusiast'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
}

// ScrollReveal Animations
if (window.ScrollReveal) {
  ScrollReveal().reveal('.section', { delay: 200, distance: '40px', origin: 'bottom', duration: 800 });
}

// Contact Form Demo
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    formMsg.textContent = "✅ Thanks! Your message has been recorded (demo only).";
    form.reset();
  });
}
