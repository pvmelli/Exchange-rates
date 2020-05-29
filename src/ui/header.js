export function addHeaderEventListeners() {
    const headerLinks = document.querySelectorAll('.header-link');
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener('click', manageHeaderLinkClick);
    });

    addHeaderLogInEventListeners();
};

export function manageHeaderLinkClick (e) {
    toggleClickedMenu(e.target);
    hideAllNotClickedMenus(e.target);

    return 'Header link click has been managed';
};

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

function addHeaderLogInEventListeners() {
    const loginButton = document.querySelector('#login-button');
    loginButton.addEventListener('click', activateLogInForm);

    const closeLoginModalButton = document.querySelector('#close-modal-button');
    closeLoginModalButton.addEventListener('click', deactivateLogInForm);
};

export function activateLogInForm() {
    const $loginModal = document.querySelector('#login-modal');
    $loginModal.classList.remove('not-display');

    return 'The login form is now visible'
};

export function deactivateLogInForm() {
    const $loginModal = document.querySelector('#login-modal');

    if(!($loginModal.classList.contains('not-display'))){
        $loginModal.classList.add('not-display');
        return 'There was a modal being displayed, it has now been hidden'
    }else{
        return 'There was no modal being displayed'
    }
};

export function closeMenuesWhenClickingOutside(e) {
    const clickedElement = e.target;

    if(!(clickedElement.classList.contains('collapsible-content'))){
        hideAllNotClickedMenus(clickedElement);
        return 'The user clicked outside the collapsible menu';
    }else{
        return 'The user clicked inside the collapsible menu';
    };
};


