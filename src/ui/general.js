import {
    addHeaderEventListeners,
    closeMenuesWhenClickingOutside
} from './header.js';
import {addFormEventListeners} from './form.js';

export function addInitialEventListeners() {
    addHeaderEventListeners();
    addFormEventListeners();
    addWindowEventListener();
    
    return 'All initial event listeners have been assigned';
};

function addWindowEventListener() {
    window.addEventListener('click', closeMenuesWhenClickingOutside)
};
