import { addEventListeners } from '../utilities/utilities.js';

export function addHeaderEventListeners() {
    const headerLinks = document.querySelectorAll('.header-link');
    headerLinks.forEach(headerLink => {
        addHeaderLinkEventListeners(headerLink);
    });

    addHeaderLogInEventListener();
};

function addHeaderLinkEventListeners(headerLink) {
    addEventListeners(headerLink, 'click', manageHeaderLinkClick);
};

function manageHeaderLinkClick (e) {
    toggleClickedMenu(e.target);
    hideAllNotClickedMenus(e.target);

}

function toggleClickedMenu(clickedMenu) {
    clickedMenu.classList.toggle('active');

    const collapsibleContent = document.querySelector(`#${clickedMenu.id}-collapsible`);
    collapsibleContent.classList.toggle('not-display');
    collapsibleContent.classList.toggle('displayed');

};

export function hideAllNotClickedMenus(clickedMenu) {
    const allMenues = document.querySelectorAll('.header-link');

    allMenues.forEach(menu => {
        if(menu === clickedMenu){
            return;
        }
        hideMenu(menu);
    });

}

function hideMenu (menu) {
    if (menu.classList.contains('active')) {
        menu.classList.toggle('active');

        const collapsibleContent = document.querySelector(`#${menu.id}-collapsible`);
        collapsibleContent.classList.toggle('not-display');
        collapsibleContent.classList.toggle('displayed');
    }
};

function addHeaderLogInEventListener() {
    const loginButton = document.querySelector('#login-button');
    addEventListeners(loginButton, 'click', activateLogInForm);

    const closeLoginModalButton = document.querySelector('#close-modal-button');
    addEventListeners(closeLoginModalButton, 'click', deactivateLogInForm);
};

function activateLogInForm() {
    const $loginModal = document.querySelector('#login-modal');
    $loginModal.classList.remove('not-display');
};

export function deactivateLogInForm() {
    const $loginModal = document.querySelector('#login-modal');

    if(!($loginModal.classList.contains('not-display'))){
        $loginModal.classList.add('not-display');
    };
};


