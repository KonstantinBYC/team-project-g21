const views = new Swiper('.our-products__block', {
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 18,
  pagination: {
    el: '.our_products__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    886: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
