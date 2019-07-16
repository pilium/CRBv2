import {setFontSizeSmall, setFontSizeBig} from './setParametrsValue';
import {setInitialFontSize} from './setInitialvalues';
export function changeFontSize(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__font-size--small')) {
		setFontSizeSmall();
	}

	if (target.classList.contains('blind__font-size--normal')) {
		setInitialFontSize();
	}

	if (target.classList.contains('blind__font-size--big')) {
		setFontSizeBig();
	}
}
