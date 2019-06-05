const politeTrigger = document.querySelector('.js-checkbox-link');
const polite = document.querySelector('.polite');

function politeOpen(e) {
	e.preventDefault();
	polite.classList.toggle('active');
	polite.focus();
}

politeTrigger.addEventListener('click', politeOpen);
