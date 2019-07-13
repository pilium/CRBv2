import {root, initialValues} from './initialvalues';
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
		root.setProperty('--color-bg-text', '#000');
		root.setProperty('--color-hover', '#000');
		root.setProperty('--color-bg-blind', '#000');
	}

	if (target.classList.contains('blind__color--contrast')) {
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
		root.setProperty('--gradient-main', '#fff');
		root.setProperty('--color-bg-text', '#fff');
		root.setProperty('--color-hover', '#fff');
		root.setProperty('--color-bg-blind', '#fff');
	}

	if (target.classList.contains('blind__color--comfort')) {
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
		root.setProperty('--color-bg-light', '#e5ded6');
		root.setProperty('--gradient-main', '#e5ded6');
		root.setProperty('--color-bg-text', '#e5ded6');
		root.setProperty('--color-hover', '#e5ded6');
		root.setProperty('--color-bg-blind', '#e5ded6');
	}

	if (target.classList.contains('blind__color--blue')) {
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
		root.setProperty('--color-bg-light', '#9dd1ff');
		root.setProperty('--gradient-main', '#9dd1ff');
		root.setProperty('--color-bg-text', '#9dd1ff');
		root.setProperty('--color-hover', '#9dd1ff');
		root.setProperty('--color-bg-blind', '#9dd1ff');
	}

	if (target.classList.contains('blind__color--brown')) {
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
		root.setProperty('--color-bg-light', '#3b2716');
		root.setProperty('--gradient-main', '#3b2716');
		root.setProperty('--color-bg-text', '#3b2716');
		root.setProperty('--color-hover', '#3b2716');
		root.setProperty('--color-bg-blind', '#3b2716');
	}
}
