import { readStorage, saveToStorage } from "./storage";
import showNotification from "./showNotification";
import { pagination, getPage, setPage, totalPages } from "./pagination";

const removeForecast = (id: string) =>
{
    const forecastCard = document.getElementById(id);
    const storedForecasts = readStorage();
    const filtered = storedForecasts.filter((forecast: {id: string}) => forecast.id !== id);
    saveToStorage(filtered);
    forecastCard?.remove();
    showNotification('Deleted successfully', 'is-warning');

    let currentPage = getPage();

    if (currentPage > totalPages() && totalPages() > 0) {
        currentPage = totalPages();
        setPage(currentPage);
    }

    if (filtered.length === 0){
        setPage(1);
    }

    pagination(readStorage());

}

export default removeForecast;