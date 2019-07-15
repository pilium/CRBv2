import Glide from '@glidejs/glide';

export class Slider {
	constructor(options) {
		this.$el = options.element;
		this.sliderName = options.sliderName;
		this.optionsSlider = options.sliderOptions;
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
		this.showBullets();
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
			button.setAttribute('tabindex', '-1');
			button.setAttribute('data-glide-dir', `=${i}`);

			this.sliderBullets.appendChild(button);
		}
	}
}
