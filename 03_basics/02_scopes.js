// {} : It is called as Scope, if the {} is comes with the any function or with if-else block then it is a scope.

var c =2000 // Global Scope
let a = 500

if (true){    // block of scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);  -->error --> we can't access these properties outside of the block of scope.
// console.log(b);  -->error --> we can't access these properties outside of the block of scope.
console.log("Inner c: ", c);  //OP: 30
console.log("Outer a: ", a);

// OP: Inner c:  30
//     Outer a:  500