const closeModal = () => {

    const modal =  document.querySelector<HTMLElement>('#forecast-modal');
    modal?.classList.remove('is-active');
}
export default closeModal;