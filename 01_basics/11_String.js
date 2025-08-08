// The concatenation of the two strings use those modern methods.
let StudFname = "Mahesh";
let StudLname = "Jogi";

//The modern way to concatenation of the two Strings

console.log(`The Student name is ${StudFname} & his surname is ${StudLname}`);

// Strings methods - The Strings are very powerful in any language, to make the master in the
//                   strings, learn about the string methods.
// Use the String as Objects

let Name = new String("Omkar");
console.log(Name);
console.log(typeof(Name)); // object but it store in the stack bcoz it is primitive data type.

const studName = new String("Omkar");
console.log(studName.charAt(2)); // OP: k

// METHODS
// 1. length
const empName = new String("Omkar");
const empGame = empName.length;
console.log(empGame);

//2.includes
// syntax --> string.includes(searchvalue, start searching from that position)
let str = "Welcome in the JavaScript";
let check = str.includes("the", 11);
console.log(check);
// The OP will get in the true/false value

// 3. startswith() & endswith()
// both methods are case sensitive

let line  = "Sunday Night Plans";
console.log(line.startsWith('S'));
console.log(line.endsWith('s'));

// 4. indexof()

let sentence = "Hello EveryOne, my name is omkar, X owner is his friend";
console.log(sentence.indexOf('X'));
console.log(sentence.indexOf('is'));


// 5. slice()
// Syntax --> string.slice(startingIndex, endingIndex);

let browser = "FirefoxMozilla";
console.log(browser.slice(4, 10));

// 6. toLowerCase() & toUpperCase()
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// 7. replace()
const old = "mozilla";
const updated = old.replace("moz", "van");
console.log(updated); // "vanilla"
console.log(old); // "mozilla"

// 8. replaceAll()

let quote = "To okay or not to be okay, be okay, its okay";
let boat = quote.replaceAll("okay", "code")
console.log(boat);  //To code or not to be code, be code, its code
