
function showTemperature(response) {
  let temperatureElement = document.querySelector("#tempToday");
  temperatureElement.innerHTML= Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#place");
  cityElement.innerHTML=response.data.name;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML=response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML=response.data.wind.speed;
  
  let dateElement = document.querySelector("#today");
  let iconElement = document.querySelector("#current-weather");
  console.log(response.data)
}
  let apiKey = "ac281cbb78ff289d2f9cd6c7d0c17042";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);