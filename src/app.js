import { convertDate } from "./utils";
import {fetchLocation, fetchForecast} from './ajaxHelpers'
import {renderWeather} from './renderHelpers'


const init = async() => {
    const now = new Date()
    const dateStr = `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`
    const {city, regionCode, longitude, latitude} = await fetchLocation()
    const forecast = await fetchForecast(longitude, latitude, dateStr)
    renderWeather(city, regionCode, forecast.daily.data.splice(0, 3))

}


init()
