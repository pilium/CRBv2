// import {createElement} from '../../../js/helpers/createElement.js';
import {localDate} from './helpers/date.js';

const APIKEY = '8893762a07f92342f3a665594c54303f';

function weatherRender(data) {
	const weatherTemperature = document.querySelector('.weather__temperature');
	const weatherHumidity = document.querySelector('.weather__humidity');
	const weatherWindSpeed = document.querySelector('.weather__windSpeed');
	const weatherPressure = document.querySelector('.weather__pressure');
	const weatherCondition = document.querySelector('.weather__condition');
	const weatherDate = document.querySelector('.weather__date');

	weatherCondition.innerHTML = `${JSON.stringify(data.weather[0].description).replace(/['"]+/g, '')},`;
	weatherTemperature.innerHTML = `${JSON.stringify(+data.main.temp.toFixed(0))}ºC`;
	weatherHumidity.innerHTML = `${JSON.stringify(data.main.humidity)}%`;
	weatherWindSpeed.innerHTML = `${JSON.stringify(data.wind.speed)} м/с`;
	weatherPressure.innerHTML = `${(+data.main.pressure * 0.7501).toFixed(0)} мм.рт.ст`;
	weatherDate.innerHTML = `${localDate}`;
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
	.catch((err) => console.log(err));
