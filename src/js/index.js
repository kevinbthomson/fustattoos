import menuToggle from './menuToggle';

const body = document.body;
const menuBtn = document.querySelector('.menu-toggle-button');
const primaryNav = document.querySelector('nav[aria-label="Primary"]');

function toggleAll() {
  menuToggle(menuBtn);
  menuToggle(primaryNav);
  menuToggle(body);
}

menuBtn.addEventListener('click', () => {
  toggleAll();
});

document.addEventListener('keyup', (e) => {
  if (body.dataset.mobileNavOpen === 'true' && e.key === 'Escape') {
    toggleAll();
  }
});
