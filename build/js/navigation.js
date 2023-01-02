const navToggle = () => {
  const bugger = document.querySelector("#nav-toggle");
  const closeNav = document.querySelector("#close-nav");
  const mobileNav = document.querySelector("#mobile-nav");
  // let isFalse = false;
  bugger.addEventListener("click", () => {
    mobileNav.classList.toggle("close");
    mobileNav.classList.toggle("open");
  });

  // closeNav.addEventListener('click', () => {
  //    // mobileNav.classList.remove('sidebar')
  //    if (!isFalse) {
  //    mobileNav.classList.remove('close transition-all');
  //    mobileNav.classList.add('open transition-all')

  //    }
  // });

  // window.addEventListener("resize", function () {
  //    if (window.innerWidth >= 768) {
  //      mobileNav.classList.toggle('')
  //    }
  //  });
};

navToggle();

const dropdownToggle = () => {
  let active = true;

  const dropServices = document.querySelector("#drop-services");
  const servicesContent = document.querySelector("#services-content");
  const dropProduct = document.querySelector("#drop-products");
  const productContent = document.querySelector("#products-content");
  dropServices.addEventListener("click", function () {
    // services
      dropServices.classList.toggle("bg-amber-700");
      servicesContent.classList.toggle("nav-close");
      servicesContent.classList.toggle("nav-open");
  });
  dropProduct.addEventListener("click", function () {
    //  product
    dropProduct.classList.toggle("bg-amber-700");
    productContent.classList.toggle("nav-close");
    productContent.classList.toggle("nav-open");
  });
};
dropdownToggle();
