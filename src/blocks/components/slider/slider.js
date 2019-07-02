import {Slider} from './sliders/slider-class';

let sliderNews = new Slider({
	element: document.querySelector('.js-slider--news'),
	sliderName: 'slider-news',
	sliderOptions: {
		startAt: 0,
		perView: 2,
		animationTimingFunc: 'ease',
		animationDuration: 800,
		hoverpause: false,
		gap: 120,
		breakpoints: {
			1500: {
				perView: 2,
				gap: 60,
			},
			1200: {
				perView: 1,
			},
		},
	},
});

let sliderArticles = new Slider({
	element: document.querySelector('.js-slider--articles'),
	sliderName: 'slider-articles',
	sliderOptions: {
		type: 'carousel',
		startAt: 0,
		perView: 2,
		animationTimingFunc: 'ease',
		animationDuration: 800,
		hoverpause: false,
		gap: 120,
		breakpoints: {
			1500: {
				gap: 60,
			},
			900: {
				perView: 1,
			},
		},
	},
});

sliderNews.init();
sliderNews.showControls();
sliderNews.addLiveRegion();
sliderNews.mount();

sliderArticles.init();
sliderArticles.addLiveRegion();
sliderArticles.showBullets();
sliderArticles.mount();

// const currentSlide = document.querySelector('.slider__count--current');
// const totalSlide = document.querySelector('.slider__count--total');
// const sliderProgress = document.querySelector('.js-slider__progress-inner');
// let slides = document.querySelectorAll('.js-slider--news .glide__slide');
// let slidesArticles = document.querySelectorAll('.js-slider--articles .glide__slide');
// const sliderTrack = document.querySelector('.slider__track');
// let slidesLenght = slides.length;
// let slidesArticlesLenght = slidesArticles.length;

// const options = {
// 	startAt: 0,
// 	perView: 2,
// 	animationTimingFunc: 'ease',
// 	animationDuration: 800,
// 	hoverpause: false,
// 	gap: 120,
// 	breakpoints: {
// 		1500: {
// 			perView: 2,
// 			gap: 60,
// 		},
// 		1200: {
// 			perView: 1,
// 		},
// 	},
// };

// let glide = new Glide('.js-slider--news', options);

// // live region for slider
// let liveregion = document.createElement('div');

// liveregion.setAttribute('aria-live', 'polite');
// liveregion.setAttribute('aria-atomic', 'true');
// liveregion.setAttribute('class', 'liveregion visually-hidden');
// liveregion.textContent = `Слайд 1 из ${slidesLenght}`;
// sliderTrack.appendChild(liveregion);

// function showBullets(bulletLenght) {
// 	const sliderBullets = document.querySelector('.glide__bullets');

// 	for (let i = 0; i < bulletLenght; i++) {
// 		let button = document.createElement('button');

// 		button.classList.add('glide__bullet');
// 		button.setAttribute('data-glide-dir', `=${i}`);

// 		sliderBullets.appendChild(button);
// 	}
// }

// showBullets(slidesLenght);

// glide.on(['mount.after', 'run'], () => {
// 	if (slidesLenght < 10) {
// 		totalSlide.innerHTML = `0${slidesLenght}`;
// 	} else {
// 		totalSlide.innerHTML = `${slidesLenght}`;
// 	}
// 	let slideWidth = 160 / slidesLenght * (glide.index + 1);

// 	sliderProgress.style.width = `${slideWidth}px`;
// });

// glide.on(['run.offset', 'run'], () => {
// 	if (glide.index + 1 < 10) {
// 		currentSlide.innerHTML = `0${glide.index + 1}`;
// 	} else {
// 		currentSlide.innerHTML = `${glide.index + 1}`;
// 	}

// 	// live-region
// 	liveregion.textContent = `Слайд ${glide.index + 1} из ${slides.length}`;
// });

// glide.mount();

// // articles slider

// const options2 = {
// 	type: 'carousel',
// 	startAt: 0,
// 	perView: 3,
// 	animationTimingFunc: 'ease',
// 	animationDuration: 800,
// 	hoverpause: false,
// 	gap: 120,
// 	breakpoints: {
// 		1500: {
// 			perView: 2,
// 			gap: 60,
// 		},
// 		900: {
// 			perView: 1,
// 		},
// 	},
// };

// function showOnlyBullets(bulletLenght) {
// 	const sliderBullets = document.querySelector('.glide__onlyBullets');

// 	for (let i = 0; i < bulletLenght; i++) {
// 		let button = document.createElement('button');

// 		button.classList.add('glide__bullet');
// 		button.setAttribute('data-glide-dir', `=${i}`);

// 		sliderBullets.appendChild(button);
// 	}
// }

// showOnlyBullets(slidesArticlesLenght);

// let glide2 = new Glide('.js-slider--articles', options2);

// glide2.mount();
