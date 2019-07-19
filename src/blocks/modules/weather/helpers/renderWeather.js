import {localDate} from './date';

export function renderWeather(data) {
	const weatherContainer = document.querySelector('.weather__wrapper');
	const preloader = weatherContainer.querySelector('.preloader');

	let imgSrc = '';

	if (data.snow) {
		imgSrc = 'https://res.cloudinary.com/dhccuflos/image/upload/v1563515021/weather/snow.jpg';
	} else if (data.rain) {
		imgSrc = 'https://res.cloudinary.com/dhccuflos/image/upload/v1563514866/weather/rain.jpg';
	} else if (data.clouds.all > 30) {
		imgSrc = 'https://res.cloudinary.com/dhccuflos/image/upload/v1563515230/weather/cloudy.jpg';
	} else {
		imgSrc = 'https://res.cloudinary.com/dhccuflos/image/upload/v1563514920/weather/sunny.jpg';
	}

	const template = `
		<img class="weather__img" src="${imgSrc}" alt="снег" />
		<div class="weather__info">
			<div class="weather__info-wrapper"><span class="weather__temperature"
					tabindex="0">${JSON.stringify(+data.main.temp.toFixed(0))}ºC</span><a class="weather__description"
					href="https://yandex.ru/pogoda/romanovskaya?utm_source=google&amp;utm_medium=search&amp;utm_campaign=weather_search_ru&amp;utm_term=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0&amp;gclid=EAIaIQobChMIrJusqIKC4wIVBcYYCh0r5gu6EAAYASAAEgLW0fD_BwE&amp;campaignid=1755778253&amp;adgroupid=67620497414&amp;creative=355130682860&amp;keyword=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0&amp;lat=47.539719&amp;lon=42.014625"
					title="перейти на сайт яндекс.погода" rel="noopener"
					target="blanc"><span class="weather__condition">${JSON.stringify(data.weather[0].description).replace(
		/['"]+/g,
		''
	)},</span><span
						class="weather__place">ст. Романовская</span></a></div>
			<ul class="weather__addition">
				<li class="weather__addition-item"><svg
						class="icon icon-humidity weather__svg-icon" tabindex="-1"
						role="img">
						<use xlink:href="img/sprites/sprite.svg#humidity"></use>
					</svg><span class="weather__humidity" tabindex="0">${JSON.stringify(data.main.humidity)}%</span></li>
				<li class="weather__addition-item"><svg
						class="icon icon-wind weather__svg-icon" tabindex="-1"
						role="img">
						<use xlink:href="img/sprites/sprite.svg#wind"></use>
					</svg><span class="weather__windSpeed" tabindex="0">${JSON.stringify(data.wind.speed)} м/с</span></li>
				<li class="weather__addition-item"><svg
						class="icon icon-pressure weather__svg-icon" tabindex="-1"
						role="img">
						<use xlink:href="img/sprites/sprite.svg#pressure"></use>
					</svg><span class="weather__pressure" tabindex="0">${(+data.main.pressure * 0.7501).toFixed(0)} мм.рт.ст</span></li>
			</ul>
		</div><span class="weather__date" tabindex="0">${localDate}</span>
	`;

	weatherContainer.innerHTML = template;
	setTimeout(() => {
		if (preloader.parentNode) {
			preloader.classList.add('hide');
		}
	}, 1000);
}
