import * as Choices from 'choices.js';

/* eslint-disable no-undef */
let inputSelect = () => {
	const select = document.querySelector('.field-select__select');

	if (select) {
		// eslint-disable-next-line no-new
		new Choices('.field-select__select', {
			searchEnabled: true,
			searchChoices: true,
			searchFloor: 2,
			searchResultLimit: 4,
			placeholderValue: 'Выберите',
			itemSelectText: '',
		});
	}
};

inputSelect();
