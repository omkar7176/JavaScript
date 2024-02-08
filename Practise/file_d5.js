// Function

// Example 1:
function square(number){
    return number*number
}
let check = square(10);
console.log("Square of the number is: ", check);




// Example 2:
function fullName(fname, Lname){
    return fname+Lname;
}
let result = fullName("Omkar ", "T")
console.log(result);






// Example 3:
let greet = function(name){
    console.log("Hello "+name+"!");
}
greet("Omkar")





// Example 4:
function example(){
    let message = "This is my message."
    console.log(message);
}
example()



// Example 5:
function keyboard(fname, lname){
    return fname+lname;
    // console.log(result);
}
let result = keyboard("Omkar ", "Tupere");
console.log(result);
// console.log('Omkar', 'Tupere');