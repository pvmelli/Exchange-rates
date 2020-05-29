import { addInitialEventListeners } from "./ui/general.js";
import {
    fillCurrencySelect,
    setMaxDateOfInput
} from "./ui/form.js";

export function initialize() {
    addInitialEventListeners();
    fillCurrencySelect();
    setMaxDateOfInput();        
};