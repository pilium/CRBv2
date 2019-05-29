const tel = document.querySelector('.js-tel-mobile');
const telBtn = document.querySelector('.btn--tel');

function telListToggle() {
	tel.classList.toggle('tel-mobile--active');
}

telBtn.addEventListener('click', telListToggle);
