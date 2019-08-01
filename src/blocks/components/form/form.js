export const form = document.getElementsByTagName('form')[0];
import {mailValidaton, email} from './validators/mailValidation';
import {fioValidation, fio} from './validators/fioValidation';
import {politeValidaton, politeCheckbox} from './validators/politeValidate';
import {serializeForm} from './helpers/serialize-form';

let isFioValid;
let isMailValid;
let isPoliteCheckboxValid;
let isFeedbackValid;

fio.addEventListener('change', () => {
	isFioValid = fioValidation();
});

email.addEventListener('change', () => {
	isMailValid = mailValidaton();
});

politeCheckbox.addEventListener('change', () => {
	isPoliteCheckboxValid = politeValidaton();
});

form.addEventListener(
	'submit',
	(e) => {
		e.preventDefault();
		if (isFioValid.isValid && isMailValid.isValid && isPoliteCheckboxValid) {
			let data = serializeForm(form);

			console.log(data);

		} else {
			console.log({isMailValid});
			console.log({isFioValid});
			console.log({isPoliteCheckboxValid});
			console.log({isFeedbackValid});
		}
	},
	false
);
