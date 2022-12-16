import menuToggle from './menuToggle';

const menuBtn = document.querySelector('.menu-toggle-button');
const primaryNav = document.querySelector('nav[aria-label="Primary"]');

menuBtn.addEventListener('click', () => {
  menuToggle(menuBtn);
  menuToggle(primaryNav);
  menuToggle(document.body);
});
