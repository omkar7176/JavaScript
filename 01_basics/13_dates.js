// Dates
// - When you declare the date, the date is counting starts counting from the 1 Jan 1970. 



let myDate = new Date();
console.log(typeof(mydate)); //--> Interview based Question ? -Answer-> Object
console.log(myDate.toString());
// OP: toString() --> Sun Jan 21 2024 14:59:17 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // best to use it
console.log(myDate.toLocaleDateString()); // best to use it
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString()); // best to use it





// ** Set the Date **
let NewDate = new Date(2024, 0, 17) // best to use it
 //months are starting from "0th" in JS because it is array & array counting from 0.
console.log(NewDate.toDateString()); //--> OP: Wed Jan 17 2024
console.log(NewDate.toLocaleString());




// ** Set the Date in specific standard - YYYY-MM-DD **

let SetDate = new Date("2024-01-17")
console.log(SetDate.toDateString()); //--> OP: Wed Jan 17 2024





// Get mili-sec from 1 Jan 1970

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// OP: showing the miliseconds from 1 Jan 1970 to today -ans-> 1705239863023

//convert those mili-sec into second
console.log(Date.now()/1000);  //--> OP: 1705239922.793
//    1705239922.793 it havethe decimal points, so we have another method
console.log(Math.floor(Date.now()/1000)); //--> Perfect Answer
// answer: 1705240040




 // ** get the just month, 

 let Thedate = new Date()
 console.log(Thedate.getDate());  //--> 14
 console.log(Thedate.getDay());  //--> 0
 console.log(Thedate.getMonth());  //--> 0 
 console.log(Thedate.getFullYear());  //--> 2024 




 // select the time & date as per your choice

