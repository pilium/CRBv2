import {sandwich} from '../sandwich/sandwich';

const headerHeight = document.querySelector('.header').clientHeight;
const mainMenuLinks = document.querySelectorAll('.menu__link--has-submenu');
const headerMenu = document.querySelector('.header-bottom__menu');

function setHeightToMenu() {
	if (headerMenu.classList.contains('active')) {
		headerMenu.style.height = `calc(100% - ${headerHeight}px)`;
		headerMenu.style.top = `${headerHeight}px`;
	} else {
		headerMenu.style.height = '0';
		headerMenu.style.top = '200%';
	}
}

function menuToggle() {
	document.body.classList.toggle('fixed');
	headerMenu.classList.toggle('active');

	setHeightToMenu();
}

function mainMenuLinkHandler() {
	let submenu = this.parentNode.querySelector('.submenu');
	let arrow = this.querySelector('.arrow');

	arrow.classList.toggle('active');
	submenu.classList.toggle('active');
}

if (window.innerWidth < 992) {
	sandwich.addEventListener('click', menuToggle);
	for (let i = 0; i < mainMenuLinks.length; i++) {
		mainMenuLinks[i].addEventListener('click', mainMenuLinkHandler);
	}
}
sandwich.addEventListener('keydown', (event) => {
	if (event.which === 13 || event.which === 32) {
		menuToggle();
	}
});
