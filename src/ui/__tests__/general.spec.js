import fixture from "../../__tests__/exchange.fixture.js";
import {manageHeaderLinkClick} from '../header.js';
import {addInitialEventListeners, manageClicksOutsideElements} from '../general.js';

describe ("General setup", () => {
    document.body.innerHTML = fixture;
    test("Initial event listeners were assigned", () => {
        Element.prototype.addEventListener = jest.fn();

        expect(addInitialEventListeners()).toBe('All initial event listeners have been assigned');

        expect(Element.prototype.addEventListener).toHaveBeenCalledTimes(9);

        expect(Element.prototype.addEventListener.mock.calls).toEqual([
            [expect.stringContaining('click'), expect.anything()],
            [expect.stringContaining('click'), expect.anything()],
            [expect.stringContaining('click'), expect.anything()],
            [expect.stringContaining('click'), expect.anything()],
            [expect.stringContaining('click'), expect.anything()],
            [expect.stringContaining('click'), expect.anything()],
            [expect.stringContaining('input'), expect.anything()],
            [expect.stringContaining('input'), expect.anything()],
            [expect.stringContaining('click'), expect.anything()],
          ]);
    });

});
