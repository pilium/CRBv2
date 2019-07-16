import {setImgOff} from './setParametrsValue';
import {setInitialImg} from './setInitialvalues';
export function imgToggler(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__img-on')) {
		setInitialImg();
	}

	if (target.classList.contains('blind__img-off')) {
		setImgOff();
	}
}
