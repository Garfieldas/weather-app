import axios from 'axios';

class Weather {
    id: string;
    city: string;
    country: string;
    temp: number;
    humidity: number;
    windSpeed: number;
    pressure: number;
    sunrise: string;
    sunset: string;

    constructor(
        city: string,
        country: string,
        temp: number,
        humidity: number,
        windSpeed: number,
        pressure: number,
        sunrise: string,
        sunset: string
    ) {
        this.id = crypto.randomUUID();
        this.city = city;
        this.country = country;
        this.temp = temp;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.pressure = pressure;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}

const apiCall = async (search: string) => {
    const API_KEY = 'b545f223d084995689161a761876e21e';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
    let query = '';
    const trimmed = search.trim();

    const coordsMatch = trimmed.match(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/);
    if (coordsMatch) {
        const lat = parseFloat(coordsMatch[1]);
        const lon = parseFloat(coordsMatch[3]);
        query = `&lat=${lat}&lon=${lon}`;
    }
    else if (/^\d{4,7},[a-zA-Z]{2}$/.test(trimmed)) {
        const [zip, country] = trimmed.split(',');
        query = `&zip=${zip.trim()},${country.trim().toLowerCase()}`;
    }
    else {
        query = `&q=${trimmed}`;
    }

    const formatTime = (seconds: number, timeZone: number) => {
        return new Date((seconds + timeZone) * 1000).toUTCString().slice(-12, -4);
    }

    try {
        const response = await axios.get(API_URL + query);
        const data = response.data;

        const timeZone = data.timezone;
        const sys = data.sys;

        const sunrise = formatTime(sys.sunrise, timeZone);
        const sunset = formatTime(sys.sunset, timeZone);

        const weather = new Weather(
            data.name,
            sys.country,
            data.main.temp,
            data.main.humidity,
            data.wind.speed,
            data.main.pressure,
            sunrise,
            sunset
        );
        console.log(weather);
        console.log(data);

    } catch (error: any) {
        if (error.response?.data?.message) {
            console.error("Weather API error:", error.response.data.message);
        } else {
            console.error("Unknown error:", error);
        }
    }
};

export default apiCall;
