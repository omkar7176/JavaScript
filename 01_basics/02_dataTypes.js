"use strict"; //treat all JS code as newer version

// alert("Hello") // this "alert" we are used in browser, not in nodejs engine. 

// console.log(3+3);
// console.log("Omkar");

let Name = "Omkar";
let msg = true;
let numb = 999999999999n;
let symbi = Symbol("Omm")
let a = null;
let state;

console.log(typeof Name);
console.log(typeof msg);
console.log(typeof numb);
console.log(typeof symbi);
console.log(typeof a);
console.log(typeof state);


console.log(typeof null); // object
console.log(typeof undefined); //undefined

// Primitive DataTypes --> Call by Value
/*
1. number => 2 to power 53
2. bigint
3. string => ""
4. boolean => true/false
5. null => standalone value
6. undefined => not defined
7. symbol => unique

*/
