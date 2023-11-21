import { addInitialEventListeners } from "./ui/general.js";
import {
    fillCurrencySelect
} from "./ui/form.js";

export function initialize() {
    addInitialEventListeners();
    fillCurrencySelect();      
};