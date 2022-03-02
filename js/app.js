const API_KEY = `574396e8d763f8c7eb974276f22130a1`;
const searchTemperature = () => {
	const city = document.getElementById('city-name').value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
	fetch(url)
	.then(res=> res.json())
	.then(data=> displayTemperature(data))
}

const displayTemperature = temperature => {
	console.log(temperature)
}