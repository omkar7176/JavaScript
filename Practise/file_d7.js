// *** Arrays in JS ***

let fruits = ["Apple", "Pineapple", "Grapes", "Mango"]
console.log(fruits[1]); //accessing the first elements in array.

fruits[2] = "Banana"; // modifying the value from the array.
console.log(fruits);

fruits.pop();  //removing the elements
fruits.push("Strawberry"); // adding the new elements 
console.log(fruits);

console.log(fruits.length);



let fruits = ["Apple", "Pineapple", "Grapes", "Mango"];
console.log(fruits);

let staticArray = [1,2,3,4,5,6,7];
staticArray.push(9);   // Adding the elements
staticArray.pop();    // remove the element
console.log(staticArray);
/* OP: [
  1, 2, 3, 4,
  5, 6, 7
] */




let sparseArray = []; // Array with undefined elements
sparseArray[0] = 10;
sparseArray[1] = 20;
console.log(sparseArray);
//OP: [ 10, 20 ]



let intArray = new Int32Array(5); // predefined word Int32Array
intArray[0] = 15;
console.log(intArray);
// OP: Int32Array(5) [ 15, 0, 0, 0, 0 ]




function egfunction(){
    console.log(arguments[0]);
};
egfunction(11);
// OP: 11