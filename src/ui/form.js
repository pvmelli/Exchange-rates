import {getCurrencies} from '../services/exchangerates.js';

import {manageExchange} from './infolist.js';

export async function fillCurrencySelect () {

    const currencyList = await getCurrencies();

    const fiatCurrencies = Object.keys(currencyList.fiat);
    const cryptoCurrencies = Object.keys(currencyList.crypto);

    fillFiatSelect(fiatCurrencies);

    fillCryptoSelect(cryptoCurrencies, fiatCurrencies);
};

function fillFiatSelect(fiatList) {

    const fiatMenuFrom = document.querySelector('#fiat-from-options');
    const fiatMenuTo = document.querySelector('#fiat-to-options');

    fiatList.forEach((currency) => {
        const currencyOptionFrom = createCurrencyOptions(currency);
        const currencyOptionTo = createCurrencyOptions(currency);

        fiatMenuFrom.appendChild(currencyOptionFrom);

        fiatMenuTo.appendChild(currencyOptionTo);
    });

};

function fillCryptoSelect(cryptoList, fiatList) {

    const cryptoMenuFrom = document.querySelector('#crypto-from-options');
    const cryptoMenuTo = document.querySelector('#crypto-to-options');

    cryptoList.forEach((currency) => {
        const currencyOptionFrom = createCurrencyOptions(currency);
        const currencyOptionTo = createCurrencyOptions(currency);

        cryptoMenuFrom.appendChild(currencyOptionFrom);

        cryptoMenuTo.appendChild(currencyOptionTo);  
    });

    fiatList.forEach((currency) => {
        const currencyOption = createCurrencyOptions(currency);

        cryptoMenuTo.appendChild(currencyOption);
    });

};

function createCurrencyOptions(currency) {
    const option = document.createElement('option')
    option.classList.add('option');
    option.setAttribute('value', currency.toUpperCase());//
    option.innerText = currency.toUpperCase();
    return option;
};

export function addFormTypesButtonEventListeners() {
    document.querySelectorAll('.to-fiat-form').forEach((element) => {
        element.addEventListener('click', activateFiatForm);
    });

    document.querySelectorAll('.to-crypto-form').forEach((element) => {
        element.addEventListener('click', activateCryptoForm);
    });
};

function activateFiatForm () {
    markFiatAsSelected();

    document.querySelectorAll('.exchange-form').forEach((form) => {
        form.classList.add('hidden');
    });

    const fiatForm = document.querySelector('#fiat-form');
    fiatForm.classList.remove('hidden');
};

function activateCryptoForm () {

    markCryptoAsSelected();

    document.querySelectorAll('.exchange-form').forEach((form) => {
        form.classList.add('hidden');
    });

    const cryptoForm = document.querySelector('#crypto-form');
    cryptoForm.classList.remove('hidden');
};

function markFiatAsSelected() {
    document.querySelectorAll('.options-button').forEach((element) => {
        element.classList.add('options-non-selected');
    });

    document.querySelectorAll('.to-fiat-form').forEach((element) => {
        element.classList.remove('options-non-selected');
    });
};

function markCryptoAsSelected() {
    document.querySelectorAll('.options-button').forEach((element) => {
        element.classList.add('options-non-selected');
    });

    document.querySelectorAll('.to-crypto-form').forEach((element) => {
        element.classList.remove('options-non-selected');
    });
}


export function addFormEventListeners() {
    document.querySelectorAll('.amount-input').forEach((amountField) => {
        amountField.addEventListener('keydown', manageAmountVerification);
    });    

    /*const convertButton = document.querySelector('#convert-button');
    convertButton.addEventListener('click', manageExchange);*/
};


export function manageAmountVerification(e) {
    e.target.reportValidity();

    const charCode = (e.which) ? e.which : e.keyCode; 

    if (charCode >= 48 && charCode <= 57 || charCode == 46 || charCode == 8 || charCode == 190){

    }
    else {
        e.preventDefault();
    }

};


