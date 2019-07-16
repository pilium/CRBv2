import {root, initialValues} from './initialvalues';
import {
	setInitialColors,
	setInitialFont,
	setInitialFontSize,
	setInitialImg,
	setInitialLetterSpacing,
} from './setInitialvalues';
import {setLocaleStorage} from './setLocalStorage';
import {getStorageBlindOptions} from '../blindChecker';
import {setActiveState} from './setActiveState';

export function setSerifFont() {
	root.setProperty('--font-family--default', 'serif');
	root.setProperty('--font-family--thin', 'serif');
	root.setProperty('--font-family--semibold', 'serif');
	root.setProperty('--font-family--bold', 'serif');
	setLocaleStorage('font', 'setSerifFont');
}

export function setFontSizeSmall() {
	root.setProperty('--font-size', `${parseFloat(initialValues.fonts.fontSize) - 2}px`);
	setLocaleStorage('fontSize', 'setFontSizeSmall');
}

export function setFontSizeBig() {
	root.setProperty('--font-size', `${parseFloat(initialValues.fonts.fontSize) + 2}px`);
	setLocaleStorage('fontSize', 'setFontSizeBig');
}

export function setLetterSpacingMiddle() {
	root.setProperty('--letter-spacing', '1px');
	setLocaleStorage('letterspacing', 'setLetterSpacingMiddle');
}

export function setLetterSpacingBig() {
	root.setProperty('--letter-spacing', '2px');
	setLocaleStorage('letterspacing', 'setLetterSpacingBig');
}

export function setImgOff() {
	root.setProperty('--isImgShow', 'none');
	setLocaleStorage('img', 'setImgOff');
}

export function setColorsInvers() {
	root.setProperty('--color-main', '#fff');
	root.setProperty('--color-text', '#fff');
	root.setProperty('--color-text-helper', '#fff');
	root.setProperty('--color-title', '#fff');
	root.setProperty('--color-link', '#fff');
	root.setProperty('--color-link-hover', '#fff');
	root.setProperty('--color-border', '#fff');
	root.setProperty('--color-border-light', '#fff');
	root.setProperty('--color-icon', '#fff');
	root.setProperty('--color-modal', '#fff');
	root.setProperty('--color-light', '#fff');
	root.setProperty('--color-dark', '#fff');
	root.setProperty('--color-bg-body', '#000');
	root.setProperty('--color-bg-secondary', '#000');
	root.setProperty('--color-bg-icon', '#000');
	root.setProperty('--color-bg-light', '#000');
	root.setProperty('--gradient-main', '#000');
	root.setProperty('--color-text--bg', '#000');
	root.setProperty('--color-hover', '#000');
	root.setProperty('--color-bg-blind', '#000');
	setLocaleStorage('color', 'setColorsInvers');
}

export function setColorsContrast() {
	root.setProperty('--color-main', '#000');
	root.setProperty('--color-text', '#000');
	root.setProperty('--color-text-helper', '#000');
	root.setProperty('--color-title', '#000');
	root.setProperty('--color-link', '#000');
	root.setProperty('--color-link-hover', '#000');
	root.setProperty('--color-border', '#000');
	root.setProperty('--color-border-light', '#000');
	root.setProperty('--color-icon', '#000');
	root.setProperty('--color-modal', '#000');
	root.setProperty('--color-light', '#000');
	root.setProperty('--color-dark', '#000');
	root.setProperty('--color-bg-body', '#fff');
	root.setProperty('--color-bg-secondary', '#fff');
	root.setProperty('--color-bg-icon', '#fff');
	root.setProperty('--color-bg-light', '#fff');
	root.setProperty('--color-text--bg', '#fff');
	root.setProperty('--gradient-main', '#fff');
	root.setProperty('--color-hover', '#fff');
	root.setProperty('--color-bg-blind', '#fff');
	setLocaleStorage('color', 'setColorsContrast');
}
export function setColorsComfort() {
	root.setProperty('--color-main', '#734d39');
	root.setProperty('--color-text', '#734d39');
	root.setProperty('--color-text-helper', '#734d39');
	root.setProperty('--color-title', '#734d39');
	root.setProperty('--color-link', '#734d39');
	root.setProperty('--color-link-hover', '#734d39');
	root.setProperty('--color-border', '#734d39');
	root.setProperty('--color-border-light', '#734d39');
	root.setProperty('--color-icon', '#734d39');
	root.setProperty('--color-modal', '#734d39');
	root.setProperty('--color-light', '#734d39');
	root.setProperty('--color-dark', '#734d39');
	root.setProperty('--color-bg-body', '#e5ded6');
	root.setProperty('--color-bg-secondary', '#e5ded6');
	root.setProperty('--color-bg-icon', '#e5ded6');
	root.setProperty('--color-text--bg', '#e5ded6');
	root.setProperty('--color-bg-light', '#e5ded6');
	root.setProperty('--gradient-main', '#e5ded6');
	root.setProperty('--color-hover', '#e5ded6');
	root.setProperty('--color-bg-blind', '#e5ded6');
	setLocaleStorage('color', 'setColorsComfort');
}
export function setColorsBlue() {
	root.setProperty('--color-main', '#063462');
	root.setProperty('--color-text', '#063462');
	root.setProperty('--color-text-helper', '#063462');
	root.setProperty('--color-title', '#063462');
	root.setProperty('--color-link', '#063462');
	root.setProperty('--color-link-hover', '#063462');
	root.setProperty('--color-border', '#063462');
	root.setProperty('--color-border-light', '#063462');
	root.setProperty('--color-icon', '#063462');
	root.setProperty('--color-modal', '#063462');
	root.setProperty('--color-light', '#063462');
	root.setProperty('--color-dark', '#063462');
	root.setProperty('--color-bg-body', '#9dd1ff');
	root.setProperty('--color-bg-secondary', '#9dd1ff');
	root.setProperty('--color-bg-icon', '#9dd1ff');
	root.setProperty('--color-text--bg', '#9dd1ff');
	root.setProperty('--color-bg-light', '#9dd1ff');
	root.setProperty('--gradient-main', '#9dd1ff');
	root.setProperty('--color-hover', '#9dd1ff');
	root.setProperty('--color-bg-blind', '#9dd1ff');
	setLocaleStorage('color', 'setColorsBlue');
}
export function setColorsBrown() {
	root.setProperty('--color-main', '#a9e44d');
	root.setProperty('--color-text', '#a9e44d');
	root.setProperty('--color-text-helper', '#a9e44d');
	root.setProperty('--color-title', '#a9e44d');
	root.setProperty('--color-link', '#a9e44d');
	root.setProperty('--color-link-hover', '#a9e44d');
	root.setProperty('--color-border', '#a9e44d');
	root.setProperty('--color-border-light', '#a9e44d');
	root.setProperty('--color-icon', '#a9e44d');
	root.setProperty('--color-modal', '#a9e44d');
	root.setProperty('--color-light', '#a9e44d');
	root.setProperty('--color-dark', '#a9e44d');
	root.setProperty('--color-bg-body', '#3b2716');
	root.setProperty('--color-bg-secondary', '#3b2716');
	root.setProperty('--color-bg-icon', '#3b2716');
	root.setProperty('--color-text--bg', '#3b2716');
	root.setProperty('--color-bg-light', '#3b2716');
	root.setProperty('--gradient-main', '#3b2716');
	root.setProperty('--color-hover', '#3b2716');
	root.setProperty('--color-bg-blind', '#3b2716');
	setLocaleStorage('color', 'setColorsBrown');
}

const savedOptions = getStorageBlindOptions();

if (savedOptions) {
	let color = savedOptions.color;
	let font = savedOptions.font;
	let fontSize = savedOptions.fontSize;
	let img = savedOptions.img;
	let ls = savedOptions.letterSpacing;

	switch (font) {
		case 'setSerifFont':
			setSerifFont();
			setActiveState('font', 1);
			break;
		case 'setInitialFont':
			setInitialFont();
			setActiveState('font', 0);
			break;
		default:
			setInitialFont();
			break;
	}
	switch (fontSize) {
		case 'setFontSizeSmall':
			setFontSizeSmall();
			setActiveState('fontSize', 0);
			break;
		case 'setFontSizeBig':
			setFontSizeBig();
			setActiveState('fontSize', 2);
			break;
		case 'setInitialFontSize':
			setInitialFontSize();
			setActiveState('fontSize', 1);
			break;
		default:
			setInitialFontSize();
			setActiveState('fontSize', 1);
			break;
	}
	switch (img) {
		case 'setImgOff':
			setImgOff();
			setActiveState('img', 1);
			break;
		case 'setInitialImg':
			setInitialImg();
			setActiveState('img', 0);
			break;
		default:
			setInitialImg();
			setActiveState('img', 0);
			break;
	}
	switch (ls) {
		case 'setLetterSpacingMiddle':
			setLetterSpacingMiddle();
			setActiveState('ls', 1);
			break;
		case 'setLetterSpacingBig':
			setLetterSpacingBig();
			setActiveState('ls', 2);
			break;
		case 'setInitialLetterSpacing':
			setInitialLetterSpacing();
			setActiveState('ls', 0);
			break;
		default:
			setInitialLetterSpacing();
			setActiveState('ls', 0);
			break;
	}
	switch (color) {
		case 'setColorsInvers':
			setColorsInvers();
			setActiveState('color', 1);
			break;
		case 'setColorsContrast':
			setColorsContrast();
			setActiveState('color', 2);
			break;
		case 'setColorsComfort':
			setColorsComfort();
			setActiveState('color', 3);
			break;
		case 'setColorsBlue':
			setColorsBlue();
			setActiveState('color', 4);
			break;
		case 'setColorsBrown':
			setColorsBrown();
			setActiveState('color', 5);
			break;
		case 'setInitialColors':
			setInitialColors();
			setActiveState('color', 0);
			break;
		default:
			setInitialColors();
			setActiveState('color', 0);
			break;
	}
}
