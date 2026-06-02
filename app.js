const apiKey = "efda275f785248883d2d2b4100f7ace1";



const search = document.querySelector("#search");
const form = document.querySelector("#form");
const weather = document.querySelector("#weather");

console.log(search, form, weather);

const getweather = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
      weather.innerHTML = "<h3>City not found</h3>";
      return;
    }

    weather.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <h1>${data.main.temp}°C</h1>
      <h4>${data.weather[0].description}</h4>
    `;

  } catch (err) {
    console.log(err);
    weather.innerHTML = "<h3>Error occurred</h3>";
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const city = search.value;

  if (city.trim() !== "") {
    getweather(city);
  }
});