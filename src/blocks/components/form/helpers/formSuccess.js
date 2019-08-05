export function formSuccess() {
	const formInner = document.querySelector('.form__inner');
	const formSucc = document.querySelector('.form__success');
	const modalTitle = document.querySelector('.modal__title');

	formInner.style.display = 'none';
	formSucc.style.display = 'block';
	modalTitle.innerHTML = 'Спасибо за Ваш отзыв';

	setTimeout(() => {
		formInner.style.display = 'block';
		formSucc.style.display = 'none';
		modalTitle.innerHTML = 'Обратная связь';
	}, 5000);
}
