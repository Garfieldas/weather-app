import { readStorage, saveToStorage } from "../utils/storage";
import showNotification from "../utils/showNotification";
import { pagination, getPage, setPage, totalPages } from "./pagination";
import { Weather } from "./Weather";

const removeForecast = (id: string) => {
    const forecastCard = document.getElementById(id);
    const storedForecasts = readStorage();
    const forecastList: Weather[] = Object.values(storedForecasts);

    const filtered = forecastList.filter((forecast) => forecast.id !== id);

    saveToStorage(filtered);
    forecastCard?.remove();
    showNotification("Deleted successfully", "is-warning");

    let currentPage = getPage();

    if (currentPage > totalPages() && totalPages() > 0) {
        currentPage = totalPages();
        setPage(currentPage);
    }

    if (filtered.length === 0) {
        setPage(1);
    }

    pagination(readStorage(), getPage());
};

export default removeForecast;
