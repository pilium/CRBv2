/* eslint-disable func-names */
export const sandwich = document.querySelector('.js-sandwich');

function sandwichToggle() {
	sandwich.classList.toggle('active');
	let ariaExpanded = sandwich.getAttribute('aria-expanded');

	if (ariaExpanded === 'true') {
		sandwich.setAttribute('aria-expanded', 'false');
	} else {
		sandwich.setAttribute('aria-expanded', 'true');
	}
}

sandwich.addEventListener('click', sandwichToggle);
sandwich.addEventListener('keydown', (event) => {
	if (event.which === 13 || event.which === 32) {
		sandwichToggle();
	}
});
