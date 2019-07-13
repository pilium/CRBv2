export const root = document.documentElement.style;
let styles = getComputedStyle(document.documentElement);

export const initialValues = {
	colors: {
		colorMain: String(styles.getPropertyValue('--color-main')).trim(),
		colorText: String(styles.getPropertyValue('--color-text')).trim(),
		colorTextHelper: String(styles.getPropertyValue('--color-text-helper')).trim(),
		colorTitle: String(styles.getPropertyValue('--color-title')).trim(),
		colorLink: String(styles.getPropertyValue('--color-link')).trim(),
		colorIcon: String(styles.getPropertyValue('--color-icon')).trim(),		
		colorHoverLink: String(styles.getPropertyValue('--color-link-hover')).trim(),
		colorBorder: String(styles.getPropertyValue('--color-border')).trim(),
		colorBorderLight: String(styles.getPropertyValue('--color-border-light')).trim(),
		colorModal: String(styles.getPropertyValue('--color-modal')).trim(),
		colorLight: String(styles.getPropertyValue('--color-light')).trim(),
		colorDark: String(styles.getPropertyValue('--color-dark')).trim(),
		bgIcon: String(styles.getPropertyValue('--color-bg-icon')).trim(),
		bgText: String(styles.getPropertyValue('--color-bg-text')).trim(),
		bgHover: String(styles.getPropertyValue('--color-hover')).trim(),
		bgBlind: String(styles.getPropertyValue('--color-bg-blind')).trim(),
		bgBody: String(styles.getPropertyValue('--color-bg-body')).trim(),
		bgLight: String(styles.getPropertyValue('--color-bg-light')).trim(),
		bgSecondary: String(styles.getPropertyValue('--color-bg-secondary')).trim(),
		grMain: String(styles.getPropertyValue('--gradient-main')).trim(),
	},

	fonts: {
		'default': '"Exo 2", -apple-system, BlinkMacSystemFont, "Ubuntu", "Arial", sans-serif',
		'thin': 'Exo 2 Thin',
		'semibold': 'Exo 2 Semi Bold',
		'bold': 'Exo 2 Bold',
		'fontSize': String(styles.getPropertyValue('--font-size')).trim(),
	},
};
