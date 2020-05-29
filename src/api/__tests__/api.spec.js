import {loadDataFromApi} from '../api.js';

test ('Load data from api', () => {
    global.fetch = jest.fn();
    global.fetch.mockImplementation(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r([]);
        });
        resolve({ json: () => jsonPromise });
      }));

      const BASE_URL = 'https://api.exchangeratesapi.io/';

      loadDataFromApi('2020-01-01')
      expect(global.fetch)
        .toHaveBeenCalledTimes(1);

      expect(global.fetch)
        .toHaveBeenCalledWith(`${BASE_URL}2020-01-01?base=EUR`);

      loadDataFromApi('2020-02-02', 'USD')
      expect(global.fetch)
      .toHaveBeenCalledTimes(2);

      expect(global.fetch)
      .toHaveBeenCalledWith(`${BASE_URL}2020-02-02?base=USD`);
});

