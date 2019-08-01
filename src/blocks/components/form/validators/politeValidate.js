export const politeCheckbox = document.querySelector('#polite');
export function politeValidaton() {
	const politeCheckboxContainer = document.querySelector('.polite');
	const CheckboxContainer = politeCheckbox.parentNode;
	let politevalid = {
		isValid: false,
	};

	let checked = politeCheckbox.checked;

	if (!checked) {
		CheckboxContainer.classList.add('invalid');
		politevalid.isValid = false;
	} else {
		CheckboxContainer.classList.remove('invalid');
		politevalid.isValid = true;
		if (politeCheckboxContainer.classList.contains('active')) {
			politeCheckboxContainer.classList.remove('active');
		}
	}

	return politevalid;
}
