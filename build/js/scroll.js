// Smooth Scroll Animation
const scrollToSection = () => {
  const navbarlinks = document.querySelectorAll(".navbar a");

  // console.log(navbarlinks);
  //Chaning the colours of link when clicked!!.
  navbarlinks.forEach((_link) => {
    _link.addEventListener("click", function (event) {
      for (let link of navbarlinks) {
        if (link.classList.contains("active")) {
          link.classList.toggle("active");
        }
      }

      _link.classList.toggle("active");

      console.log(_link.offsetTop);
      smoothScroll(event);
    });
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId =
      event.currentTarget.getAttribute("href") === "#"
        ? "header"
        : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop - 50;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000;
    let start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // window.scrollTo(0, distance*(progress/duration) + startPosition);
      window.scrollTo(0, linear(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }

    console.log(targetId);
  }

  // Easing Functions

  function linear(t, b, c, d) {
    return (c * t) / d + b;
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
};
scrollToSection();
