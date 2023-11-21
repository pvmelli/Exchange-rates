import {getCurrencies} from '../services/exchangerates.js';

import {manageExchange} from './infolist.js';

export async function fillCurrencySelect () {
    const currencyMenuBase = document.querySelector('#base-currency');
    const currencyMenuTarget = document.querySelector('#target-currency');

    const currencyList = await getCurrencies();

    const currencyCodes = Object.keys(currencyList);

    currencyCodes.forEach(currency => {
        const currencyOptionBase = createCurrencyOptions (currency);
        const currencyOptionTarget = createCurrencyOptions (currency);

        currencyMenuBase.appendChild(currencyOptionBase);
        currencyMenuTarget.appendChild(currencyOptionTarget);

    })

};

function createCurrencyOptions(currencyCode) {
    const option = document.createElement('option')
    option.classList.add('option');
    option.setAttribute('value', currencyCode);
    option.innerText = currencyCode;
    return option;
};

export function addFormEventListeners() {

    const convertButton = document.querySelector('#convert-button');
    convertButton.addEventListener('click', manageValidation);
};

function manageValidation(){
    const amountField = document.querySelector('#base-number');

    const isValid = amountField.checkValidity();

    if (isValid){
        manageExchange()
    }else {
        return false;
    }

}

