import {root} from './initialvalues';
export function letterSpacingToggler(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__int-normal')) {
		root.setProperty('--letter-spacing', 'normal');
	}

	if (target.classList.contains('blind__int-middle')) {
		root.setProperty('--letter-spacing', '1px');
	}

	if (target.classList.contains('blind__int-big')) {
		root.setProperty('--letter-spacing', '2px');
	}
}
