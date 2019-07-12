import {blindPanel} from '../blind/blind';
const blindToggle = document.querySelector('.btn--blind-toggle');
const mainWrapper = document.querySelector('.main-wrapper');
const blindCloseBtn = document.querySelector('.blind__control--close');

function toggleBlindPanel() {
	blindPanel.classList.toggle('active');
	mainWrapper.classList.toggle('blind-active');
}

blindToggle.addEventListener('click', toggleBlindPanel);
blindCloseBtn.addEventListener('click', toggleBlindPanel);
