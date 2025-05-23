import { Weather } from "./Weather";

const saveToStorage = (forecast: Array<Weather> | Record<string, Weather>) => {

    let record: Record<string, Weather>;
    if (Array.isArray(forecast)) {
        record = forecast.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {} as Record<string, Weather>);
    } else {
        record = forecast;
    }

    localStorage.setItem('forecast', JSON.stringify(record));
}

const readStorage = (): Record<string, Weather> => {
    const storedForecasts = localStorage.getItem('forecast');
    if (storedForecasts) {
        return JSON.parse(storedForecasts);
    }
    return {};
}

export { saveToStorage, readStorage };
