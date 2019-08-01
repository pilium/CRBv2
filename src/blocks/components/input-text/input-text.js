const dateContainer = document.querySelector('.input-text--checkable');
const dateInput = document.querySelector('#testimonial-date');
const date = document.querySelector('#testimonial-date ');

function dateToggle() {
	if (date.checked) {
		dateContainer.classList.add('active');
	} else {
		dateContainer.classList.remove('active');
	}
}

function validateDate() {
	if (this.value === '') {
		this.parentNode.parentNode.classList.remove('valid');
		this.parentNode.parentNode.classList.add('invalid');
	} else {
		this.parentNode.parentNode.classList.remove('invalid');
		this.parentNode.parentNode.classList.add('valid');
		const year = new Date(this.value).getFullYear();
		const month = new Date(this.value).getMonth();
		// eslint-disable-next-line no-shadow
		const date = new Date(this.value).getDate();
		const day = new Date(this.value).getDay();

		let feedbackDate = {year,
			month,
			date,
			day};

		console.log(feedbackDate);
	}
}

date.addEventListener('change', dateToggle);
dateInput.addEventListener('change', validateDate);
