import {
    loadCurrencyListFromLocalStorage,
    saveCurrencyListToLocalStorage
} from '../storage/storage.js';

import {loadDataFromApi,
    loadCurrenciesFromApi} from '../api/api.js';

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
            const currencyData = await loadCurrenciesFromApi();

            const currency_pairs = Object.values(currencyData.supported_codes);

            const currencies = Object.fromEntries(currency_pairs);

            saveCurrencyListToLocalStorage ('list', currencies);


            return currencyList;
        }catch(e) {
            return null;
        };
    };
};

export async function getExchangeData(amount, base, target) {

            const exchangeData = await loadDataFromApi(amount, base, target);
            
            return exchangeData;

};