const score=400;
console.log(score);

const balance = new Number(200)
console.log(balance);
// console.log(typeof(balance));

console.log(balance.toString().length); //--> 3 : because there are 3 digit. 
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

// ** Math functions **
// Math Library in JavaScript
console.log(Math);
console.log(typeof(Math))
// OP: object



// abs function ---> will give you the absolute value
console.log(Math.abs(-8));  //--> it makes the negative numb into positive numb but it will not convert +ve numbers into -ve.
// OP: 8

// round function
console.log(Math.round(3.3));   //--> OP: 3
console.log(Math.round(5.7));   //-->OP: 6
console.log(Math.round(4.5));   //--> OP: 5

// Other functions

console.log(Math.ceil(9.2));   //-->OP: 10 -> always show higher value, if 9.1 ans is 10
console.log(Math.floor(8.7));   //--> OP: 8 -> always show lower value
console.log(Math.min(23,45,67,12,34,4)); //--> 4
console.log(Math.max(23,45,67,12,34,4)); //--> 67 f
