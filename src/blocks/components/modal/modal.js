import MicroModal from 'micromodal';
// eslint-disable-next-line no-unused-vars
import SimpleBar from 'simplebar';
export const types = document.querySelector('.feedback-types');

export const content = document.querySelector('.modal__content');

MicroModal.init({
	onClose: () => {
		const trigger = document.querySelector('.btn--write-us');

		trigger.setAttribute('aria-expanded', 'false');
	},
	openTrigger: 'data-custom-open',
	disableScroll: true,
	disableFocus: false,
	awaitCloseAnimation: true,
});

// Checkbox
import {doctor} from '../../components/checkbox/checkbox';
const modalLine = document.querySelector('.modal__line');

function doctorToggle() {
	if (doctor.checked) {
		modalLine.classList.add('active');
	} else {
		modalLine.classList.remove('active');
	}
}

doctor.addEventListener('change', doctorToggle);
