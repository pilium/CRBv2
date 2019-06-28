import {modalLine} from '../modal/modal.js';

export const date = document.querySelector('#date');
export const doctor = document.querySelector('#doctor');

// Checkbox
function doctorToggle() {
	if (doctor.checked) {
		modalLine.classList.add('active');
	} else {
		modalLine.classList.remove('active');
	}
}

doctor.addEventListener('change', doctorToggle);
