import {Slider} from './sliders/slider-class';

let sliderNews = new Slider({
	element: document.querySelector('.js-slider--news'),
	sliderName: 'slider-news',
	sliderOptions: {
		type: 'carousel',
		startAt: 0,
		perView: 4,
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

let sliderArticles = new Slider({
	element: document.querySelector('.js-slider--articles'),
	sliderName: 'slider-articles',
	sliderOptions: {
		type: 'carousel',
		startAt: 0,
		perView: 4,
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
