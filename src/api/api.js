export async function loadDataFromApi (date, base='EUR') {
    const response = await fetch (`https://api.exchangeratesapi.io/${date}?base=${base}`)
    let data = await response.json();

    return data;
};

export async function loadCurrencyList () {
    const response = await fetch ('../src/data/currencies.json');
    let data = await response.json();
    
    return data.currencies;
};


