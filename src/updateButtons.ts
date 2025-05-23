import { nextBtn, previousBtn } from "./main"
import { totalPages, getPage } from "./pagination";

const updateButtons = () => {

    if(nextBtn) {
        nextBtn.style.display = getPage() >= totalPages() ? 'none' : 'block';
    }

    if(previousBtn) {
        previousBtn.style.display = getPage() <= 1 ? 'none' : 'block';
    }
}

export default updateButtons;