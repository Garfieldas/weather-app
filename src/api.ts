import axios from 'axios';
import { Weather } from './Weather';
import { closeModal } from './modal';
import showNotification from './showNotification';

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

        const iconCode = data.weather[0].icon;

        const lon = data.coord.lon;
        const lat = data.coord.lat;

        const weather = new Weather(
            data.name,
            sys.country,
            data.main.temp,
            data.main.humidity,
            data.wind.speed,
            data.main.pressure,
            sunrise,
            sunset,
            iconCode,
            lon,
            lat
        );
        
        return weather;

    } catch (error: any) {

        if (error.response?.data?.message) {
            showNotification(error.response.data.message, 'is-danger');
            closeModal();
        } else {
            showNotification('Request failed', 'is-danger');
            closeModal();
        }
    }
};

export default apiCall;
