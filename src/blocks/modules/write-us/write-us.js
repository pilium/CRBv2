const trigger = document.querySelector('.btn--write-us');

function changeAria() {
	this.setAttribute('aria-expanded', 'true');
}

trigger.addEventListener('click', changeAria);
