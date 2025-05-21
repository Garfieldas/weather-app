const showNotification = (message: string, type: 'is-success' | 'is-danger', duration = 3000) => {

    const container = document.querySelector('#notifications-container');

    const nofication = document.createElement('div');
    nofication.className = `notification ${type}`;
    nofication.textContent = message;

    container?.appendChild(nofication);

    setTimeout(() => {
        if (container?.contains(nofication)) {
            container.removeChild(nofication)
        }
    }, duration);
}

export default showNotification;