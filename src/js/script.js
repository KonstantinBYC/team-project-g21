const views = new Swiper('.our-products__block', {
  loop: true,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  simulateTouch: false,

  pagination: {
    el: '.our_products__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,

      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2.5,

      spaceBetween: 18,
    },
    320: {
      slidesPerView: 2,

      spaceBetween: 40,
    },
  },
});
