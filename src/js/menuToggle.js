function toggleAriaExanded(el) {
  if (el.type === 'button') {
    const expandedAttr = 'aria-expanded';
    const isExpanded = el.getAttribute(expandedAttr);
    console.log(typeof el, el);

    isExpanded === 'true'
      ? el.setAttribute(expandedAttr, 'false')
      : el.setAttribute(expandedAttr, 'true');
  }
}

export default function menuToggle(el) {
  if (el.type === 'button') {
    toggleAriaExanded(el);
  }

  el.dataset.mobileNavOpen === 'true'
    ? (el.dataset.mobileNavOpen = 'false')
    : (el.dataset.mobileNavOpen = 'true');
}
