import {changeFont} from './changeFont';
import {changeFontSize} from './changeFontSize';
import {imgToggler} from './imgToggler';
import {letterSpacingToggler} from './letterSpacingToggler';
import {colorToggler} from './colorToggler';

export function changeParametrs(e) {
	changeFont(e);
	changeFontSize(e);
	imgToggler(e);
	letterSpacingToggler(e);
	colorToggler(e);
}
