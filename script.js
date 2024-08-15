const apikey = "cb1f2e513592b8e4ebb7dc6183bea3f0"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const displayw = document.querySelector(".weather")
const error = document.querySelector(".error");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)

    if (response.status == 404) {
        error.style.display = "block"
        displayw.style.display = "none"
    }
    else {
        let data = await response.json()
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Haze" ||data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png"
        }

        displayw.style.display = "block"
        error.style.display = "none"



    }

}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)
    


})

