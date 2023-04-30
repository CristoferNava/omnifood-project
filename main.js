const headerEl = document.querySelector(".header");
const btnMobileEl = document.querySelector(".btn-mobile-nav");
btnMobileEl.addEventListener("click", openCloseMenu);

function openCloseMenu() {
  if (!headerEl.classList.contains("nav-open")) {
    headerEl.classList.add("nav-open");
  } else {
    headerEl.classList.remove("nav-open");
  }
}
