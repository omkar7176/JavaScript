const score=400;
console.log(score);

const balance = new Number(200)
console.log(balance);
// console.log(typeof(balance));

console.log(balance.toString().length); //--> 3 : because there are 3 numbers 
// console.log(typeof(balance));

console.log(balance.toFixed(2));  // --> mostly used in E-commerce website
// OP: 200.00

const otherNumber = 12.9932
console.log(otherNumber.toPrecision(2)); // IMP Method asked in interview
// OP: 13-- it counts the round figure number

const cash = 100000;
console.log(cash.toLocaleString('en-IN'));
// it by default set as US standard so set the indian currency
// OP: by default ans is 100,000.
// OP: set 'en-IN' ans is 1,00,000

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

