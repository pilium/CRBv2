import {showError} from '../helpers/showError';
export const email = document.querySelector('input[type="email"');

export function mailValidaton() {
	const emailContainer = email.closest('.input-text');
	const emailHelp = emailContainer.querySelector('small');
	let mailValid = {
		isValid: false,
		name,
	};

	email.addEventListener(
		'blur',
		() => {
			if (!email.validity.valid) {
				mailValid.isValid = false;

				showError(emailHelp, emailContainer, email.validationMessage);
			} else {
				emailHelp.innerHTML = '';
				emailHelp.classList.remove = 'error';
				emailContainer.classList.remove('invalid');
				emailContainer.classList.add('valid');
				mailValid.isValid = true;
				mailValid.name = email.value;
			}
		},
		false
	);

	return mailValid;
}
