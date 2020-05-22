//     loadCurrencyListFromLocalStorage,
// saveCurrencyListToLocalStorage

export function loadCurrencyListFromLocalStorage(list) {
    const currencyList = JSON.parse(localStorage.getItem(list));

    return currencyList;
};

export function saveCurrencyListToLocalStorage(list, currencyListData) {
    localStorage.setItem(list, JSON.stringify(currencyListData));
};

/* export function loadPokemonDataFromLocalStorage(pokemonName){
    let pokemonData = JSON.parse(localStorage.getItem(pokemonName));
    
    return pokemonData;
};

export function savePokemonDataToLocalStorage (pokemonName, pokemonData){
    localStorage.setItem(pokemonName, JSON.stringify(pokemonData));
 };
 */

