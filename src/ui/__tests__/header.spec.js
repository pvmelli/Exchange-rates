import {addHeaderEventListeners, manageHeaderLinkClick,
    deactivateLogInForm, activateLogInForm, closeMenuesWhenClickingOutside} from '../header.js';
import fixture from "../../__tests__/exchange.fixture.js";

describe ("Header setup", ()=> {
    document.body.innerHTML = fixture;

    test("Header links have been assigned event listeners", () => {
        Element.prototype.addEventListener = jest.fn();

        addHeaderEventListeners()

        expect(Element.prototype.addEventListener).toHaveBeenCalledTimes(6);

        expect(Element.prototype.addEventListener)
        .toHaveBeenCalledWith(expect.stringContaining('click'), expect.anything());
    });

});

describe ("Header menues management", () => {
    document.body.innerHTML = fixture;
    test("Header menues are displayed when clicked and hidden when clicking other menues", () => {

        expect(document.querySelector('#link-01').getAttribute('class'))
        .toEqual(expect.not.stringContaining('active'))
        expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
        .toEqual(expect.not.stringContaining('displayed'))
        expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
        .toEqual(expect.stringContaining('not-display'))

        const MENU01 = document.querySelector('#link-01');

        expect(manageHeaderLinkClick({target: MENU01})).toBe('Header link click has been managed');
            expect(document.querySelector('#link-01').getAttribute('class'))
            .toEqual(expect.stringContaining('active'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.stringContaining('displayed'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.not.stringContaining('not-display'))
        
        const MENU02 = document.querySelector('#link-02');

        expect(manageHeaderLinkClick({target: MENU02})).toBe('Header link click has been managed');
            expect(document.querySelector('#link-02').getAttribute('class'))
            .toEqual(expect.stringContaining('active'))
            expect(document.querySelector('#link-02-collapsible').getAttribute('class'))
            .toEqual(expect.stringContaining('displayed'))
            expect(document.querySelector('#link-02-collapsible').getAttribute('class'))
            .toEqual(expect.not.stringContaining('not-display'))

            expect(document.querySelector('#link-01').getAttribute('class'))
            .toEqual(expect.not.stringContaining('active'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.not.stringContaining('displayed'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.stringContaining('not-display'))
    });

    test("Header menues are hidden when clicking outside of them", () => {
        expect(document.querySelector('#link-01').getAttribute('class'))
        .toEqual(expect.not.stringContaining('active'))
        expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
        .toEqual(expect.not.stringContaining('displayed'))
        expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
        .toEqual(expect.stringContaining('not-display'))

        const MENU01 = document.querySelector('#link-01');

        expect(manageHeaderLinkClick({target: MENU01})).toBe('Header link click has been managed');
            expect(document.querySelector('#link-01').getAttribute('class'))
            .toEqual(expect.stringContaining('active'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.stringContaining('displayed'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.not.stringContaining('not-display'))


        const INSIDE_ELEMENT = document.querySelector('#link-01-collapsible')
        const OUTSIDE_ELEMENT = document.querySelector('#info-box')

        expect(closeMenuesWhenClickingOutside({target: INSIDE_ELEMENT})).toBe('The user clicked inside the collapsible menu');
            expect(document.querySelector('#link-01').getAttribute('class'))
            .toEqual(expect.stringContaining('active'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.stringContaining('displayed'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.not.stringContaining('not-display'))

        expect(closeMenuesWhenClickingOutside({target: OUTSIDE_ELEMENT})).toBe('The user clicked outside the collapsible menu');
            expect(document.querySelector('#link-01').getAttribute('class'))
            .toEqual(expect.not.stringContaining('active'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.not.stringContaining('displayed'))
            expect(document.querySelector('#link-01-collapsible').getAttribute('class'))
            .toEqual(expect.stringContaining('not-display'))
    });

    test('Login form is displayed when login button is clicked and hidden when the X button is clicked', () => {
        document.body.innerHTML = fixture;
        expect(document.querySelector('#login-modal').getAttribute('class'))
        .toEqual(expect.stringContaining('not-display'));
    
        expect(activateLogInForm()).toBe('The login form is now visible')
            expect(document.querySelector('#login-modal').getAttribute('class'))
            .toEqual(expect.not.stringContaining('not-display'));
    
        expect(deactivateLogInForm()).toBe('There was a modal being displayed, it has now been hidden')
            expect(document.querySelector('#login-modal').getAttribute('class'))
            .toEqual(expect.stringContaining('not-display'));
    
        expect(deactivateLogInForm()).toBe('There was no modal being displayed')
            expect(document.querySelector('#login-modal').getAttribute('class'))
            .toEqual(expect.stringContaining('not-display'));
    
    });
});



