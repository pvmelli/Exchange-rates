export async function loadDataFromApi (date, base='EUR') {
    const response = await fetch (`https://api.exchangeratesapi.io/${date}?base=${base}`)
    let data = await response.json();

    return data;
    /* const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${limit}`);
    let data = await response.json();

    return data;*/
}


