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
		perView: 3,
		animationTimingFunc: 'ease',
		animationDuration: 800,
		hoverpause: false,
		gap: 120,
		breakpoints: {
			1500: {
				perView: 2,
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

// autoheight
// sliderArticles.on('build.after', () => {
// 	let slideHeight = document.querySelector('.glide__slide--active').outerHeight();
// 	let glideTrack = document.querySelector('.glide__track').outerHeight();

// 	if (slideHeight !== glideTrack) {
// 		let newHeight = slideHeight;

// 		document.querySelector('.glide__track').css('height', newHeight);
// 	}
// });

// sliderArticles.on('run.after', () => {
// 	let slideHeight = document.querySelector('.glide__slide--active').outerHeight();
// 	let glideTrack = document.querySelector('.glide__track').outerHeight();

// 	if (slideHeight !== glideTrack) {
// 		let newHeight = slideHeight;

// 		document.querySelector('.glide__track').css('height', newHeight);
// 	}
// });
