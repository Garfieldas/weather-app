# Weather Forecast App 🌤️

A responsive weather forecasting app built with **TypeScript**, **Vite**, and the **OpenWeatherMap API**. It supports dynamic city search, ZIP code or coordinate lookup, pagination, local storage caching, and automatic updates every 2 minutes.

## 📦 Getting Started

```bash
git clone https://github.com/Garfieldas/weather-app
cd weather-app
npm install
npm run build
npm run serve
```

## 🌐 Live Preview
https://weather-app-wine-omega-34.vercel.app/

## 🚀 Features

- 🔍 Search by city, ZIP+country (`12345,us`) or coordinates (`55.5, 23.8`)
- 📦 Caches forecasts in browser storage
- 🧭 Pagination for navigating multiple forecasts
- 🔁 Auto-refreshes data every 2 minutes
- ❌ Duplicate forecast prevention
- 🧑‍💻 Written in modular TypeScript (no framework)

## 🛠 Tech Stack

- TypeScript
- Vite
- OpenWeatherMap API
- Bulma CSS
- LocalStorage API
- Package for genereting uuids - https://www.npmjs.com/package/uuid

## 🖼️ Screenshots

### 🔍 Home Page
![home screenshot](https://i.ibb.co/ZRJbkQDV/Screenshot-2025-05-24-at-01-06-16.png)

### 🌍 Add new forecast
![Add forecast screenshot](https://i.ibb.co/qYJnqm7Q/Screenshot-2025-05-24-at-01-06-30.png)

### ❌ Duplicate Forecast Handling
![Duplicate list](https://i.ibb.co/DH5GJwP9/Screenshot-2025-05-24-at-01-07-06.png)

### 🧭  Pagination
![Pagination](https://i.ibb.co/HDJtPqFZ/Screenshot-2025-05-24-at-01-12-48.png)

### 🔍  Search
![Search](https://i.ibb.co/MxxBVTM2/Screenshot-2025-05-24-at-01-13-21.png)




