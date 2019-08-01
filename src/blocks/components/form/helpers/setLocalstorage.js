export function setValueLocalstorage(input) {
	const inputContainer = input.closest('.input-text');

	if (inputContainer.classList.contains('valid')) {
		localStorage.removeItem(input.name);
		localStorage.setItem(input.name, input.value);
	}
}
