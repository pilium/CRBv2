import {setLetterSpacingMiddle, setLetterSpacingBig} from './setParametrsValue';
import {setInitialLetterSpacing} from './setInitialvalues';
export function letterSpacingToggler(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__int-normal')) {
		setInitialLetterSpacing();
	}

	if (target.classList.contains('blind__int-middle')) {
		setLetterSpacingMiddle();
	}

	if (target.classList.contains('blind__int-big')) {
		setLetterSpacingBig();
	}
}
