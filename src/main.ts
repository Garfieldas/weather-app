import showModal from "./showModal";
import closeModal from "./closeModal";
import apiCall from "./api";
import renderWeather from "./renderWeather";
import saveToStorage from "./saveToStorage";
import readStorage from "./readStorage";
import showNofication from "./showNofication";

const modalBackground = document.querySelector('.modal-background');
const addForecastBtn = document.querySelector('#add-forecast-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const forecastSearchInput = document.querySelector<HTMLInputElement>('#forecast-search-input');
const searchForecastBtn = document.querySelector('#search-forecast-btn');

const forecastData: Array<object> = [];

window.addEventListener("load", () => {
    const previousForecasts = readStorage();
    if (previousForecasts){
        Object.keys(previousForecasts).forEach(key => {
            renderWeather(previousForecasts[key]);
            forecastData.push(previousForecasts[key]);
        })
    }
})

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
        closeModal();
        renderWeather(weather);
        forecastData.push(weather);
        saveToStorage(forecastData);
        showNofication('Added successfully', 'is-success');
    }
    }
})