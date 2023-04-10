const views = new Swiper('.reviews__block', {
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.reviews__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      /* slidesPerGroup: 3, */
      spaceBetween: 28,
    },
    768: {
      slidesPerView: 2,
      /* slidesPerGroup: 2, */
      spaceBetween: 16,
    },
  },
});
