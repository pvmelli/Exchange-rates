import {getExchangeData} from '../services/exchangerates.js';

export async function manageExchange () {
    const inputArray = fetchInput();
    const exchangeData = await getExchangeData(inputArray[0], inputArray[1]);
    fillInfoBoxWithLoading();
    makeInfoBoxVisible();
    fillInfoBox(exchangeData, inputArray[2]);
}

function fetchInput () {
    const date = document.querySelector('#dateInput').value;
    const currency = document.querySelector('#select-menu').value;
    const amount = amountFormatter(document.querySelector('#amountInput').value);

    const inputArray = [date, currency, amount];

    return inputArray;
};

function amountFormatter(value) {
    let amount;
    if(value === ''){
        amount = '1';
    }else if (value.search(',')){
        amount = value.replace(',','.')
    };
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

function fillInfoBox(exchangeData, amount) {
    const infoBox = document.querySelector('#conversion-box');
    infoBox.innerHTML = '';
    setTitle(exchangeData, infoBox);
    setTable(exchangeData, amount, infoBox)

    // set table

};

function setTitle(exchangeData, container) {
    const title = document.createElement('h2');
    title.innerText = `Exchange rates of ${exchangeData.date}`;

    container.appendChild(title);
};

function setTable(exchangeData, amount, container){
    const rates = exchangeData.rates;

    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('thead');
    fillHeadRow(['#', `${amount} ${exchangeData.base}`], tableHead);
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
    title.innerText = '1 ' + titleData;
    row.appendChild(title);

    const value = document.createElement('td');
    value.innerText = (valueData * amount).toFixed(2);
    row.appendChild(value);

    container.appendChild(row);
};

/* function fillTable(obj, input) {
        for (const prop in obj) {
            const $tBody = document.querySelector('#exchange-tbody');
            const $tr = document.createElement('tr');
            const $currencyTh = document.createElement('th');
            const $exchangeOne = document.createElement('td');
            $exchangeOne.setAttribute('id', `${prop}-exchange`)

            const currency = prop;
            $currencyTh.innerText = currency;

            const exchangeRate = obj[prop].toFixed(2);
            $exchangeOne.innerText = exchangeRate;

            $tr.appendChild($currencyTh);
            $tr.appendChild($exchangeOne);

            if (Number(input[2]) !== 1) {
                const $exchangeAmount = document.createElement('td');
                const exchangeForAmount = obj[prop] * Number(input[2]);
                $exchangeAmount.innerText = exchangeForAmount.toFixed(2);                
                $tr.appendChild($exchangeAmount);
                };



            $tBody.appendChild($tr);
        };

        const inputAmount = Number(input[2]);

        if (inputAmount !== 1) {
            createAnotherColumnTitle(input);
        };
        

    };

    function createAnotherColumnTitle(input) {
        const $tableHead = document.querySelector('#table-head')
        const $th = document.createElement('th');
        $th.setAttribute('scope', 'col');



        const $amountDiv = document.createElement('div');
        $amountDiv.setAttribute('id','your-amount');
        $amountDiv.innerText = input[2];
        $th.appendChild($amountDiv);

        const $currencyDiv = document.createElement('div');
        $currencyDiv.innerText = input[1];
        $th.appendChild($currencyDiv);

        $tableHead.appendChild($th);
    }

    function clearTable(){
        const $tBody = document.querySelector('#exchange-tbody');
        $tBody.innerHTML = '';
        const $tableHead = document.querySelector('#table-head')
        $tableHead.innerHTML = '';
    };

    function createTable(input) {
        const date = document.querySelector('#date-output');
        date.innerText = input[0];
        const $tableBox = document.querySelector('#exchange-list');
        $tableBox.classList.remove('not-display');


        const $tableHead = document.querySelector('#table-head')
        const $currencyTh = document.createElement('th');
        $currencyTh.setAttribute('scope', 'col');
        $currencyTh.innerText = 'Currency';

        const $exchangeTh = document.createElement('th');
        $exchangeTh.setAttribute('scope', 'col');
        $exchangeTh.innerText = input[1];

        $tableHead.appendChild($currencyTh);
        $tableHead.appendChild($exchangeTh);
    }; */

