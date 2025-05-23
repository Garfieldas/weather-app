import saveToStorage from "./saveToStorage";
import readStorage from "./readStorage";
import showNotification from "./showNotification";
import { pagination, getPage, setPage, itemsPerPage } from "./pagination";

const removeForecast = (id: string) =>
{
    const forecastCard = document.getElementById(id);
    const storedForecasts = readStorage();
    const filtered = storedForecasts.filter((forecast: {id: string}) => forecast.id !== id);
    saveToStorage(filtered);
    forecastCard?.remove();
    showNotification('Deleted successfully', 'is-warning');

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    let currentPage = getPage();

    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
        setPage(currentPage);
    }

    if (filtered.length === 0){
        setPage(1);
    }

    pagination(readStorage());

}

export default removeForecast;