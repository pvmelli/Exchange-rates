import { addInitialEventListeners } from "./ui/general.js";
import {
    fillCurrencySelect,
    setMaxDateOfInput
} from "./ui/form.js";

export function initialize() {

    window.onload = () => {
        addInitialEventListeners();
        fillCurrencySelect();
        setMaxDateOfInput();
        
    }
    //add initial event listeners
    // add currencies
};