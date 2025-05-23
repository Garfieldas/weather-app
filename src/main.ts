import { readStorage, saveToStorage } from "./utils/storage";
import { showModal, closeModal } from "./components/modal";
import apiCall from "./api/api";
import showNotification from "./utils/showNotification";
import { pagination, getPage, setPage } from "./features/pagination";
import { performSearch } from "./features/search";
import updateForecasts from "./features/updateForecasts";

const modalBackground = document.querySelector(".modal-background");
const addForecastBtn = document.querySelector("#add-forecast-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const forecastSearchInput = document.querySelector<HTMLInputElement>("#forecast-search-input");
const searchForecastBtn = document.querySelector("#search-forecast-btn");
const searchBar = document.querySelector<HTMLInputElement>("#search-bar");
const searchBarBtn = document.querySelector("#searchBarBtn");

export const nextBtn = document.querySelector<HTMLElement>(".pagination-next");
export const previousBtn = document.querySelector<HTMLElement>(".pagination-previous");

window.addEventListener("load", () => {
  const previousForecasts = readStorage();
  pagination(previousForecasts);
  const seconds = 120 * 1000;
  setInterval(updateForecasts, seconds);
});

searchBar?.addEventListener("keydown", (e) => {
  if (e instanceof KeyboardEvent && e.key === "Enter") {
    const query = searchBar.value;
    performSearch(query);
    searchBar.value = "";
  }
});

searchBarBtn?.addEventListener("click", () => {
  const query = searchBar!.value;
  performSearch(query);
  searchBar!.value = "";
});

nextBtn?.addEventListener("click", () => {
  const nextPage = getPage() + 1;
  setPage(nextPage);
  pagination(readStorage(), getPage());
});

previousBtn?.addEventListener("click", () => {
  const previousPage = getPage() - 1;
  setPage(previousPage);
  pagination(readStorage(), getPage());
});

addForecastBtn?.addEventListener("click", () => {
  showModal();
  forecastSearchInput && (forecastSearchInput.value = "");
});

closeModalBtn?.addEventListener("click", () => closeModal());
modalBackground?.addEventListener("click", () => closeModal());

searchForecastBtn?.addEventListener("click", async () => {
  const search = forecastSearchInput?.value;
  if (!search) return;

  const weather = await apiCall(search);
  if (!weather) return;

  const storedForecasts = readStorage();
  const storedForecastsList = Object.values(storedForecasts);

  const exists = storedForecastsList.some(
    (item) =>
      (item.lon === weather.lon && item.lat === weather.lat) ||
      item.city.toLowerCase() === weather.city.toLowerCase()
  );

  if (exists) {
    closeModal();
    showNotification("Forecast already exists", "is-danger");
    return;
  }

  const updatedForecasts = [...storedForecastsList, weather];
  saveToStorage(updatedForecasts);
  closeModal();
  pagination(readStorage());
  showNotification("Added successfully", "is-success");
});
