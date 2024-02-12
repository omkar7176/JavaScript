let lang = ["C++", "Java", "Python", "Go"]
console.log(lang);
console.log(typeof(lang));
console.log(lang[1]);


let check = new Array(11, 12, 13, 14, 15, 16)
console.log(check);
console.log(check[3]);


let newArray = new Array(51,52, 53, 54, 55)
console.log(newArray);

// newArray.push(60);
// console.log(newArray);

// newArray.pop();
// console.log(newArray);

newArray.unshift(100);
console.log(newArray);

newArray.shift();
console.log(newArray);


console.log(newArray.includes("Omkar"));

const names = ("Omkar", "Suraj", "John" ,"Jaesg");
console.log(names.join());
console.log(names);