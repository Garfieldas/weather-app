import { readStorage } from "../utils/storage";
import renderWeather from "../components/renderWeather";
import { Weather } from "./Weather";
import updateButtons from "../utils/updateButtons";

let page = 1;
const itemsPerPage = 10;
const getPage = () => page;
const setPage = (newPage: number) => {
    page = newPage;
}

const totalPages = () => {
    const allItems = Object.values(readStorage());
    const totalPages = Math.ceil(allItems.length / itemsPerPage);
    return totalPages;
}
const pagination = (data : Record<string, Weather>, newPage?: number) => {

    if (newPage !== undefined) setPage(newPage);

    document.querySelector('#forecast-list')!.innerHTML = '';
    const dataList = Object.values(data);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const dataPages = dataList.slice(start, end);
    updateButtons();

    dataPages.forEach(renderWeather);
}

export { pagination, getPage, setPage, itemsPerPage, totalPages };