export async function loadDataFromApi (amount, base, target) {
    const response = await fetch (`https://v6.exchangerate-api.com/v6/f6c00f0fc372c38dbe107fe6/pair/${base}/${target}/${amount}`)
    let data = await response.json();

    return data;
};

export async function loadCurrenciesFromApi () {
    const response = await fetch (`https://v6.exchangerate-api.com/v6/f6c00f0fc372c38dbe107fe6/codes`)
    let data = await response.json();

    return data;
};


