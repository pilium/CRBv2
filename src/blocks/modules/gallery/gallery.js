/* eslint-disable func-names */
const gallery = document.querySelector('.gallery');
let getVal = function (elem, style) {
	return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
let getHeight = function (item) {
	return item.querySelector('.gallery__content').getBoundingClientRect().height;
};
let resizeAll = function () {
	let altura = getVal(gallery, 'grid-auto-rows');
	let gap = getVal(gallery, 'grid-row-gap');

	gallery.querySelectorAll('.gallery__item').forEach((item) => {
		item.style.gridRowEnd = `span ${Math.ceil((getHeight(item) + gap) / (altura + gap))}`;
	});
};

gallery.querySelectorAll('img').forEach((item) => {
	if (item.complete) {
		console.log(item.src);
	} else {
		item.addEventListener('load', () => {
			let altura = getVal(gallery, 'grid-auto-rows');
			let gap = getVal(gallery, 'grid-row-gap');
			let gitem = item.parentElement.parentElement;

			gitem.style.gridRowEnd = `span ${Math.ceil((getHeight(gitem) + gap) / (altura + gap))}`;
			item.classList.remove('byebye');
		});
	}
});
window.addEventListener('resize', resizeAll);
window.addEventListener('load', resizeAll);
gallery.querySelectorAll('.gallery__item').forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('gallery__open');
	});
});
