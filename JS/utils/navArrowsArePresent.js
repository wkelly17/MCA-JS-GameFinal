export default function navArrowsAreHidden() {
  let navArrows = [...document.querySelectorAll('[data-role = "nav-arrow"]')];

  if (navArrows.every((arrow) => arrow.classList.contains('dNone'))) {
    return true;
  }
}
