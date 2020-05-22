import {
    loadCurrencyListFromLocalStorage,
    saveCurrencyListToLocalStorage
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
    } catch (e) {
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

/*     try {
        let pokemonData = loadPokemonDataFromLocalStorage(pokemonName);
        if (pokemonData === null){
            throw error;
        } else {
            clearInputError();
            makeNavButtonsVisible();
            return pokemonData;
        }
    } catch (e) {
        try {
            let data = await loadPokemonDataFromApi (pokemonName);
            savePokemonDataToLocalStorage (pokemonName, data);
            clearInputError();
            makeNavButtonsVisible();
            return data;
    
        }catch (error){
            clearLoadingPopup();
            showInputError('The name entered is invalid');
            return null;
        }
    } */