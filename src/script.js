function formatDate(timestamp) {
  let date = new Date(timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${formatHours(timestamp)}`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

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
dateElement.innerHTML = formatDate(response.data.dt * 1000);
let iconElement=document.querySelector("#iconShow")
iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);

}
  
  function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityName");
  search(cityInputElement.value);
}
search("Lisbon");

let form = document.querySelector("#citySearch");
form.addEventListener("submit", handleSubmit);
search("Lisbon");