const navbar = document.querySelector('.nav-bar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

const handleScroll = () => {
  if (window.scrollY > 24) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

handleScroll();
