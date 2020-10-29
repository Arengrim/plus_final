let currentTimeDoc = document.querySelector("#today");
let now = new Date();
currentTimeDoc.innerHTML = currentDate(now);
function currentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDay = days[now.getDay()];
  let currentMoth = months[now.getMonth()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let formattDate = `${currentDay}, ${currentDate} ${currentMoth} ${currentHour}:${minutes}`;
  return formattDate;
}
//city name in live data

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;

  let h1 = document.querySelector("#place");
  h1.innerHTML = `${city}`;
  let tempToday = document.querySelector("#tempToday");
  tempToday.innerHTML = `${temperature}°C`;
  console.log(response);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "ac281cbb78ff289d2f9cd6c7d0c17042";
  let units = "metric";
  let city = document.querySelector("#cityName").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let inputCity = document.querySelector("#citySearch");
inputCity.addEventListener("submit", searchCity);

function showCurrentTemp(response) {
  let h1 = document.querySelector("#place");
  let temp = document.querySelector("#tempToday");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}`;
  let city = response.data.name;
  h1.innerHTML = `${city}`;
}

function showCurrentPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "ac281cbb78ff289d2f9cd6c7d0c17042";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showCurrentTemp);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

let currentLocationButton = document.querySelector("#locationNow");
currentLocationButton.addEventListener("click", getLocation);