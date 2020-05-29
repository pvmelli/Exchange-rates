import {saveCurrencyListToLocalStorage, saveExchangeRatesDataToLocalStorage,
    loadCurrencyListFromLocalStorage, loadExchangeRatesDataFromLocalStorage} from '../storage.js'

beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem')
});

afterEach(() => {
    localStorage.setItem.mockRestore()
  })

test("Saving to local storage", () => {
    saveCurrencyListToLocalStorage('list', {id:1})
    expect(localStorage.setItem).toHaveBeenCalledWith('list', JSON.stringify({ id: 1 }))

    saveExchangeRatesDataToLocalStorage('2020-01-01', 'EUR', {id:1})
    expect(localStorage.setItem).toHaveBeenCalledWith('2020-01-01-EUR', JSON.stringify({ id: 1 }))

});

test("Loading from local storage", () => {
    saveCurrencyListToLocalStorage('list', {id:1})
    expect(loadCurrencyListFromLocalStorage('list')).toEqual({id:1})

    saveExchangeRatesDataToLocalStorage('2020-01-01', 'EUR', {id:2})
    expect(loadExchangeRatesDataFromLocalStorage('2020-01-01', 'EUR')).toEqual({id:2})

});


