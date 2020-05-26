let fetchPolyfill;

before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';

    cy.request(polyfillUrl)
    .then((response) => {
        fetchPolyfill = response.body;
    });

    cy.visit('http://127.0.0.1:5500', {
        onBeforeLoad(contentWindow) {
            delete contentWindow.fetch;
            contentWindow.eval(fetchPolyfill);
            contentWindow.fetch = contentWindow.unfetch;
        },
    });
});

describe ('Verifies the header is working', () => {
    it ('Verifies header collapsibles work', () => {
        
        const NUMBER_OF_HEADER_LINKS = ['01', '02', '03', '04'];

        NUMBER_OF_HEADER_LINKS.forEach((number) => {
            cy.get(`#link-${number}-collapsible`).should('not.be.visible');

            cy.get(`#link-${number}`).click();
            cy.get(`#link-${number}-collapsible`).should('be.visible')

            cy.get('#exchange-box').click('bottomRight')
            cy.get(`#link-${number}-collapsible`).should('not.be.visible');

            cy.get(`#link-${number}`).click();
            cy.get(`#link-${number}-collapsible`).should('be.visible');
        });
    });

    it ('Verifies the Log In button and form are working', () => {
        cy.get('#login-modal').should('not.be.visible');

        cy.get('#login-button').click();
        cy.get('#login-modal').should('be.visible');

        cy.get('#close-modal-button').click()
        cy.get('#login-modal').should('not.be.visible');

    });

});

describe ('Verifies the form is working', () => {
    const CURRENCIES = ['CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF',
    'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK',
    'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK',
    'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR', 'EUR'];

    it ('Verifies the currency list is loaded from the API', () => {
        cy.server();
        cy.route('https://api.exchangeratesapi.io/latest?base=EUR', 'fixture:latest_list')
        .as('obtainCurrencyList');

        const CURRENCY_NUMBER = 33;

        CURRENCIES.forEach((currency) => {
            cy.get('#select-menu').find(`[value=${currency}]`);
        })

        cy.get('option').should('have.length', CURRENCY_NUMBER);
    });

    it ('Verifies the select menu is working', () => {
        CURRENCIES.forEach((currency) => {
            cy.get('#select-menu').select(`${currency}`);
            cy.get('#select-menu').its('value').should('be',`${currency}`);
        });
    });

    it ('Verifies the date input validation is working', () => {
        cy.get('#dateInput').type('1998-01-01');
        cy.get('#convert-button').should('be.disabled');

        cy.get('#dateInput').type('2005-01-01');
        cy.get('#convert-button').should('be.enabled');

        function getFutureDate () {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1;
            let yyyy = (today.getFullYear()) + 2;
        
            if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
        
            today = yyyy+'-'+mm+'-'+dd;
        
            return today;
        };

        cy.get('#dateInput').type(getFutureDate());
        cy.get('#convert-button').should('be.disabled');

        cy.get('#dateInput').type('2005-01-01');
        cy.get('#convert-button').should('be.enabled');
    });

    it('Verifies the amount validation is working', () => {

        cy.get('#amountInput').type('   0');
        cy.get('#amount-error').should('have.text', 'This field cannot be 0');
        cy.get('#amountInput').should('have.class', 'is-invalid');
        cy.get('#convert-button').should('be.disabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('   ');
        cy.get('#amount-error').should('not.be.visible');
        cy.get('#amountInput').should('not.have.class', 'is-invalid');
        cy.get('#convert-button').should('be.enabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('-1.7');
        cy.get('#amount-error').should('have.text', 'This field cannot have a negative number');
        cy.get('#amountInput').should('have.class', 'is-invalid');
        cy.get('#convert-button').should('be.disabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('1,7');
        cy.get('#amount-error').should('not.be.visible');
        cy.get('#amountInput').should('not.have.class', 'is-invalid');
        cy.get('#convert-button').should('be.enabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('-50');
        cy.get('#amount-error').should('have.text', 'This field cannot have a negative number');
        cy.get('#amountInput').should('have.class', 'is-invalid');
        cy.get('#convert-button').should('be.disabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('1.7');
        cy.get('#amount-error').should('not.be.visible');
        cy.get('#amountInput').should('not.have.class', 'is-invalid');
        cy.get('#convert-button').should('be.enabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('   sgdsgsdg');
        cy.get('#amount-error').should('have.text', 'This field can only contain numbers');
        cy.get('#amountInput').should('have.class', 'is-invalid');
        cy.get('#convert-button').should('be.disabled');
        cy.get('#amountInput').clear();

        cy.get('#amountInput').type('1');
        cy.get('#amount-error').should('not.be.visible');
        cy.get('#amountInput').should('not.have.class', 'is-invalid');
        cy.get('#convert-button').should('be.enabled');
        cy.get('#amountInput').clear();
    });


});

describe ('Verifies the exchange rates can be fetched and displayed', () => {

    it ('Verifies the form can be submitted with valid input', () => {
        cy.get('#select-menu').select('USD');
        cy.get('#dateInput').clear();
        cy.get('#dateInput').type('2020-02-14');
        cy.get('#amountInput').clear();

        cy.get('#convert-button').should('be.enabled');
        cy.get('#convert-button').click();

        cy.get('#conversion-box').should('be.visible');
    });

    it ('Verifies the data has been fetched and displayed', () => {
        cy.server();
        cy.route('https://api.exchangeratesapi.io/2020-02-14?base=USD', 'fixture:2020-02-14-USD')
        .as('obtainExchangeRates');

        const CURRENCY_NUMBER = 33;

        const RATES = {"CAD":1.3247555802,"HKD":7.7673860911,"ISK":126.8216196274,"PHP":50.5497140749,
        "DKK":6.891071758,"HUF":309.6015495296,"CZK":22.899833979,"GBP":0.7674598783,"RON":4.3980815348,
        "SEK":9.6923999262,"IDR":13715.9933591588,"INR":71.4499169895,"BRL":4.3282604685,"RUB":63.5598598045,
        "HRK":6.8705035971,"JPY":109.8598044641,"THB":31.2193322265,"CHF":0.9814609851,"EUR":0.9223390518,
        "MYR":4.1400110681,"BGN":1.8039107176,"TRY":6.0629957572,"CNY":6.987363955,"NOK":9.2471868659,
        "NZD":1.555432577,"ZAR":14.8624792474,"USD":1.0,"MXN":18.5949086884,"SGD":1.3918096292,
        "AUD":1.4896698026,"ILS":3.428979893,"KRW":1184.0527577938,"PLN":3.9190186312};

        cy.get('#conversion-box').find('h2').should('have.text', 'Exchange rates of 2020-02-14').and('be.visible');

        cy.get('#conversion-box').find('thead').find('th').contains('1 USD').should('be.visible');

        Object.entries(RATES).forEach((rate) => {
            cy.get('#conversion-box').find('tbody').find('th').contains(`1 ${rate[0]}`).should('be.visible');
            cy.get('#conversion-box').find('tbody').find('th').siblings('td').contains(`${rate[1].toFixed(2)}`).should('be.visible');
        });

        cy.get('#conversion-box').find('tbody').find('tr').should('have.length', CURRENCY_NUMBER);

    });

});

describe ('Verifies the exchange rates can be multiplied if the user specifies an amount', () => {

    it ('Verifies the form can be submitted with valid input', () => {
        cy.get('#select-menu').select('USD');
        cy.get('#dateInput').clear();
        cy.get('#dateInput').type('2020-02-14');
        cy.get('#amountInput').clear();
        cy.get('#amountInput').type('200');

        cy.get('#convert-button').should('be.enabled');
        cy.get('#convert-button').click();

        cy.get('#conversion-box').should('be.visible');
    });

    it ('Verifies the data has been fetched and displayed', () => {
        cy.server();
        cy.route('https://api.exchangeratesapi.io/2020-02-14?base=USD', 'fixture:2020-02-14-USD')
        .as('obtainExchangeRates');

        const CURRENCY_NUMBER = 33;

        const RATES = {"CAD":1.3247555802,"HKD":7.7673860911,"ISK":126.8216196274,"PHP":50.5497140749,
        "DKK":6.891071758,"HUF":309.6015495296,"CZK":22.899833979,"GBP":0.7674598783,"RON":4.3980815348,
        "SEK":9.6923999262,"IDR":13715.9933591588,"INR":71.4499169895,"BRL":4.3282604685,"RUB":63.5598598045,
        "HRK":6.8705035971,"JPY":109.8598044641,"THB":31.2193322265,"CHF":0.9814609851,"EUR":0.9223390518,
        "MYR":4.1400110681,"BGN":1.8039107176,"TRY":6.0629957572,"CNY":6.987363955,"NOK":9.2471868659,
        "NZD":1.555432577,"ZAR":14.8624792474,"USD":1.0,"MXN":18.5949086884,"SGD":1.3918096292,
        "AUD":1.4896698026,"ILS":3.428979893,"KRW":1184.0527577938,"PLN":3.9190186312};

        cy.get('#conversion-box').find('h2').should('have.text', 'Exchange rates of 2020-02-14').and('be.visible');

        cy.get('#conversion-box').find('thead').find('th').contains('200 USD').should('be.visible');

        Object.entries(RATES).forEach((rate) => {
            cy.get('#conversion-box').find('tbody').find('th').contains(`1 ${rate[0]}`).should('be.visible');
            cy.get('#conversion-box').find('tbody').find('th').siblings('td').contains(`${(rate[1]*200).toFixed(2)}`).should('be.visible');
        });

        cy.get('#conversion-box').find('tbody').find('tr').should('have.length', CURRENCY_NUMBER);

    });

});


