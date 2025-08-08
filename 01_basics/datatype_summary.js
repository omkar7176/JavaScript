// Primitive --> Call by value

// 7 Types: String, Number, Boolean, Symbol, null, undefined, BigInt.

// Non-Primitive --> Call by Reference

// Array, Objects, Functions

// 1. Array
const lang = ["English", "Hindi", "Marathi", "Punjabi"];
console.log(lang);
console.log(typeof lang);



// 2. Objects

let Obj = {
    Name: "Omkar",
    Age:19
}
console.log(Obj);
console.log(typeof Obj);


// 3. Functions

const myFunction = function(){
    console.log("Hello World");
}
myFunction();
console.log(typeof myFunction);  //OP: function but we call them object function
