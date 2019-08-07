const files = document.querySelectorAll('.file');

if (files) {
	files.forEach((file) => {
		const fileHint = file.querySelector('.file__hint');
		const fileTrigger = file.querySelector('.file__open-hint');
		const hintInner = file.querySelector('.file-info');

		function toggleShow() {
			fileHint.classList.toggle('show');
			hintInner.classList.toggle('show');
		}

		fileTrigger.addEventListener('click', toggleShow);
	});
}
