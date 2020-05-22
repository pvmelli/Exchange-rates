import {
    addHeaderEventListeners,
    hideAllNotClickedMenus
} from './header.js';

import {addFormEventListeners} from './form.js';

export function addInitialEventListeners() {
    addHeaderEventListeners();
    addFormEventListeners();
};



window.onclick = manageClicksOutsideElements;

function manageClicksOutsideElements(e) {
    const clickedElement = e.target;

    if(!(clickedElement.classList.contains('collapsible-content'))){
        hideAllNotClickedMenus(clickedElement);
    }
};

