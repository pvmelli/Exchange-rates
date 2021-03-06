import {getExchangeData} from '../services/exchangerates.js';

class ExchangeRate {
    constructor(data, amount) {
        this.date = data.date;
        this.base = data.base;
        this.rates = data.rates;
        this.amount = amount;
    }
    fillInfoBox(infoBox) {
        infoBox.innerHTML = '';
        setTitle(this.date, infoBox);
        setTable(this.rates, this.base, this.amount, infoBox);
    }
}

export async function manageExchange () {
    const inputArray = fetchInput();
    waitForExchangeData (inputArray).then(
        data => {
            const infoBox = document.querySelector('#conversion-box');
            const exchangerates = new ExchangeRate(data, inputArray[2]);
            exchangerates.fillInfoBox(infoBox);
            appendToTopButton();
        });
    makeInfoBoxVisible();
    fillInfoBoxWithLoading();

}

async function waitForExchangeData (inputArray) {
    const exchangeData = await getExchangeData(inputArray[0], inputArray[1]);
    return exchangeData;
}

function fetchInput () {
    const date = document.querySelector('#dateInput').value;
    const currency = document.querySelector('#select-menu').value;
    const amount = amountFormatter(document.querySelector('#amountInput').value.trim());

    const inputArray = [date, currency, amount];

    return inputArray;
};

export function amountFormatter(value) {
    let amount;
    if(value === ''){
        amount = '1';
    }else if (value.search(',')){
        amount = value.replace(',','.')
    } else {
        amount = value;
    }
    return amount;
};

function fillInfoBoxWithLoading(){
    const loadingContainer = document.createElement('h1');
    loadingContainer.innerText = 'Loading exchange rates...';

    const infoBox = document.querySelector('#conversion-box');

    infoBox.appendChild(loadingContainer);
};

function makeInfoBoxVisible() {
    const infoBox = document.querySelector('#conversion-box');
    infoBox.classList.remove('not-display');
};

function setTitle(date, container) {
    const title = document.createElement('h2');
    title.innerText = `Exchange rates of ${date}`;

    container.appendChild(title);
};

function setTable(rates, base, amount, container){
    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('thead');
    fillHeadRow(['#', `${amount} ${base}`], tableHead);
    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    Object.entries(rates).forEach(rate => {
        fillARateBodyRow(rate[0], rate[1], amount, tableBody);
    });
    table.appendChild(tableBody);

    container.appendChild(table);
}

function fillHeadRow(titlesArray, container) {
    const row = document.createElement('tr');

    titlesArray.forEach(title => {
        const titleContainer = document.createElement('th');
        titleContainer.setAttribute('scope', 'col');
        titleContainer.innerText = title;

        row.appendChild(titleContainer);
    });

    container.appendChild(row);
};

function fillARateBodyRow(titleData, valueData, amount, container) {
    const row = document.createElement('tr');

    const title = document.createElement('th');
    title.innerText = titleData;
    row.appendChild(title);

    const value = document.createElement('td');
    value.innerText = (valueData * amount).toFixed(2);
    row.appendChild(value);

    container.appendChild(row);
};

function appendToTopButton() {
    const infoBox = document.querySelector('#conversion-box');

    const toTopButton = document.createElement('button')
    toTopButton.setAttribute('type', 'button');
    toTopButton.setAttribute('id', 'topButton');
    toTopButton.innerText = 'Back To Top'
    toTopButton.classList.add('btn');
    toTopButton.classList.add('btn-outline-light');
    toTopButton.style.color = '#43bbef';
    toTopButton.style.border = '1px solid #43bbef';

    infoBox.appendChild(toTopButton);

    document.querySelector('#topButton').addEventListener('click', () => {document.documentElement.scrollTop = 0})
};