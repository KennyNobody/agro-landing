'use strict';

(function(){
	var swiper = new Swiper('.slider__container', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.slider__link--next',
			prevEl: '.slider__link--prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			680: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			450: {
				slidesPerView: 1,
				spaceBetween: 10
			},
		}
	});
	var swiper2 = new Swiper('.about__container', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.about__link--next',
			prevEl: '.about__link--prev',
		},
	});
})();