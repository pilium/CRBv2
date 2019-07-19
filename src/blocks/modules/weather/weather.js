import {renderWeather} from './helpers/renderWeather.js';

const APIKEY = '8893762a07f92342f3a665594c54303f';

const fetchPublicReposCount = async () => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&id=501405&appid=${APIKEY}`
	);
	const json = await response.json();

	return json;
};

fetchPublicReposCount()
	.then((data) => renderWeather(data))
	// eslint-disable-next-line no-console
	.catch((err) => console.error(err));
