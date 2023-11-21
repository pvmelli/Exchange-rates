export function loadCurrencyListFromLocalStorage(list) {
    const currencyList = JSON.parse(localStorage.getItem(list));

    return currencyList;
};

export function saveCurrencyListToLocalStorage(list, currencyListData) {
    localStorage.setItem(list, JSON.stringify(currencyListData));
};
