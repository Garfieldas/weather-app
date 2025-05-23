import { readStorage, saveToStorage } from "./storage";
import apiCall from "./api";
import { pagination, getPage } from "./pagination";
import { Weather } from "./Weather";

const updateForecasts = async () => {
    const storedForecasts = readStorage();
    const forecastList: Weather[] = storedForecasts ? Object.values(storedForecasts) : [];

    const updatedForecasts = await Promise.all(forecastList.map(async (forecast) => {
        const updated = await apiCall(`${forecast.lat},${forecast.lon}`);
        return updated || forecast;
    }));

    saveToStorage(updatedForecasts);
    pagination(readStorage(), getPage());
};

export default updateForecasts;
