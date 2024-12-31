// let score = "Omkar";
// let scoree = 25;



// let score = "15abcd";  --> it will show type number but the actual print the value = NaN
// let score = null;    ---> show the value 0
// let score = undefined; ---> NaN 
// let score = "15"; correct answer
// let score = true ---> 1 ; if false 0.


// console.log(typeof(score));

// let valueNumber = Number(score);
// console.log(typeof(valueNumber))

// console.log(valueNumber);
console.log("----------------------------------------------->");

let score = "33abcd";
// score = null; => if value is null
// score = undefined; => if value is undefined
console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber);
console.log(valueIntNumber);

// "33" => 33
// "33abcd" => NaN
// true => 1; false => 0

console.log("----------------------------------------------->");

let isLoggedIn = 1;

let BooleanLoggedIn = Boolean(isLoggedIn)
console.log(typeof BooleanLoggedIn);
console.log(BooleanLoggedIn);

console.log("----------------------------------------------->");

let Numb = 34;

let StringConvey = String(Numb)
console.log(StringConvey);
console.log(typeof StringConvey);
