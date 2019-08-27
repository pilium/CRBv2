ymaps.ready(init);

// Инициализация и уничтожение карты при нажатии на кнопку.
function init() {
	let myMap;
	const trigger = document.querySelector('.btn--map');

	trigger.addEventListener('click', () => {
		if (!myMap) {
			myMap = new ymaps.Map(
				'map',
				{
					center: [47.539501, 42.014754],
					zoom: 14,
				},
				{
					searchControlProvider: 'yandex#search',
				}
			);
			trigger.classList.add('hide');
		} else {
			myMap.destroy(); // Деструктор карты
			myMap = null;
			trigger.classList.remove('hide');
			trigger.setAttribute('value', 'Показать карту снова');
		}
	});
}
