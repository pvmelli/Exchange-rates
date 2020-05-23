import {getCurrencies} from '../services/exchangerates.js';
import {
    getTodaysDate,
    addEventListeners
} from '../utilities/utilities.js'

import {manageExchange} from './infolist.js';

export async function fillCurrencySelect () {
    const currencyMenu = document.querySelector('#select-menu');

    const currencyList = await getCurrencies();
    
    currencyList.forEach(currency => {
        const currencyOption = createCurrencyOptions(currency);

        currencyMenu.appendChild(currencyOption);
    });
};

function createCurrencyOptions(currency) {
    const option = document.createElement('option')
    option.setAttribute('value', currency);
    option.innerText = currency;
    return option;
};

export function setMaxDateOfInput() {
    const dateField = document.querySelector('#dateInput');

    const todaysDate = getTodaysDate();

    dateField.setAttribute('max', todaysDate);
}

export function addFormEventListeners() {
    addDateFieldEventListener();
    addAmountFieldEventListener();
    addConvertButtonEventListener();
}

function addDateFieldEventListener() {
    const dateField = document.querySelector('#dateInput');
    addEventListeners(dateField, 'input', verifyDate)
};

function verifyDate(e) {
    const input = e.target;
    input.reportValidity()

    if(!input.reportValidity()){
        disableConvertButton();
    }else{
        enableConvertButton();
    }

};

function addAmountFieldEventListener() {
    const amountField = document.querySelector('#amountInput');
    addEventListeners(amountField, 'input', verifyAmount);

}

function verifyAmount(e) {
    clearAmountError();
    let input = e.target.value;

    if(Boolean(input.search(','))){
        input = input.replace(',', '.');
    }

    if (input.trim() === '' || Number(input.trim()) > 0){
        enableConvertButton();
        return '';
    }

    const onlyNumbers = /[^0-9]/;

    if (Number(input.trim()) < 0){
        showAmountError('This field cannot have a negative number');
        disableConvertButton();
        return '';
    };
    if (onlyNumbers.test(input.trim())){
        showAmountError('This field can only contain numbers');
        disableConvertButton();
        return '';
    };

    if (Number(input.trim()) === 0){
        showAmountError('This field cannot be 0');
        disableConvertButton();
        return '';
    };
};

function clearAmountError() {
    const amountField = document.querySelector('#amountInput');
    amountField.classList.remove('is-invalid');

};

function enableConvertButton() {
    const convertButton = document.querySelector('#convert-button');
    convertButton.disabled = false;
};

function disableConvertButton() {
    const convertButton = document.querySelector('#convert-button');
    convertButton.disabled = true;
};

function showAmountError(error) {
    const amountErrorField = document.querySelector('#amount-error');
    amountErrorField.innerText = error;

    const amountField = document.querySelector('#amountInput');
    amountField.classList.add('is-invalid');
};

function addConvertButtonEventListener() {
    const convertButton = document.querySelector('#convert-button');
    addEventListeners(convertButton, 'click', manageExchange)
};
