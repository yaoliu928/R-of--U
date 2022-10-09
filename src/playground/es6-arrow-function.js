const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};
const getFirstName2 = (fullName) => fullName.split(" ")[0];
console.log(getFirstName2("Angela Liu"));

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}
console.log(multiplier.multiply());

