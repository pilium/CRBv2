let Flickity = require('flickity');

let sliderNews = document.querySelector('.js-slider--news');
let sliderArticles = document.querySelector('.js-slider--articles');

let flktyNews = new Flickity(sliderNews, {
	pageDots: false,
	prevNextButtons: false,
	groupCells: '90%',
	cellAlign: 'left',
	cellSelector: '.slider__cell',
});

let flktyArticles = new Flickity(sliderArticles, {
	pageDots: false,
	prevNextButtons: false,
	groupCells: '90%',
	cellAlign: 'left',
	cellSelector: '.slider__cell',
});

const destroyBtn = document.querySelector('.destroy');

if (destroyBtn) {
	destroyBtn.addEventListener('click', () => {
		flktyArticles.destroy();
		flktyNews.destroy();
	});
}
