console.log("person.js is running");

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 18;
const isSenior = (age) => age >= 60;

export { isAdult, canDrink, isSenior as default };