document.getElementById("get-weather").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city-input").value.trim();
  const apiKey = "87efe23721af50708e2454e7421a419d"; 

  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    // Update the weather details
    document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;

    // Display weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const iconElement = document.getElementById("weather-icon");
    iconElement.src = iconUrl;
    iconElement.style.display = "block";

  } catch (error) {
    alert("Error fetching weather data. Please check the city name.");
    console.error(error);
  }
}

//87efe23721af50708e2454e7421a419d