import { convertDate } from "./utils";
import {fetchLocation, fetchForecast} from './ajaxHelpers'
import {renderForm, renderWeather} from './renderHelpers'


const init = async() => {
    const now = new Date()
    const dateStr = `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`
    renderForm()

}


init()
