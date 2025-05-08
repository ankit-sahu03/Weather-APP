async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "83817fea4ab5607627c616411d0597b8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById("weatherInfo").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <img class="icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("weatherInfo").innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}