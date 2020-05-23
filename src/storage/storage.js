export function loadCurrencyListFromLocalStorage(list) {
    const currencyList = JSON.parse(localStorage.getItem(list));

    return currencyList;
};

export function saveCurrencyListToLocalStorage(list, currencyListData) {
    localStorage.setItem(list, JSON.stringify(currencyListData));
};

export function loadExchangeRatesDataFromLocalStorage(date, base) {
    const exchangeRatesData = JSON.parse(localStorage.getItem(`${date}-${base}`));

    return exchangeRatesData;
};

export function saveExchangeRatesDataToLocalStorage (date, base, exchangeRatesData) {
    localStorage.setItem(`${date}-${base}`, JSON.stringify(exchangeRatesData));
};

