import { convertDate } from "./utils";
import cloudy from '../img/cloudy.png'
import rain from '../img/rain.png'
import sunny from '../img/sunny.png'

const weatherContainer = document.getElementById('weatherContainer')
const title = document.getElementById('dailyTitle')

export const renderWeather = (city, region, forecastArr) => {

    //If there is an error you want a helpful message to render to the user instead
    if(!forecastArr.length) {
        weatherContainer.innerText = 'Oops, sorry we could not get weather for your area :('
        return
    }
    //create a title based on the city
    title.innerText = `Weather Forecast for ${city}, ${region}`
    //created new HTML element to store each individual of the dates
    const dailyForecastContainer = document.createElement('div')
    dailyForecastContainer.setAttribute("id", "dailyForecast")
    weatherContainer.appendChild(dailyForecastContainer)
    let forecastHTML = ''
    let dayIdx = ['Today', 'Tomorrow', 'The Day After Tomorrow']
    forecastArr.map((day, index) => {
        let dailyForecastHTML = `
        <div class='daily-weather'>
        <h5 class='day-names'>${dayIdx[index]}</h5>
        <img aria-label='cloudy' src=${day.icon}/>
        <p>${day.icon}</p>
        <p><strong>${Math.ceil(day.temperatureMax)}°</strong> / ${Math.floor(day.temperatureMin)}°F </p>
        </div>
        `
        return forecastHTML += dailyForecastHTML += `<br>`
    })
    dailyForecastContainer.innerHTML = forecastHTML
}
