import MicroModal from 'micromodal';
// eslint-disable-next-line no-unused-vars
import SimpleBar from 'simplebar';
export const types = document.querySelector('.modal__feedback-types');

export const content = document.querySelector('.modal__content');
export const modalLine = document.querySelector('.modal__line');

MicroModal.init({
	onClose: () => {
		const trigger = document.querySelector('.btn--write-us');

		trigger.setAttribute('aria-expanded', 'false');
	},
	openTrigger: 'data-custom-open',
	disableScroll: true,
	disableFocus: true,
	awaitCloseAnimation: true,
});
