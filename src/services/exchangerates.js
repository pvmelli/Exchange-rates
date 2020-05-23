import {
    loadCurrencyListFromLocalStorage,
    saveCurrencyListToLocalStorage,
    loadExchangeRatesDataFromLocalStorage,
    saveExchangeRatesDataToLocalStorage
} from '../storage/storage.js';

import {loadDataFromApi} from '../api/api.js';

export async function getCurrencies() {
    try {
        let currencyList = loadCurrencyListFromLocalStorage('list');
        if (currencyList === null){
            throw error;
        } else {
            return currencyList;
        }
    } catch (error) {
        try {
            const currencyData = await loadDataFromApi('latest');
            
            const currencies = Object.keys(currencyData.rates);
            const currencyBase = currencyData.base;
            currencies.push(currencyBase);

            const currencyList = currencies;
            
            saveCurrencyListToLocalStorage ('list', currencyList);

            return currencyList;
        }catch(e) {
            return null;
        };
    };
};

export async function getExchangeData(date, base) {
    try {
        let exchangeData = loadExchangeRatesDataFromLocalStorage(date, base);

        if (exchangeData === null) {
            throw error;
        } else {
            return exchangeData;
        }
    } catch(error) {
        try {
            const exchangeData = await loadDataFromApi(date, base);

            saveExchangeRatesDataToLocalStorage (date, base, exchangeData);
            
            return exchangeData;
        }catch(e) {
            return null;
        };
    };

};