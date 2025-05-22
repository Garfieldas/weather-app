import renderWeather from "./renderWeather";
import { Weather } from "./Weather";

let page = 1;
const itemsPerPage = 10;
const getPage = () => page;
const setPage = (newPage: number) => {
    page = newPage;
}

const pagination = (data : Record<string, Weather>, newPage?: number) => {

    if (newPage !== undefined) setPage(newPage);

    document.querySelector('#forecast-list')!.innerHTML = '';
    const dataList = Object.values(data);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const dataPages = dataList.slice(start, end);
    
    dataPages.forEach((item) => {
        renderWeather(item);
    })
}

export { pagination, getPage, setPage, itemsPerPage };