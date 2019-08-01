export const feedback = [document.querySelector('#testimonial-theme'), document.querySelector('#testimonial-text')];

export function feedbackValidaton() {
	let feedbackValid = {
		isValid: false,
		name,
	};

	feedback.forEach((item) => {
		item.addEventListener(
			'blur',
			() => {
				const itemContainer = item.closest('.input-text');
				const itemHelp = itemContainer.querySelector('small');

				if (item.value) {
					itemHelp.innerHTML = '';
					itemHelp.classList.remove = 'error';
					itemContainer.classList.remove('invalid');
					itemContainer.classList.add('valid');

					feedbackValid.isValid = true;
					feedbackValid.name = item.value;
				} else {
					itemHelp.innerHTML = 'Поле не может быть пустым';
					itemHelp.classList.add = 'error';
					itemContainer.classList.add('invalid');
					itemContainer.classList.remove('valid');
					feedbackValid.isValid = false;
				}
			},
			false
		);

		return feedbackValid;
	});
}
