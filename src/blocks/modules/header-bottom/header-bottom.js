const targetBlock = document.querySelector('.header-bottom__icons');

// eslint-disable-next-line func-names
window.onscroll = function () {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;

	if (scrolled >= 2200) {
		targetBlock.classList.add('hide');
		targetBlock.classList.remove('show');
	} else {
		targetBlock.classList.remove('hide');
		targetBlock.classList.add('show');
	}
};

