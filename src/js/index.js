import menuToggle from './menuToggle';
import imageModal from './imageModal';

const body = document.body;
const menuBtn = document.querySelector('.menu-toggle-button');
const primaryNav = document.querySelector('nav[aria-label="Primary"]');
const modal = document.querySelector('.portfolio-modal');

function toggleAll() {
  menuToggle(menuBtn);
  menuToggle(primaryNav);
  menuToggle(body);
}

menuBtn.addEventListener('click', () => {
  toggleAll();
});

const portfolioImageLinks = document.querySelectorAll('.portfolio a');
let currentImage = 0;

if (portfolioImageLinks && modal) {
  portfolioImageLinks.forEach((link, index) =>
    link.addEventListener('click', (e) => {
      e.preventDefault();
      imageModal(link, modal);
      currentImage = index;
    })
  );
}

if (modal) {
  modal.addEventListener('click', () => {
    if (modal.dataset.open === 'true') {
      modal.dataset.open = 'false';
    }
  });
}

document.addEventListener('keyup', (e) => {
  if (body.dataset.mobileNavOpen === 'true' && e.key === 'Escape') {
    toggleAll();
  }

  if (modal.dataset.open === 'true' && e.key === 'Escape') {
    modal.dataset.open = 'false';
  }

  if (modal.dataset.open === 'true' && e.key === 'ArrowRight') {
    console.log(currentImage, portfolioImageLinks.length);
    if (currentImage + 1 === portfolioImageLinks.length) return;

    currentImage = currentImage += 1;
    imageModal(portfolioImageLinks[currentImage], modal);
  }

  if (modal.dataset.open === 'true' && e.key === 'ArrowLeft') {
    if (currentImage === 0) return;
    currentImage = currentImage -= 1;
    imageModal(portfolioImageLinks[currentImage], modal);
  }
});
