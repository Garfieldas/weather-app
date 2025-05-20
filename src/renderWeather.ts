const renderWeather = () => {

    const container = document.querySelector('#forecast-list');
    const column = document.createElement('div');
    column.classList.add('column is-6-tablet is-4-desktop');

    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('header');
    header.classList.add('card-header')
    const headerTitle = document.createElement('p');
    headerTitle.classList.add('card-header-title');
    header.appendChild(headerTitle);

    const headerIcon = document.createElement('button');
    headerIcon.classList.add('card-header-icon')

}