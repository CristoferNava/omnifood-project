// Open and close the menu in mobile
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

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll to others links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
