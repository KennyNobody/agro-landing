'use strict';

(function(){	
	let swiper = new Swiper('.slider__container', {
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

	let swiper2 = new Swiper('.about__container', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.about__link--next',
			prevEl: '.about__link--prev',
		},
	});

	// Fix header
	const headerAnchor = document.querySelector('.header');

	if (headerAnchor) {
		window.onscroll = function(){
			let distanceTop = window.pageYOffset;

			if (distanceTop <= 100) {
				headerAnchor.classList.remove('header--scrolled');
			} else {
				headerAnchor.classList.add('header--scrolled');
			}
		}
	};

	// Highlight links
	let mainNavLinks = document.querySelectorAll(".header__nav a");
	let mainSections = document.querySelectorAll("main section");

	let lastId;
	let cur = [];

	window.addEventListener("scroll", event => {
		let fromTop = window.scrollY;

		mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);

			if (
				section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
				) {
				link.classList.add("header__link--selected");
		} else {
			link.classList.remove("header__link--selected");
		}
	});
	});	
})();
