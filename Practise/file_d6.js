let person ={
    Fname : "Shyam",
    Lname : "Kushwaha",
    age : 22,
    Address: {
        State : "MH",
        city : "Pune",
        Street : "tilak road"
    },
    Work : "Hybrid"
};

// Accessing the Object Properties
console.log(person.Fname);
console.log(person.Address);
console.log(person["Work"]);


// Modifying the Object Properties
person.work = "Remote";
person.age = 26
console.log(person.work);
console.log(person.age);


// Adding the new Property
person.gender = "Male";
console.log(person.gender);

// delete the Property
console.log("delete age: ", person.age);
delete person.age;


// loop:
for (let key in person){
    console.log(key+ ": "+ person[key]);
}