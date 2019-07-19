import {root, initialValues} from './initialvalues';
import {setLocaleStorage} from './setLocalStorage';

export function setInitialLetterSpacing() {
	root.setProperty('--letter-spacing', 'normal');
	setLocaleStorage('letterspacing', 'setInitialLetterSpacing');
}

export function setInitialImg() {
	root.setProperty('--isImgShow', 'block');
	setLocaleStorage('img', 'setInitialImg');
}

export function setInitialColors() {
	root.setProperty('--color-main', initialValues.colors.colorMain);
	root.setProperty('--color-text', initialValues.colors.colorText);
	root.setProperty('--color-text-helper', initialValues.colors.colorTextHelper);
	root.setProperty('--color-title', initialValues.colors.colorTitle);
	root.setProperty('--color-link', initialValues.colors.colorLink);
	root.setProperty('--color-icon', initialValues.colors.colorIcon);
	root.setProperty('--color-link-hover', initialValues.colors.colorHoverLink);
	root.setProperty('--color-border', initialValues.colors.colorBorder);
	root.setProperty('--color-border-light', initialValues.colors.colorBorderLight);
	root.setProperty('--color-modal', initialValues.colors.colorModal);
	root.setProperty('--color-light', initialValues.colors.colorLight);
	root.setProperty('--color-dark', initialValues.colors.colorDark);
	root.setProperty('--color-bg-body', initialValues.colors.bgBody);
	root.setProperty('--color-bg-secondary', initialValues.colors.bgSecondary);
	root.setProperty('--color-bg-light', initialValues.colors.bgLight);
	root.setProperty('--color-bg-icon', initialValues.colors.bgIcon);
	root.setProperty('--color-bg-main', initialValues.colors.bgMain);
	root.setProperty('--gradient-main', initialValues.colors.grMain);
	root.setProperty('--color-text--bg', initialValues.colors.bgText);
	root.setProperty('--color-hover', initialValues.colors.bgHover);
	root.setProperty('--color-bg-blind', initialValues.colors.bgBlind);
	setLocaleStorage('color', 'setInitialColors');
}

export function setInitialFontSize() {
	root.setProperty('--font-size', initialValues.fonts.fontSize);
	setLocaleStorage('fontSize', 'setInitialFontSize');
}

export function setInitialFont() {
	root.setProperty(
		'--font-family--default',
		'"Exo 2", -apple-system, BlinkMacSystemFont, "Ubuntu", "Arial", sans-serif'
	);
	root.setProperty('--font-family--thin', 'Exo 2 Thin');
	root.setProperty('--font-family--semibold', 'Exo 2 Semi Bold');
	root.setProperty('--font-family--bold', 'Exo 2 Bold');
	setLocaleStorage('font', 'setInitialFont');
}

export function resetActiveState() {
	const blindDetermines = document.querySelectorAll('.blind__determines');

	for (let i = 0; i < blindDetermines.length; i++) {
		let buttons = blindDetermines[i].querySelectorAll('.blind__btn');

		for (let j = 0; j < buttons.length; j++) {
			buttons[j].classList.remove('active');
			buttons[0].classList.add('active');
		}

		if (blindDetermines[i].classList.contains('blind__determines--fz')) {
			let btns = blindDetermines[i].querySelectorAll('.blind__btn');

			for (let j = 0; j < btns.length; j++) {
				btns[j].classList.remove('active');
				btns[1].classList.add('active');
			}
		}
	}
}
