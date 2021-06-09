import { convertDate } from "./utils";
import cloudy from '../img/cloudy.png'
import rain from '../img/rain.png'
import sunny from '../img/sunny.png'

const weatherContainer = document.getElementById('weatherContainer')
const title = document.getElementById('dailyTitle')

export const renderWeather = (city, region, forecastArr) => {
    if(!forecastArr.length) {
        weatherContainer.innerText = 'Oops, sorry we could not get weather for your area :('
        return
    }
    console.log("ForecastArr:", forecastArr)
    title.innerText = `Weather Forecast for ${city}, ${region}`
    const dailyForecastContainer = document.createElement('div')
    dailyForecastContainer.setAttribute("id", "dailyForecast")
    weatherContainer.appendChild(dailyForecastContainer)
    let forecastHTML = ''
    forecastArr.map(day => {
        let dailyForecastHTML = `
        <div class='daily-weather'>
        <img aria-label='cloudy' src=${day.icon}/>
        <p>${day.icon}</p>
        <p><strong>${Math.ceil(day.temperatureMax)}°</strong> / ${Math.floor(day.temperatureMin)}°F </p>
        </div>
        `
        return forecastHTML += dailyForecastHTML += `<br>`
    })
    dailyForecastContainer.innerHTML = forecastHTML
}
