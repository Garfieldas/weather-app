const closeModal = () => {

    const modal =  document.querySelector<HTMLElement>('#forecast-modal');
    modal?.classList.remove('is-active');
}

const showModal = () => {
    
    const modal =  document.querySelector<HTMLElement>('#forecast-modal');
    modal?.classList.add("is-active");
}

export { closeModal, showModal }