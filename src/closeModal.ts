const closeModal = (modal: HTMLElement | null) => {
    modal?.classList.remove('is-active')
}

export default closeModal;