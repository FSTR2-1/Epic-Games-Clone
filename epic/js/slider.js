document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".carousel-wrapper");
  let slides = document.querySelectorAll(".carousel-item");
  let sliderWidth = slider.offsetWidth;
  let leftArrow = document.querySelector(".left-arrow-wrapper");
  let rightArrow = document.querySelector(".right-arrow-wrapper");
  console.log(slides);

  rightArrow.addEventListener(
    "click",
    function () {
      slides.forEach((element) => {
        element.style.transform =
          "translate3d(" + sliderWidth * -1 + "px, 0px, 0px)";
        element.style.transitionDuration = "300ms";
      });
    },
    false
  );
  leftArrow.addEventListener(
    "click",
    function () {
      slides.forEach((element) => {
        element.style.transform =
          "translate3d(0px, 0px, 0px)";
        element.style.transitionDuration = "300ms";
      });
    },
    false
  );
});
