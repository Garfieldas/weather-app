import apiCall from "./api";
import { pagination } from "./pagination";
import readStorage from "./readStorage";
import saveToStorage from "./saveToStorage";
import { Weather } from "./Weather";

const updateForecasts = async () => {
    const storedForecasts = readStorage();
    const forecastList: Weather[] = storedForecasts ? Object.values(storedForecasts) : [];

    const updatedForecasts = await Promise.all(forecastList.map(async (forecast) => {
        const updated = await apiCall(`${forecast.lat},${forecast.lon}`);
        return updated || forecast;
    }));

    saveToStorage(updatedForecasts);
    pagination(readStorage());
};

export default updateForecasts;
