const navToggle = () => {
   const bugger = document.querySelector('#nav-toggle');
   const closeNav = document.querySelector('#close-nav');
   const mobileNav = document.querySelector('#mobile-nav');

   bugger.addEventListener('click', () => {
      mobileNav.classList.toggle('sidebar');
   });

   closeNav.addEventListener('click', () => {
      mobileNav.classList.remove('sidebar')
   });
   
   window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        mobileNav.classList.remove('sidebar')
      }
    });
}

navToggle();

const dropdownToggle = () => {
   const mobileDropDown = document.getElementsByClassName('.accordion');
   const content = document.querySelectorAll('.panel');
   console.log(mobileDropDown)

   
}
dropdownToggle();