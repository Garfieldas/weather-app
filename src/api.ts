import axios from 'axios'

class Weather {
    city: string;
    country: string;
    temp: number;
    windSpeed: number;
    sunrise: string;
    sunset: string;

    constructor(
        city: string,
        country: string,
        temp: number,
        windSpeed: number,
        sunrise: string,
        sunset: string

    ) 
    {
        this.city = city;
        this.country = country;
        this.temp = temp;
        this.windSpeed = windSpeed;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}

const apiCall = async (city: string) => {

    const API_KEY = 'b545f223d084995689161a761876e21e';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
    const query = `&q=${city}`;

    const formatTime = (seconds: number, timeZone: number) => {

        return new Date((seconds + timeZone) * 1000).toUTCString().slice(-12, -4);
    }

    try {

        const response = await axios.get(API_URL + query)
        const data = response.data;

        const timeZone = data.timezone;
        const sys = data.sys;

        const sunrise = formatTime(sys.sunrise, timeZone);
        const sunset = formatTime(sys.sunset, timeZone);

        const weather = new Weather(
            data.name,
            data.sys.country,
            data.main.temp,
            data.wind.speed,
            sunrise,
            sunset
        )
        console.log(weather)
    }
    catch (error) {
        console.error(error);
    }
}

export default apiCall;