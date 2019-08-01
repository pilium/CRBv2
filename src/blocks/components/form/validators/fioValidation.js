import {showError} from '../helpers/showError';
export const fio = document.querySelector('input[name="feedback-fio"');

export function fioValidation() {
	const fioContainer = fio.closest('.input-text');
	const fioHelp = fioContainer.querySelector('small');
	let fioValid = {
		isValid: false,
		name,
	};

	let regExp = /^[А-ЩЄЮІЇЯ][а-щьєюіїя']{1,}(-[А-ЩЄЮІЇЯ][а-щьєюіїя']{1,})? [А-ЩЄЮІЇЯ][а-щьєюіїя']{1,}(-[А-ЩЄЮІЇЯ][а-щьєюіїя']{1,})? [А-ЩЄЮІЇЯ][а-щьєюіїя']{1,}$/;

	fio.addEventListener(
		'blur',
		() => {
			if (!regExp.test(fio.value)) {
				fioValid.isValid = false;

				showError(fioHelp, fioContainer, 'Введите ваши Фамилию Имя Отечество');
			} else {
				fioHelp.innerHTML = '';
				fioHelp.classList.remove = 'error';
				fioContainer.classList.remove('invalid');
				fioContainer.classList.add('valid');

				fioValid.isValid = true;
				fioValid.name = fio.value;
			}
		},
		false
	);

	return fioValid;
}
