import saveToStorage from "./saveToStorage";

const removeForecast = (id: string) =>
{
    const forecastCard = document.getElementById(id);
    const storedForecasts = JSON.parse(localStorage.getItem('forecast')!);
    const filtered = storedForecasts.filter((forecast: {id: string}) => forecast.id !== id);
    saveToStorage(filtered);
    forecastCard?.remove();
}

export default removeForecast;