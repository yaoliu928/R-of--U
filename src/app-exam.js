import anythingIWant, { square, add } from "./utils.js";
import isSenior, { isAdult, canDrink } from "./person.js";

console.log("app.js is running!!!");
console.log(square(3));
console.log(add(120, 3));
console.log(anythingIWant(100, 87));

console.log(isAdult(9));
console.log(canDrink(90));
console.log(isSenior(59));

import validator from "validator";
console.log(validator.isEmail('test'));