import { convertDate } from "./utils";
import cloudy from '../img/cloudy.png'
import rain from '../img/rain.png'
import sunny from '../img/sunny.png'
import { fetchLocation, fetchForecast } from "./ajaxHelpers";

const weatherContainer = document.getElementById('weatherContainer')
const title = document.getElementById('dailyTitle')

export const renderForm = () => {
    title.innerText = 'What is your current zipcode?'
    weatherContainer.innerHTML +=
    `
    <form class='zipcode-form'>
      <label for="zipcode">Zipcode: </label>
      <input type="text" name="zipcode" />
      <button type="submit">Submit</button>
     </form>
     `
     let form = document.querySelector('.zipcode-form')
     form.addEventListener('submit', async(event) => {
         event.preventDefault()
         let data = await fetchLocation(form.elements.zipcode.value)
         form.elements.zipcode.value = ''
         title.innerText = 'Loading your forecast'
         console.log("fetch location data:", data)
         let forecast = await fetchForecast()
         console.log('forecast var', forecast)
         if(forecast.daily.data) {
             weatherContainer.innerHTML = ``
             console.log('data.city', data.city, data.regionCode)
             renderWeather(data.city, data.regionCode, forecast.daily.data.splice(0, 3))
         }
     })
}

export const renderWeather = (city, region, forecastArr) => {


    //If there is an error you want a helpful message to render to the user instead
    if(!forecastArr.length) {
        weatherContainer.innerText = 'Oops, sorry we could not get weather for your area :('
        return
    }
    //create a title based on the city
    const cityTitle = document.createElement('h3')
    cityTitle.setAttribute("id", 'dailyTitle')
    cityTitle.innerHTML = `Weather Forecast for ${city}, ${region}`
    //created new HTML element to store each individual of the dates
    const dailyForecastContainer = document.createElement('div')
    dailyForecastContainer.setAttribute("id", "dailyForecast")
    weatherContainer.appendChild(cityTitle)
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
    dailyForecastContainer.innerHTML += forecastHTML
}
