import '../common';

function al() {
	let d = document;
	let w = window;

	function l() {
		let s = document.createElement('script');

		s.type = 'text/javascript';
		s.async = true;
		s.src = './js/mainAfterLoad.js';

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

setTimeout(al, 100);
