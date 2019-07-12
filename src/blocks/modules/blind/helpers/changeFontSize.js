import {root, initialValues} from './initialvalues';
export function changeFontSize(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__font-size--small')) {
		root.setProperty('--font-size', `${parseFloat(initialValues.fonts.fontSize) - 2}px`);
	}

	if (target.classList.contains('blind__font-size--normal')) {
		root.setProperty('--font-size', initialValues.fonts.fontSize);
	}

	if (target.classList.contains('blind__font-size--big')) {
		root.setProperty('--font-size', `${parseFloat(initialValues.fonts.fontSize) + 2}px`);
	}
}
