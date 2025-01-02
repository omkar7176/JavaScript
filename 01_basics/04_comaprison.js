console.log(null > 0);  //--> false
console.log(null == 0)  //--> false
console.log(null >=0);  //--> true, bcoz JS convert the null into 0 & OP is true.

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 < 1);
console.log(2 == 1);

// For TypeScript
console.log("2" > 1); // --> true, that's why use the typescript, it doesn't allow you to compare to different datatype. 
console.log("02" > 1);  // --> true

// console.log("2" === 2);  // --> false. " === " is used for the check the datatype
// console.log("Ten" === 10); // --> false
// console.log(10 === 10); // --> true

let Id = null
let pass = Number(Id)
// console.log(typeof pass);
// console.log(pass);
// OP: number
//   : 0

let c = "212sn"
let d = Number(c)
// console.log(typeof d)
// console.log(d);
// OP: number
//   : Nan

let score = undefined
// console.log(typeof(score));
// OP: undefined

let pen = undefined
let pencil = Number(pen)
// console.log(typeof pencil)
// console.log(pencil)
// OP: number
//     Nan


const temp = null;
// console.log(typeof(temp)); 
// OP: Object
// const biggie = 56454664545654n;
// console.log(typeof(biggie));
// OP: bigint

const  a = ["omkar", "ram", "shyam", "harkirat", "kunal"]


let myFunction = function(){
    console.log("Hello World");
}

let Obj = {
    name : "omkar",
    age : 21,
    city :"Pune"
}
console.log(typeof(Obj));
