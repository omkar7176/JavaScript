// "this" keyword is used for the to showing the current context in the object.
// The "this" keyword is not working in the function OP is "undefined" & it will work with objects.


// Basic Example:
const user = {
    username: "Omkar",
    price : 800,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
    }
}
user.welcomeMessage(); // OP: Omkar, welcome to website.
user.username = "Sam"
user.welcomeMessage(); // OP: Sam, welcome to website.

// *** OP: Omkar, welcome to website.
// {
//     username: 'Omkar',
//     price: 800,
//     welcomeMessage: [Function: welcomeMessage]
//   }
//   Sam, welcome to website.
//   {
//     username: 'Sam',
//     price: 800,
//     welcomeMessage: [Function: welcomeMessage]
//   }  ***


// Example 2:
const user = {
    username: "Omkar",
    price : 800,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}
console.log(this);

// OP: {}



//Example 3:
function chai(){
    let username = "Omkar"
    console.log(this.username);
}
chai()

// OP: undefined


//Example 4:
const user = function chai(){
    let username = "Omkar"
    console.log(this.username);
}
console.log(user);

// OP: [Function: chai]



//Example 5:
const user = () => {
    let username = "Omkar"
    console.log(this.username);
}
console.log(user);

// OP: [Function: user]








// ** Arrow Function
// Syntax: () => {}

// Example1: basics
const user = (num1, num2) => {
    return num1+num2
}
console.log(user(10, 20));

// OP: 30
//Explicit return: when we use the return keyword, then it is explicit return type. above example.

//   -- if we use the curly braces {}, there is need to write "return" type in code in above example 1 in arrow function.






// Implicit return : There is no need to use {} in the function in the first line. means we assum there is automatically typed to add the return type.

// Example 2:  
const user = (num1, num2) => num1+num2
console.log(user(10, 40));
// OP:
const user = (num1, num2) => (num1+num2)
console.log(user(50, 50));
//   -- if we are not use the curly braces, there is need of return type in code.




const user = (num1, num2) => ({username: "Omkar"})
console.log(user(3,4));

// OP: { username: 'Omkar' }