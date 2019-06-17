(function year() {
	const footerYear = document.querySelector('.js-footer__year');
	let yearNow = new Date().getFullYear();

	footerYear.innerHTML = yearNow;
})();
