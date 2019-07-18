let blindParametrs = {
	color: null,
	font: null,
	fontSize: null,
	img: null,
	letterSpacing: null,
};

export function setLocaleStorage(type, target) {
	if (!target || !type) {
		throw new ReferenceError('Не определен target или type функции setLocaleStorage');
	}

	switch (type) {
		case 'font':
			blindParametrs.font = target;
			break;
		case 'fontSize':
			blindParametrs.fontSize = target;
			break;
		case 'letterspacing':
			blindParametrs.letterSpacing = target;
			break;
		case 'img':
			blindParametrs.img = target;
			break;
		case 'color':
			blindParametrs.color = target;
			break;
		default:
			blindParametrs.error = true;
			break;
	}

	localStorage.setItem('blind__options', JSON.stringify(blindParametrs));
}

export function resetParametrs() {
	if (localStorage.getItem('blind__options')) {
		localStorage.removeItem('blind__options');
	}
}
