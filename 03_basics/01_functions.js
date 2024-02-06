function MyName(){
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R");
}
// MyName --> it jsut reference
// MyName();  --> () execution of Program



function Addition(a, b){
    console.log(a+b);
}
Addition(5, 3)

// Note Very Very IMP: 
// Parameters: 
// when you are delcare the parameters in "(a, b)" is called parameters.

// Arguments: 
// when you are mention those values at execute time then is called arguments. (3, 4)


// Example 1:
function Addition(a, b){
    console.log(a+b);
}
const result = Addition(5, 2);
console.log("Result: ", result);


// Example 2:
function Addition(a, b){
    let result = a+b
    // console.log("Omkar");
    return result 
    console.log("Omkar");  //-- it will never print because after the "return" anything will not print in any case.
}
const result = Addition(10, 10);
console.log("Result: ", result);
// OP:
// Omkar
// Result:  20



//Example 3:
function Addition(a, b){
    return a+b
}
const result = Addition(7, 7)
console.log("Result: ",result);


// Example 4:
function LoginUserName(username){
    return `${username} is Logged in....`
}
console.log(LoginUserName("Omkar")); //OP: Omkar is logged in...
console.log(LoginUserName(" ")); //OP:  is logged in...
console.log(LoginUserName()); //OP: undefined is logged in...

console.log(LoginUserName("Shyam"));  //OP: Shyam is logged in...



// Example 6:
function UserLoggedOut(username = "Sam"){
    if(!username){
        console.log("Please enter the username: ");
        return
    }
    return `${username} is Logged out`
    return
}
console.log(UserLoggedOut("Omkar"));