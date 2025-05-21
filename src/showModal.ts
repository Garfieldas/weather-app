const showModal = () => {
    
    const modal =  document.querySelector<HTMLElement>('#forecast-modal');
    modal?.classList.add("is-active");
}

export default showModal;