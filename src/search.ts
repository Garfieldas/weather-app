import { readStorage } from "./storage";
import { Weather } from "./Weather";
import showNotification from "./showNotification";
import { pagination } from "./pagination";

const search = (query: string) => {
  const forecastList = document.querySelector<HTMLElement>('#forecast-list');
  const items: Weather[] = Object.values(readStorage());

  const results = items.filter((item) => 
    item.city.toLowerCase().includes(query.toLowerCase()) ||
    item.country.toLowerCase().includes(query.toLowerCase())
  );

  if (forecastList) {
    forecastList.innerHTML = '';
  }

  return results;
}

const performSearch = (query: string) => {
  const results = search(query);

  if (results.length === 0) {
    showNotification('No results found', 'is-danger');
  } else {
    const resultsRecord = results.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as Record<string, Weather>);

    pagination(resultsRecord, 1);
  }
}

export { search, performSearch };
