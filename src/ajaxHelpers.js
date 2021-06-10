import axios from 'axios';

export const fetchLocation = async(zipcode) => {
    try {
        const {data} = await axios.get(`https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=${zipcode}`)
        return data
    } catch (error) {
        console.log("Error fetching location:", error)
    }
}

export const fetchForecast = async(longitude, latitude, date) => {
    try {
        const {data} = await axios.get(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=${longitude}&date=${date}`)
        return data
    } catch (error) {
        console.log("Error: couldn't fetch forecast", error)
    }

}