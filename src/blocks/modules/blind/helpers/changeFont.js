import {root} from './initialvalues';
export function changeFont(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__font-sansSerif')) {
		root.setProperty(
			'--font-family--default',
			'"Exo 2", -apple-system, BlinkMacSystemFont, "Ubuntu", "Arial", sans-serif'
		);
		root.setProperty('--font-family--thin', 'Exo 2 Thin');
		root.setProperty('--font-family--semibold', 'Exo 2 Semi Bold');
		root.setProperty('--font-family--bold', 'Exo 2 Bold');
	}

	if (target.classList.contains('blind__font-serif')) {
		root.setProperty('--font-family--default', 'serif');
		root.setProperty('--font-family--thin', 'serif');
		root.setProperty('--font-family--semibold', 'serif');
		root.setProperty('--font-family--bold', 'serif');
	}
}
