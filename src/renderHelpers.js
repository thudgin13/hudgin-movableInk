import { convertDate } from "./utils";

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
    weatherContainer.appendChild(dailyForecastContainer)
    let forecastHTML = ''
    forecastArr.map(day => {
        let dailyForecastHTML = `
        <div>
        <span>${day.icon}</span>
        <p><strong>${Math.ceil(day.temperatureMax)}°</strong> / ${Math.floor(day.temperatureMin)}° F </p>
        </div>
        `
        return forecastHTML += dailyForecastHTML
    })
    dailyForecastContainer.innerHTML = forecastHTML

    console.log(dailyForecastContainer)
}
