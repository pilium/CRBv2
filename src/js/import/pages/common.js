import '../common.js';

document.addEventListener('mousewheel', event => {

}, { passive: true });

document.addEventListener('wheel', event => {

}, { passive: true });

document.addEventListener('scroll', event => {

}, { passive: true });


document.addEventListener('touchstart', event => {

}, { passive: true });

document.addEventListener('touchend', event => {

}, { passive: true });

document.addEventListener('touchmove', event => {

}, { passive: true });

function jivo() {
	let d = document;
	let w = window;

	function l() {
		let s = document.createElement('script');

		s.type = 'text/javascript';
		s.async = true;
		s.src = './js/afterLoad.js';

		document.body.appendChild(s);
	}
	if (d.readyState === 'complete') {
		l();
	} else if (w.attachEvent) {
		w.attachEvent('onload', l);
	} else {
		w.addEventListener('load', l, false);
	}
}

setTimeout(jivo, 100);

