// singleton
// We can make the object using constructor method through in below
    //  **   Object.create  **  --> using this method the singleton has been created.

// Objects Literals: 
// the keys in function actually stored in the string format like "Location" & "full Name" in below.

const JSUser = {
    Name : "Omkar",
    Age : 21,
    "Country" : "India",
    Location : "Mumbai",
    email : "omkar@google.com",
    isLoggedIn : true,
    "full_Name" : "Omkar Tupere"
}
//  to print the value in function there are two ways
// 1st way:
console.log(JSUser.Name);

// 2nd Way: --> good way to use that
console.log(JSUser["Location"]);
console.log(JSUser["full_Name"]);
console.log(JSUser["Age"]);










// // IMP : Interview based question
// How the actual Symbol Primitive_data_type used in the function.

const logo = Symbol("Octocat")
const JSClient = {
    Name : "John",
    Age : 25,
    // logo : "Octocat",
    [logo] : "Octocat",  // --> Correct way to use Symbol in function & then check typeof
    Country: "USA",
    "Location" : "Atlanta", 
    email : "john@google.com",
    isLoggedIn : true,
    "full Name" : "John Martin"
}
console.log(typeof JSClient["logo"]);  // ✔ correct
console.log(JSClient); 
// OP:  [Symbol(Octocat)]: 'Octocat'









// how we can freeze the value in the function keys.
// using the freeze the value cannot change, it will freeze. value is not changeable.
JSClient.email = "john.microsoft.com"
Object.freeze(JSClient);
JSClient.email = "john.github.com"
console.log(JSClient);










// We can use the funtion as variable. like we can as variable.
Example :
JSClient.greetings = function(){
    console.log("Hello JSClient");
}
console.log(JSClient.greetings); //--> OP: [Function (anonymous)]   
console.log(JSClient.greetings()); // --> correct way --> OP: Hello JSClient

// Another Example:
JSClient.greetings = function(){
    console.log(`Hello JSClient, ${this.Name}`);
} 
console.log(JSClient.greetings());

// if we used ${Name} in function, it gives you error --> "ReferenceError: Name is not defined",
// for give the reference in function we used "this" keyword.
