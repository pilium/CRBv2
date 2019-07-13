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
		gap: 40,
		breakpoints: {
			1366: {
				perView: 1,
				gap: 0,
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
		gap: 32,
		breakpoints: {
			1200: {
				perView: 2,
				gap: 40,
			},
			710: {
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
