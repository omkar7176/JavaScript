// console.log(null > 0);  //--> false
// console.log(null == 0)  //--> false
// console.log(null >=0);  //--> true, bcoz JS convert the null into 0 & OP is true.

// console.log("2" === 2);
// console.log("Ten" === 10);
// console.log(10 === 10);

let Id = null
let pass = Number(Id)
// console.log(typeof pass);
// console.log(pass);

let c = "212sn"
let d = Number(c)
// console.log(typeof d)
// console.log(d);
// OP: NaN

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
// const biggie = 56454664545654n;
// console.log(typeof(biggie));

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
