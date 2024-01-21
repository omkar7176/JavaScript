// Adding the two or multiple array

let compA = ['Google', 'Amazon', 'Microsoft', 'Meta']
let compB = ['Github', 'Apple', 'facebook', 'oracle']

// 1st way:  
compA.push(compB); //using push you can work in existing array.
console.log(compA);

//2nd way: 
Company = compA.concat(compB); //using the concat you have to make new variable.
console.log(Company);
// But using concat you can only concat two arrays.


//3rd way: 
//Spread Operator: using spread you can add the mutiple array with together.
let compC = ['Cisco', 'Linkedin']

let big_tech_comp = [...compA,...compB,...compC] 
console.log(big_tech_comp);








// How we can nested array in single variable

const newarr = [1,2,3,[0,9],4,5,[8,7],6,7,[6,5,4],8,9,0]
console.log(newarr.flat(Infinity));







// Check there is array or not. if there is array then print True otherwise print false.

console.log(Array.isArray("Omkar")); 
//OP:  false
// Then convert it into array
console.log(Array.from("Omkar"));
//OP: [ 'O', 'm', 'k', 'a', 'r' ]







// mutiple variable stores in single array
let emp1 = 100
let emp2 = 200
let emp3 = 300
console.log(Array.of(emp1, emp2, emp3));
// OP: [ 100, 200, 300 ]