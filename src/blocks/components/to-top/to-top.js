/* eslint-disable func-names */
export let scrollToTop = (function () {
	let showButton = 600;
	let scrollSpeed = 1000;

	function scrollTop(b) {
		let scrollTime = window.scrollY / 2;
		let c = 0;
		let e = performance.now();

		function a(d) {
			c += Math.PI / (b / (d - e));
			// eslint-disable-next-line no-unused-expressions
			c >= Math.PI && window.scrollTo(0, 0);
			// eslint-disable-next-line no-unused-expressions
			window.scrollY !== 0 &&
				(window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))),
				e = d,
				window.requestAnimationFrame(a));
		}
		window.requestAnimationFrame(a);
	}
	let scrollPosition = window.scrollY;
	let scrollButton = document.getElementById('scrollToTop');

	window.addEventListener('scroll', () => {
		scrollPosition = window.scrollY;
		// eslint-disable-next-line no-unused-expressions
		showButton < scrollPosition ? scrollButton.classList.add('visible') : scrollButton.classList.remove('visible');
	});
	scrollButton.onclick = function () {
		scrollTop(scrollSpeed);
	};
})();
