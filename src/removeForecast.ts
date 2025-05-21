import saveToStorage from "./saveToStorage";
import readStorage from "./readStorage";

const removeForecast = (id: string) =>
{
    const forecastCard = document.getElementById(id);
    const storedForecasts = readStorage();
    const filtered = storedForecasts.filter((forecast: {id: string}) => forecast.id !== id);
    saveToStorage(filtered);
    forecastCard?.remove();
}

export default removeForecast;