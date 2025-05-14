// swiper 

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 30000000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
