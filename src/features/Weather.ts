import { v4 as uuidv4 } from 'uuid'

export class Weather {
    id: string;
    city: string;
    country: string;
    temp: number;
    humidity: number;
    windSpeed: number;
    pressure: number;
    sunrise: string;
    sunset: string;
    icon: string;
    lon: number;
    lat: number;

    constructor(
        city: string,
        country: string,
        temp: number,
        humidity: number,
        windSpeed: number,
        pressure: number,
        sunrise: string,
        sunset: string,
        icon: string,
        lon: number,
        lat: number
    ) {
        this.id = uuidv4();
        this.city = city;
        this.country = country;
        this.temp = temp;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.pressure = pressure;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.icon = icon;
        this.lon = lon;
        this.lat = lat;
    }
}