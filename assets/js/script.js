'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    // prepni tlacidla
    navigationLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    // prepni sekcie
    pages.forEach((page) => {
      if (page.getAttribute("data-page") === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});
