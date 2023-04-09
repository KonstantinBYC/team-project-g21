const views = new Swiper('.our-products__block', {
	loop: true,
	direction: 'horizontal',
	mousewheel: true,
	keyboard: true,
  
	pagination: {
	  el: '.our-products__swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
	  1200: {
		slidesPerView: 3.91,
	  
		spaceBetween: 18,
	  },
	  768: {
		slidesPerView: 2.5,
	  
		spaceBetween: 18,
	  },
	  320: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	},
  });
  
  