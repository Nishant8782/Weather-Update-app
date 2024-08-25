const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const Image = document.querySelector(".weather img");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity span");
const wind = document.querySelector(".wind span");
const inputBox = document.querySelector(".input")
const error = document.querySelector(".error")



async function checkWeather(city) {
    const APIKey = "ecc87d6fe232dfd11c328da661d6ed2e";
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;




    const weatherData =await fetch(`${URL}`).then(response => response.json());
    console.log(weatherData);

    if(weatherData.cod == `404`){
        error.style.display = 'flex';
        weatherBox.style.display = "none";
       
        return;
    }
    
    error.style.display = 'none';
    weatherBox.style.display = "flex";


    temp.innerHTML = `${Math.round(weatherData.main.temp  - 273.15)} °C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity} %`;
    wind.innerHTML =`${weatherData.wind.speed}Km/H`;

    switch (weatherData.weather[0].main){
        case "Clear":
            Image.src="clear.png";
            break;
        case "Rain":
            Image.src="rain.jpeg";
            break;
        case "Snow":
            Image.src="snow.png";
            break;
        case "Clouds":
            Image.src="cloud.png";
            break;
        case "Mist":
            Image.src="mist.png";
            break;
        case "Haze":
            Image.src="haze.png";
            break;
        case "Drizzle":
            Image.src ="drizzle.png";   
            break ;
        
        default:
            Image.src="weather.png";

}
}

search.addEventListener("click", ()=> {
     checkWeather(inputBox.value);

});


