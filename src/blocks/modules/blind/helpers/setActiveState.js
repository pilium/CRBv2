export function setActiveState(type, option) {
	const blindDetermines = document.querySelectorAll('.blind__determines');

	for (let i = 0; i < blindDetermines.length; i++) {
		if (type === 'fontSize') {
			if (blindDetermines[i].classList.contains('blind__determines--fz')) {
				let btns = blindDetermines[i].querySelectorAll('.blind__btn');

				for (let j = 0; j < btns.length; j++) {
					btns[j].classList.remove('active');
					btns[option].classList.add('active');
				}
			}
		}

		if (type === 'font') {
			if (blindDetermines[i].classList.contains('blind__determines--font')) {
				let btns = blindDetermines[i].querySelectorAll('.blind__btn');

				for (let j = 0; j < btns.length; j++) {
					btns[j].classList.remove('active');
					btns[option].classList.add('active');
				}
			}
		}

		if (type === 'img') {
			if (blindDetermines[i].classList.contains('blind__determines--img')) {
				let btns = blindDetermines[i].querySelectorAll('.blind__btn');

				for (let j = 0; j < btns.length; j++) {
					btns[j].classList.remove('active');
					btns[option].classList.add('active');
				}
			}
		}

		if (type === 'ls') {
			if (blindDetermines[i].classList.contains('blind__determines--ls')) {
				let btns = blindDetermines[i].querySelectorAll('.blind__btn');

				for (let j = 0; j < btns.length; j++) {
					btns[j].classList.remove('active');
					btns[option].classList.add('active');
				}
			}
		}

		if (type === 'color') {
			if (blindDetermines[i].classList.contains('blind__determines--color')) {
				let btns = blindDetermines[i].querySelectorAll('.blind__btn');

				for (let j = 0; j < btns.length; j++) {
					btns[j].classList.remove('active');
					btns[option].classList.add('active');
				}
			}
		}
	}
}
