import {root} from './initialvalues';
import {setInitialFont} from './setInitialvalues';
export function changeFont(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__font-sansSerif')) {
		setInitialFont();
	}

	if (target.classList.contains('blind__font-serif')) {
		root.setProperty('--font-family--default', 'serif');
		root.setProperty('--font-family--thin', 'serif');
		root.setProperty('--font-family--semibold', 'serif');
		root.setProperty('--font-family--bold', 'serif');
	}
}
