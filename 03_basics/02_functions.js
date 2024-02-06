// When we don't know how parameters is needed because the arguments is given by the user, so user
//  will add the more & more arguments then we don't how much paramenters is needed to declare
// the solution is (...) rest operator. 
// IMP: rest and spread operator are same [...], but we differtiate them on the use cases.


// Example 1
function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200, 500, 700));
// OP: --> without ... --> 200
// OP: --> with ... --> [ 200, 500, 700 ]



// Example 2
function CalculateCartPrice(val1, val2, ...numb1){
    return numb1
}
console.log(CalculateCartPrice(10,20,30,40,50));
// OP: va1=10, val2=20, num1=[30,40,50]









// ***** IMP-->  How we can pass the object in the function. *****
// 1st Way:
const user = {
    username: "Omkar",
    product: "Maths-book",
    price:500 
}
function handleObject(getArray){
    console.log(`The user name is ${getArray.username} & the ${getArray.product} price is ${getArray.price}.`);
}
handleObject(user)
// OP: The user name is Omkar & the Maths-book price is 500.




// 2nd Way:
function handleObject(getArray){
    console.log(`The ID is ${getArray.userID} and name is ${getArray.userName}`);
}

handleObject({
    userID: 1112,
    userName: "Shyam"
})
// The ID is 1112 and name is Shyam.









// ***** IMP-->  How we can acces the array values using the function. *****
const myNewArray = [100, 200, 300]

function getValues(getArray){
    return getArray[1]
}
console.log(getValues(myNewArray));