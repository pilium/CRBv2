import {setColorsInvers, setColorsContrast, setColorsComfort, setColorsBlue, setColorsBrown} from './setParametrsValue';
import {setInitialColors} from './setInitialvalues';
export function colorToggler(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	if (target.classList.contains('blind__color--normal')) {
		setInitialColors();
	}

	if (target.classList.contains('blind__color--invrerse')) {
		setColorsInvers();
	}

	if (target.classList.contains('blind__color--contrast')) {
		setColorsContrast();
	}

	if (target.classList.contains('blind__color--comfort')) {
		setColorsComfort();
	}

	if (target.classList.contains('blind__color--blue')) {
		setColorsBlue();
	}

	if (target.classList.contains('blind__color--brown')) {
		setColorsBrown();
	}
}
