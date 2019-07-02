import Glide from '@glidejs/glide';

export class Slider {
	constructor(options) {
		this.$el = options.element;
		this.sliderName = options.sliderName;
		this.optionsSlider = options.sliderOptions;
		this.totalSlideContainer = this.$el.querySelector('.slider__count--total');
		this.currentSlideContainer = this.$el.querySelector('.slider__count--current');
		this.sliderProgress = this.$el.querySelector('.js-slider__progress-inner');
		this.sliderTrack = this.$el.querySelector('.slider__track');
		this.slides = this.$el.querySelectorAll('.glide__slide');
		this.sliderBullets = this.$el.querySelector('.glide__bullets');
	}

	init() {
		this.sliderName = new Glide(this.$el, this.optionsSlider);
	}

	mount() {
		this.sliderName.mount();
	}

	showControls() {
		this.addSliderProgress();
		this.changeSlideNumber();
		this.showBullets();
	}

	addSliderProgress() {
		this.sliderName.on(['mount.after', 'run'], () => {
			if (this.slides.length < 10) {
				this.totalSlideContainer.innerHTML = `0${this.slides.length}`;
			} else {
				this.totalSlideContainer.innerHTML = `${this.slides.length}`;
			}
			let slideWidth = 160 / this.slides.length * this.sliderName.index + 1;

			this.sliderProgress.style.width = `${slideWidth}px`;
		});
	}

	changeSlideNumber() {
		this.sliderName.on(['run.offset', 'run'], () => {
			if (this.sliderName.index + 1 < 10) {
				this.currentSlideContainer.innerHTML = `0${this.sliderName.index + 1}`;
			} else {
				this.currentSlideContainer.innerHTML = `${this.sliderName.index + 1}`;
			}

			// live-region
			this.sliderTrack.querySelector('.liveregion').textContent = `Слайд ${this.sliderName.index + 1} из ${
				this.slides.length
			}`;
		});
	}

	addLiveRegion() {
		let liveregion = document.createElement('div');

		liveregion.setAttribute('aria-live', 'polite');
		liveregion.setAttribute('aria-atomic', 'true');
		liveregion.setAttribute('class', 'liveregion visually-hidden');
		liveregion.textContent = `Слайд 1 из ${this.slides.length}`;
		this.sliderTrack.appendChild(liveregion);
	}

	showBullets() {
		for (let i = 0; i < this.slides.length; i++) {
			let button = document.createElement('button');

			button.classList.add('glide__bullet');
			button.setAttribute('data-glide-dir', `=${i}`);

			this.sliderBullets.appendChild(button);
		}
	}
}
