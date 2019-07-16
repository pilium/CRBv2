import {blindPanel} from '../blind/blind';
const blindToggle = document.querySelector('.btn--blind-toggle');
const mainWrapper = document.querySelector('.main-wrapper');
const blindCloseBtn = document.querySelector('.blind__control--close');

function toggleBlindPanel() {
	blindPanel.classList.toggle('active');
	mainWrapper.classList.toggle('blind-active');

	if (localStorage.getItem('blind__options')) {
		if (localStorage.getItem('blindMode')) {
			localStorage.removeItem('blindMode');
		} else {
			localStorage.setItem('blindMode', true);
		}
	} else {
		localStorage.removeItem('blindMode');
	}
}

blindToggle.addEventListener('click', toggleBlindPanel);
blindCloseBtn.addEventListener('click', toggleBlindPanel);
