// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=604ce7dd92d0c7cd45c07d402d183aa8&units=metric

const apiKey = "604ce7dd92d0c7cd45c07d402d183aa8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".feels-like").innerHTML = data.main.feels_like;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".country").innerHTML = data.sys.country;

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";

        }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (e)=>{
    if(e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
    
})



