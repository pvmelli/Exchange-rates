import {manageExchange, amountFormatter} from '../infolist.js';
import fixture from "../../__tests__/exchange.fixture.js";
import exchangeList from "../../../cypress/fixtures/2020-02-14-USD.json";

test ("Getting exchange rates", () => {
    document.body.innerHTML = fixture;
    global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(exchangeList);
      });
      resolve({ json: () => jsonPromise });
    }));
    const CUSTOM_DATE = '2020-02-14';
    const DATE_INPUT = document.querySelector('#dateInput');
    DATE_INPUT.value = CUSTOM_DATE;

    const OPTION = document.createElement('option');
    OPTION.classList.add('option');
    OPTION.setAttribute('value', 'USD');
    OPTION.innerText = 'USD';

    const SELECT_MENU = document.querySelector('#select-menu');
    SELECT_MENU.appendChild(OPTION);

    const CUSTOM_AMOUNT = '2';
    const AMOUNT_INPUT = document.querySelector('#amountInput');
    AMOUNT_INPUT.value = CUSTOM_AMOUNT;

    manageExchange()
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/2020-02-14?base=USD`)
        expect(document.querySelector('#conversion-box').getAttribute('class'))
        .toEqual(expect.not.stringContaining('not-display'));

});

test ("Formatting input", () => {
  expect(amountFormatter('')).toBe('1');
  expect(amountFormatter('1,4')).toBe('1.4');
  expect(amountFormatter('4')).toBe('4');
  expect(amountFormatter('1.5')).toBe('1.5');
});

