const navToggle = () => {
  const bugger = document.querySelector("#nav-toggle");
  // const closeNav = document.querySelector("#close-nav");
  const mobileNav = document.querySelector("#mobile-nav");

  bugger.addEventListener("click", () => {
    // bugger.classList.toggle("bx-menu-alt-left");
    bugger.firstElementChild.classList.toggle("bx-menu-alt-left");
    bugger.firstElementChild.classList.toggle("bx-x");
    // bugger.classList.toggle("bx bx-x-circle");
    mobileNav.classList.toggle("close");
    mobileNav.classList.toggle("open");
  });
};

navToggle();
