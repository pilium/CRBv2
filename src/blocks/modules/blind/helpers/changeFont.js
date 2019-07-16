import {setInitialFont} from './setInitialvalues';
import {setSerifFont} from './setParametrsValue';
export function changeFont(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__font-sansSerif')) {
		setInitialFont();
	}

	if (target.classList.contains('blind__font-serif')) {
		setSerifFont();
	}
}
