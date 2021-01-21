export default function toggleArrows() {
  let navArrows = [...document.querySelectorAll('[data-role = "nav-arrow"]')];

  navArrows.forEach((arrow) => arrow.classList.toggle('dNone'));
}
