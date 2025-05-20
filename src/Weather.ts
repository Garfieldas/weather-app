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

    constructor(
        city: string,
        country: string,
        temp: number,
        humidity: number,
        windSpeed: number,
        pressure: number,
        sunrise: string,
        sunset: string,
        icon: string
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
        this.icon = icon;
    }
}