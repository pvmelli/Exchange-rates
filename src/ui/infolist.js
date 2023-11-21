import {getExchangeData} from '../services/exchangerates.js';

export async function manageExchange () {

    const inputArray = fetchInput();
    waitForExchangeData (inputArray).then(
        data => {
            fillInfoBox(data.conversion_rate, data.conversion_result)
        });
    makeInfoBoxVisible();

}

async function waitForExchangeData (inputArray) {
    const exchangeData = await getExchangeData(inputArray[0], inputArray[1], inputArray[2]);
    return exchangeData;
}

function fetchInput () {
    const amount = document.querySelector('#base-number').value;
    const baseCurrency = document.querySelector('#base-currency').value;
    const targetCurrency = document.querySelector('#target-currency').value;

    const inputArray = [amount, baseCurrency, targetCurrency];

    return inputArray;
};

function makeInfoBoxVisible() {
    const infoBox = document.querySelector('#conversion-box');
    infoBox.style.display = 'flex';
};

function fillInfoBox(conversion_rate, conversion_result) {
    const conversionRate = document.querySelector('#insert-conversion-rate');
    const conversionResults = document.querySelector('#insert-conversion-result');

    erasePreviousResults(conversionRate);
    erasePreviousResults(conversionResults);

   conversion_rate = numberFormatter(conversion_rate);
   conversion_result = numberFormatter(conversion_result);

    const rate_text = document.createTextNode(conversion_rate);
    const result_text = document.createTextNode(conversion_result);

    conversionRate.appendChild(rate_text);
    conversionResults.appendChild(result_text);
}

function erasePreviousResults(node){
    node.innerHTML = "";
}

function numberFormatter(number){
    const formattedNumber = new Intl.NumberFormat().format(number);

    return formattedNumber;
}