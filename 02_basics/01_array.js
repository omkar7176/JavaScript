// Array: The collection of mutiple types of elements store in single variable.

// Create the array :

// 1st way
let score = [5,6,7,8,9,10];  //--> [ 5, 6, 7, 8, 9, 10 ]
console.log(score);
console.log(typeof(score)); //--> object

// 2nd way
let temp = new Array(10,11,12,13,14)
console.log(temp);  // --> [ 10, 11, 12, 13, 14 ]
console.log(typeof rank);  //--> object


// create thta new on for the array methods

const myarr = [21, 22, 23, 24, 25]
console.log(myarr);

// Array_Methods

// 1. push(): It is used to add one or more elements to an array object. --> push(element)

myarr.push(99);
console.log(myarr);
// OP: [ 21, 22, 23, 24, 25, 99 ]




// 2. pop(): it automatically removes last element from array.

myarr.pop();
console.log(myarr);
// OP: [21, 22, 23, 24, 25]





// 3. unshift(): This method adds new item to the start of an array.

myarr.unshift(51)
console.log(myarr);
// OP: [ 51, 21, 22, 23, 24, 25 ]
// cons of unshift(): it change the index of all elements 




//4. shift(): this method remove the first element from an array.
myarr.shift();
console.log(myarr);
// OP: [ 21, 22, 23, 24, 25 ]





//5. includes(): it checks the value is in the array or not, if yes the OP is true otherwise false.

console.log(myarr.includes("Omkar"));
// OP: false





//6. join(): it converts the all elements in the array into the string.

// array output is always in = [1,2,3,4,5]
// After the using join output is = 1,2,3,4,5
// typeof join is : string

// 1st way:

const rank = myarr.join()
console.log(rank);
console.log(typeof rank);
// OP: string

//2nd way:
const newarr = [1,2,3,4,5,6,7,8,9,0]
console.log(newarr.join());
console.log(typeof newarr);
//OP: object





// 7. slice() & splice()

// a. slice(): slice returns a piece of the array but it doesn't affect the original array. 

let lang = ['Java', 'Python', 'JS', 'TS', 'C++']
console.log(lang.slice(1,4));
//OP: [ 'Python', 'JS', 'TS' ]


//b. splice():
    // splice changes the original array by removing values and returns the affected on the original array.

let name = ['Omkar', 'Ram', 'Shyam', 'John', 'Sanket']
console.log(name.splice(2));  //--> [ 'Shyam', 'John', 'Sanket' ]
console.log(name); //--> [ 'Omkar', 'Ram' ]

