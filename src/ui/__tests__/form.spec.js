import {initialize} from '../../exchange.js'
import fixture from "../../__tests__/exchange.fixture.js";
import currencyList from '../../../cypress/fixtures/latest_list.json'
import {fillCurrencySelect, setMaxDateOfInput,
  addFormEventListeners, errorManagement,
  manageDateVerification, manageAmountVerification} from '../form.js';
import {getTodaysDate} from '../../utilities/utilities.js';

describe ("Form setup", () => {
  document.body.innerHTML = fixture;
  test ("The select menu is filled with a currency list", ()=> {
    global.fetch = jest.fn();
    global.fetch.mockImplementation(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r(currencyList);
        });
        resolve({ json: () => jsonPromise });
      }));


    fillCurrencySelect();

    expect(global.fetch)
    .toHaveBeenCalledTimes(1);

});

test("Setting the max date of the date input", () => {
  setMaxDateOfInput();
  expect(document.querySelector('#dateInput').getAttribute('max'))
  .toEqual(getTodaysDate());

});

test("Form elements can be assigned event listeners", () => {
  Element.prototype.addEventListener = jest.fn();

  addFormEventListeners()

  expect(Element.prototype.addEventListener).toHaveBeenCalledTimes(3);

  expect(Element.prototype.addEventListener.mock.calls).toEqual([
    [expect.stringContaining('input'), expect.anything()],
    [expect.stringContaining('input'), expect.anything()],
    [expect.stringContaining('click'), expect.anything()]
  ]);

});

});

describe ("Form validation", () => {
  document.body.innerHTML = fixture;

  test("Manage date verification", () => {
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
  
    const INVALID_DATE = '2020-01-30';
    const dateInputItem= document.createElement('input')
    dateInputItem.setAttribute('type', 'date');
    dateInputItem.setAttribute('min', '1999-01-04');
    dateInputItem.setAttribute('max', '2001-01-01');
    dateInputItem.value = INVALID_DATE;
  
    expect(manageDateVerification({target: dateInputItem})).toBe('There was an error');
    expect(document.querySelector('#convert-button').getAttribute('disabled')).toBeDefined;
  
  
    const VALID_DATE = '2000-01-30';
    dateInputItem.value = VALID_DATE;
  
    expect(manageDateVerification({target: dateInputItem})).toBe('The date was verified');
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
  
  });
  
  test("Manage amount verification", () => {
 
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
    expect(document.querySelector('#amount-error').innerText).not.toBeDefined;
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.not.stringContaining('is-invalid'));
  
    const INVALID_AMOUNTS = {negativeNumber: {target: {value: ' -45'}},
    words: {target: {value: '   asd'}}, zero: {target: {value: '   0'}}};
  
    const VALID_AMOUNTS = {integer: {target: {value: '  2'}},
    decimal: {target: {value: '  1.6'}}, spanishDecimal: {target: {value: '   1,7'}},
    empty: {target: {value: '  '}}};
  
    expect(manageAmountVerification(INVALID_AMOUNTS.negativeNumber)).toBe('This field cannot have a negative number');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).toBeDefined;
    expect(document.querySelector('#amount-error').innerText).toEqual('This field cannot have a negative number');
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.stringContaining('is-invalid'));
  
    expect(manageAmountVerification(VALID_AMOUNTS.integer)).toBe('The amount was verified');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
    expect(document.querySelector('#amount-error').innerText).not.toBeDefined;
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.not.stringContaining('is-invalid'));
  
    expect(manageAmountVerification(INVALID_AMOUNTS.words)).toBe('This field can only contain numbers');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).toBeDefined;
    expect(document.querySelector('#amount-error').innerText).toEqual('This field can only contain numbers');
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.stringContaining('is-invalid'));
  
    expect(manageAmountVerification(VALID_AMOUNTS.decimal)).toBe('The amount was verified');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
    expect(document.querySelector('#amount-error').innerText).not.toBeDefined;
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.not.stringContaining('is-invalid'));
  
    expect(manageAmountVerification(INVALID_AMOUNTS.zero)).toBe('This field cannot be 0');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).toBeDefined;
    expect(document.querySelector('#amount-error').innerText).toEqual('This field cannot be 0');
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.stringContaining('is-invalid'));
  
    expect(manageAmountVerification(VALID_AMOUNTS.spanishDecimal)).toBe('The amount was verified');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
    expect(document.querySelector('#amount-error').innerText).not.toBeDefined;
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.not.stringContaining('is-invalid'));
  
    expect(manageAmountVerification(VALID_AMOUNTS.empty)).toBe('The amount was verified');
  
    expect(document.querySelector('#convert-button').getAttribute('disabled')).not.toBeDefined;
    expect(document.querySelector('#amount-error').innerText).not.toBeDefined;
    expect(document.querySelector('#amountInput').getAttribute('class'))
    .toEqual(expect.not.stringContaining('is-invalid'));
  
  });
});








