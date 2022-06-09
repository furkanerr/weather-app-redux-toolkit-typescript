import axios  from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/'

export default class Service  {

    static async GetWeatherByCityName (cityName) {
        try {
                const response = await axios.get(`${URL}weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                return response;
        } catch (error) {
            console.log(error)
            return error;
        }
    }

    static async GetWeatherByCityLocation(lat,lon){
        try {
            const response = await axios.get(`${URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            return response;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}