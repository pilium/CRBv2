// import {createElement} from '../../../js/helpers/createElement.js';
import {localDate} from './helpers/date.js';

const APIKEY = '8893762a07f92342f3a665594c54303f';

function weatherRender(data) {
	const weatherContainer = document.querySelector('.weather');
	const preloader = weatherContainer.querySelector('.preloader');
	const weatherTemperature = weatherContainer.querySelector('.weather__temperature');
	const weatherHumidity = weatherContainer.querySelector('.weather__humidity');
	const weatherWindSpeed = weatherContainer.querySelector('.weather__windSpeed');
	const weatherPressure = weatherContainer.querySelector('.weather__pressure');
	const weatherCondition = weatherContainer.querySelector('.weather__condition');
	const weatherDate = weatherContainer.querySelector('.weather__date');

	weatherCondition.innerHTML = `${JSON.stringify(data.weather[0].description).replace(/['"]+/g, '')},`;
	weatherTemperature.innerHTML = `${JSON.stringify(+data.main.temp.toFixed(0))}ºC`;
	weatherHumidity.innerHTML = `${JSON.stringify(data.main.humidity)}%`;
	weatherWindSpeed.innerHTML = `${JSON.stringify(data.wind.speed)} м/с`;
	weatherPressure.innerHTML = `${(+data.main.pressure * 0.7501).toFixed(0)} мм.рт.ст`;
	weatherDate.innerHTML = `${localDate}`;
	setTimeout(() => {
		if (preloader.parentNode) {
			preloader.parentNode.removeChild(preloader);
		}
	}, 2000);
}

const fetchPublicReposCount = async () => {
	const response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&id=501405&appid=${APIKEY}`
	);
	const json = await response.json();

	return json;
};

fetchPublicReposCount()
	.then((data) => weatherRender(data))
	// eslint-disable-next-line no-console
	.catch((err) => console.error(err));
