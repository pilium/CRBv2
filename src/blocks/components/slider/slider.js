import Glide from '@glidejs/glide';

const currentSlide = document.querySelector('.slider__count--current');
const totalSlide = document.querySelector('.slider__count--total');
const sliderProgress = document.querySelector('.js-slider__progress-inner');
let slides = document.querySelectorAll('.glide__slide');
let slidesLenght = slides.length;
const options = {
	startAt: 0,
	perView: 2,
	animationDuration: 300,
	hoverpause: false,
	gap: 120,
	breakpoints: {
		1500: {
			perView: 1,
			gap: 60,
		},
		600: {
			perView: 1,
		},
	},
};

let glide = new Glide('.js-glide', options);

glide.on(['mount.after', 'run'], () => {
	if (glide.index + 1 < 10) {
		currentSlide.innerHTML = `0${glide.index + 1}`;
	} else {
		currentSlide.innerHTML = `${glide.index + 1}`;
	}

	if (slidesLenght < 10) {
		totalSlide.innerHTML = `0${slidesLenght}`;
	} else {
		totalSlide.innerHTML = `${slidesLenght}`;
	}
	let slideWidth = 160 / slidesLenght * (glide.index + 1);

	sliderProgress.style.width = `${slideWidth}px`;
});

glide.mount();
