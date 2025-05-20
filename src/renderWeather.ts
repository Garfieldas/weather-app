import { Weather } from "./Weather";
import removeForecast from "./removeForecast";

const renderWeather = (weather: Weather) => {

    const container = document.querySelector('#forecast-list');
    const column = document.createElement('div');
    column.setAttribute('id', weather.id);
    column.classList.add('column');
    column.classList.add('is-6-tablet');
    column.classList.add('is-4-desktop');
    container?.appendChild(column);

    const card = document.createElement('div');
    card.classList.add('card');
    column.appendChild(card);

    const header = document.createElement('header');
    header.classList.add('card-header');
    card.appendChild(header)

    const headerTitle = document.createElement('p');
    headerTitle.classList.add('card-header-title');
    headerTitle.textContent = `${weather.city}, ${weather.country}`;
    header.appendChild(headerTitle);

    const headerIcon = document.createElement('button');
    headerIcon.classList.add('card-header-icon');
    headerIcon.setAttribute('aria-label', 'remove');
    headerIcon.setAttribute('title', 'Remove Forecast');
    header.appendChild(headerIcon);

    const span = document.createElement('span');
    span.classList.add('icon');
    span.classList.add('has-text-danger');
    headerIcon.appendChild(span);

    const icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-trash');
    span.appendChild(icon);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    const content = document.createElement('div');
    content.classList.add('content');
    cardContent.appendChild(content);

    const figure = document.createElement('figure');
    figure.classList.add('image');
    figure.classList.add('is-64x64');
    figure.classList.add('mb-3');
    content.appendChild(figure);

    const img = document.createElement('img');
    img.setAttribute('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`);
    img.setAttribute('alt', 'Weather icon');
    figure.appendChild(img);

    const parameters = ['Temperature: ', 'Humidity: ', 'Wind Speed: ',
        'Pressure: ', 'Sunrise: ', 'Sunset: '
    ]

    const values = ['temp', 'humidity', 'windSpeed',
         'pressure', 'sunrise', 'sunset'
    ];


    parameters.forEach((param, index) => {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        const text = document.createTextNode(param);
        const valueText = document.createTextNode(
            String(weather[values[index] as keyof typeof weather])
        )
        p.appendChild(strong);
        strong.appendChild(text);
        p.appendChild(valueText);
        content.appendChild(p);
        
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button');
    deleteBtn.classList.add('is-danger');
    deleteBtn.textContent = 'Remove';
    content.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        removeForecast(weather.id)
    })

}

export default renderWeather;