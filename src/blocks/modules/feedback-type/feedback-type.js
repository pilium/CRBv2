import {types} from '../../components/modal/modal';

function selectType(event) {
	const typies = document.querySelectorAll('.feedback-type');
	const typiesLenght = typies.length;

	for (let i = 0; i < typiesLenght; i++) {
		typies[i].classList.remove('active');
		typies[i].setAttribute('aria-checked', false);
	}
	let target = event.target;
	let type = target.closest('.feedback-type');

	if (!type) {
		return;
	}

	if (type.classList.contains('active')) {
		type.classList.remove('active');
		type.setAttribute('aria-checked', false);
	} else {
		type.classList.add('active');
		type.setAttribute('aria-checked', true);
	}
}

types.addEventListener('click', selectType);
types.addEventListener('keydown', (event) => {
	if (event.which === 13 || event.which === 32) {
		selectType();
	}
});
