export function activateAbout() {
    document.querySelectorAll('.section').forEach((section)=> {
        section.classList.add('hidden');
    })

    document.querySelector('#about-section').classList.remove('hidden')
};

export function activateContact() {
    document.querySelectorAll('.section').forEach((section)=> {
        section.classList.add('hidden');
    })

    document.querySelector('#contact-section').classList.remove('hidden')
};

export function activateCredits() {
    document.querySelectorAll('.section').forEach((section)=> {
        section.classList.add('hidden');
    })

    document.querySelector('#credits-section').classList.remove('hidden')
}

export function activateConverter() {
    document.querySelectorAll('.section').forEach((section)=> {
        section.classList.add('hidden');
    })

    document.querySelector('#converter-section').classList.remove('hidden')
}




