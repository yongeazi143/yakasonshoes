const scroll = document.getElementsByClassName("container-slide")[0];
const buttonRight = document.getElementById("slide-right");
const buttonLeft = document.getElementById("slide-left");
const items = document.getElementsByClassName("card");

buttonLeft.addEventListener("click", function () {
  scroll.scrollLeft -= 250;
});

buttonRight.addEventListener("click", function () {
  // console.log(scroll.scrollLeft);
  scroll.scrollLeft += 250;
});

scroll.addEventListener("scroll", () => {
  if (scroll.offsetWidth > scroll.scrollWidth - scroll.scrollLeft - 1) {
    // console.log("width "+scroll.scrollWidth);
    // console.log("left "+scroll.scrollLeft);
    // console.log("offset width: "+scroll.offsetWidth);

    scroll.scrollLeft = 0;
  }
});

function autoPlay() {
  if (scroll.offsetWidth > scroll.scrollWidth - scroll.scrollLeft - 1) {
    scroll.scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  } else {
    scroll.scroll({
      left: (scroll.scrollLeft += 5),
      top: 0,
      behavior: "smooth",
    });
  }
}

let play = setInterval(autoPlay, 150);

for (let item of items) {
  item.addEventListener("mouseover", function () {
    clearInterval(play);
  });

  item.addEventListener('mouseout', function () {
      return play = setInterval(autoPlay,150);
  })
}

