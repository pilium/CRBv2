import {
	setInitialLetterSpacing,
	setInitialImg,
	setInitialColors,
	setInitialFontSize,
	setInitialFont,
	resetActiveState,
} from './setInitialvalues';
import {resetParametrs} from './setLocalStorage';
const resetTrigger = document.querySelector('.blind__control--reset');

export function resetBlindParametrs() {
	setInitialLetterSpacing();
	setInitialImg();
	setInitialColors();
	setInitialFontSize();
	setInitialFont();
	resetActiveState();
	resetParametrs();
}

resetTrigger.addEventListener('click', resetBlindParametrs);
