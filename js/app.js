const API_KEY = `574396e8d763f8c7eb974276f22130a1`;
const searchTemperature = () => {
	const city = document.getElementById('city-name').value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
	fetch(url)
	.then(res=> res.json())
	.then(data=> displayTemperature(data))
}
const setInnerText = (id, text) => {
	document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
	setInnerText('city', temperature.name);
	setInnerText('temp', temperature.main.temp)
	setInnerText('condition', temperature.weather[0].main)
	// set weather icon
	const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
	const imgIcon = document.getElementById('weather-icon');
	imgIcon.setAttribute('src', url);
}
