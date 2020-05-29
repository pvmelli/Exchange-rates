import {initialize} from "../exchange.js";
import fixture from "./exchange.fixture.js";
import currencyList from "../../cypress/fixtures/latest_list.json";

test("Initialize currency exchange menu", () => {
    document.body.innerHTML = fixture;
    global.fetch = jest.fn().mockImplementation(
        () =>
          new Promise(() => {
            const jsonPromise = new Promise((r) => {
              r(currencyList);
            });
        })
    );

    Element.prototype.addEventListener = jest.fn();

    function getTodaysDate () {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
    
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
    
        today = yyyy+'-'+mm+'-'+dd;
    
        return today;
    };

    initialize();

    expect(Element.prototype.addEventListener).toHaveBeenCalledTimes(9);
    expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=EUR')
    expect(document.querySelector('#dateInput').getAttribute('max'))
    .toEqual(expect.stringContaining(getTodaysDate()))

});

