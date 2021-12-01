import {
    activateAbout,
    activateContact,
    activateCredits,
    activateConverter
} from './page-content.js'

import {
    addFormTypesButtonEventListeners,
    addFormEventListeners
} from './form.js'

export function addInitialEventListeners() {
    addSectionLinkEventListeners();
    addFormTypesButtonEventListeners();
    addFormEventListeners();
    /*addHeaderEventListeners();
    
    addWindowEventListener();
    
    return 'All initial event listeners have been assigned';*/
};

function addSectionLinkEventListeners() {
    document.querySelectorAll('.to-converter').forEach((converterLink) => {
        converterLink.addEventListener('click', activateConverter)
    });

    document.querySelectorAll('.to-about').forEach((aboutLink) => {
        aboutLink.addEventListener('click', activateAbout)
    });

    document.querySelectorAll('.to-contact').forEach((contactLink)=> {
        contactLink.addEventListener('click', activateContact)
    });

    document.querySelectorAll('.to-credits').forEach((creditsLink) => {
        creditsLink.addEventListener('click', activateCredits)
    })
};




