import {
    addHeaderEventListeners,
    hideAllNotClickedMenus,
    deactivateLogInForm
} from './header.js';

export function addInitialEventListeners() {
    addHeaderEventListeners();
};



window.onclick = manageClicksOutsideElements;

function manageClicksOutsideElements(e) {
    const clickedElement = e.target;

    if(!(clickedElement.classList.contains('collapsible-content'))){
        hideAllNotClickedMenus(clickedElement);
    }
};

