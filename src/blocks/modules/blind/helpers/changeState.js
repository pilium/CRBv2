export function changeState(e) {
	let target = e.target.closest('.blind__btn');

	if (!target) {
		return;
	}

	let targetContainer = target.closest('.blind__determines');
	const targetContainerButtons = targetContainer.querySelectorAll('button');

	for (let i = 0; i < targetContainerButtons.length; i++) {
		targetContainerButtons[i].classList.remove('active');
	}

	target.classList.add('active');
}
