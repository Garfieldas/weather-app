import saveToStorage from "./saveToStorage";
import readStorage from "./readStorage";
import showNotification from "./showNotification";

const removeForecast = (id: string) =>
{
    const forecastCard = document.getElementById(id);
    const storedForecasts = readStorage();
    const filtered = storedForecasts.filter((forecast: {id: string}) => forecast.id !== id);
    saveToStorage(filtered);
    forecastCard?.remove();
    showNotification('Deleted successfully', 'is-warning');
}

export default removeForecast;