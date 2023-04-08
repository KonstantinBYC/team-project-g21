const views = new Swiper('.reviews__block', {
  loop: true,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  simulateTouch: false,

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
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
