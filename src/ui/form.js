import {getCurrencies} from '../services/exchangerates.js';
import {
    getTodaysDate
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
    option.classList.add('option');
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
    const dateField = document.querySelector('#dateInput');
    dateField.addEventListener('input', manageDateVerification);

    const amountField = document.querySelector('#amountInput');
    amountField.addEventListener('input', manageAmountVerification);

    const convertButton = document.querySelector('#convert-button');
    convertButton.addEventListener('click', manageExchange);
};

function verifyDate(input) {
    input.reportValidity()

    if(!input.reportValidity()){
        return 'error';
    }else{
       return 'success';
    }
};

export function manageDateVerification(e) {
    const input = e.target;

    const result = verifyDate(input);

    if (result === 'error'){
        disableConvertButton();
        return 'There was an error';
    } else {
        enableConvertButton();
        return 'The date was verified';
    }
};

function verifyAmount(input) {
    if(Boolean(input.search(','))){
        input = input.replace(',', '.');
    }

    if (input.trim() === '' || Number(input.trim()) > 0){
        return 'success';
    }

    const onlyNumbers = /[^0-9]/;
    if (Number(input.trim()) < 0){
        return 'This field cannot have a negative number';
    };
    if (onlyNumbers.test(input.trim())){
        return 'This field can only contain numbers';
    };

    if (Number(input.trim()) === 0){
        return 'This field cannot be 0';
    };
};

export function manageAmountVerification(e) {
    clearAmountError();
    const input = e.target.value;

    const result = verifyAmount(input);

    if(result === 'success'){
        enableConvertButton()
        return 'The amount was verified';
    }else {
        disableConvertButton();
        showAmountError(result);
        return result;
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

