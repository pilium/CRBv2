export function getStorageBlindOptions() {
	let options;

	if (localStorage.getItem('blindMode') && localStorage.getItem('blind__options')) {
		options = JSON.parse(localStorage.getItem('blind__options'));
	}

	return options;
}
