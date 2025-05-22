import showModal from "./showModal";
import closeModal from "./closeModal";
import apiCall from "./api";
import saveToStorage from "./saveToStorage";
import readStorage from "./readStorage";
import showNotification from "./showNotification";
import {pagination, getPage, setPage} from "./pagination";

const modalBackground = document.querySelector('.modal-background');
const addForecastBtn = document.querySelector('#add-forecast-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const forecastSearchInput = document.querySelector<HTMLInputElement>('#forecast-search-input');
const searchForecastBtn = document.querySelector('#search-forecast-btn');

const nextBtn = document.querySelector<HTMLElement>('.pagination-next');
const previousBtn = document.querySelector<HTMLElement>('.pagination-previous');

window.addEventListener("load", () => {
    const previousForecasts = readStorage();
    if (previousForecasts) {
        pagination(previousForecasts);
    }
});

nextBtn?.addEventListener("click", () => {
    const nextPage = getPage() + 1;
    setPage(nextPage);
    pagination(readStorage());
});

previousBtn?.addEventListener("click", () => {
    const previousPage = getPage() - 1;
    setPage(previousPage);
    pagination(readStorage());
});

addForecastBtn?.addEventListener('click', () => {
    showModal();
    forecastSearchInput && (forecastSearchInput.value = '');
});

closeModalBtn?.addEventListener('click', () => closeModal());
modalBackground?.addEventListener('click', () => closeModal());

searchForecastBtn?.addEventListener('click', async () => {
    const search = forecastSearchInput?.value;
    if (search) {
        const weather = await apiCall(search);
        if (weather) {
            const storedForecasts = readStorage();
            const storedForecastsList = storedForecasts ? Object.values(storedForecasts) : [];
            const exists = storedForecastsList.some((item: any) =>
                item.lon === weather.lon && item.lat === weather.lat
            );
            if (!exists) {
                closeModal();
                const updatedForecasts = [...storedForecasts, weather];
                saveToStorage(updatedForecasts);
                pagination(readStorage());
                showNotification('Added successfully', 'is-success');
            }
            else {
                closeModal();
                showNotification('Forecast already exists', 'is-danger');
            }
        }
        else {
            closeModal();
            showNotification('Request failed', 'is-danger');
        }
    }
}
);