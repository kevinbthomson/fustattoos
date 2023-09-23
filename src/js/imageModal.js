export default function imageModal(link, modal) {
  const modalImage = modal.querySelector('img');

  modalImage.src = link.href;
  modalImage.src
    ? (modal.dataset.open = 'true')
    : (modal.dataset.open = 'false');
}
