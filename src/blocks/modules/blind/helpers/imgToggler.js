import {root} from './initialvalues';
export function imgToggler(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__img-on')) {
		root.setProperty('--isImgShow', 'block');
	}

	if (target.classList.contains('blind__img-off')) {
		root.setProperty('--isImgShow', 'none');
	}
}
