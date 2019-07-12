import {
	setInitialLetterSpacing,
	setInitialImg,
	setInitialColors,
	setInitialFontSize,
	setInitialFont,
	resetActiveState,
} from './setInitialvalues';
const resetTrigger = document.querySelector('.blind__control--reset');

export function resetBlindParametrs() {
	setInitialLetterSpacing();
	setInitialImg();
	setInitialColors();
	setInitialFontSize();
	setInitialFont();
	resetActiveState();
}

resetTrigger.addEventListener('click', resetBlindParametrs);
