// creation of the singleton object
const twitter = new Object(); 
console.log(twitter);  //--> OP: {}

//Creation of Non-singleton object
const Reddit = {}
console.log(Reddit);  //--> OP: {} 

Reddit.Id = 11;
Reddit.Name = "Shon Martin"
Reddit.Age = 25
Reddit.Location = "USA"
console.log(Reddit); 
//--> OP: { Id: 11, Name: 'Shon Martin', Age: 25, Location: 'USA' }










//Some methods we can use to get the data
console.log(Object.keys(Reddit));
console.log(Object.values(Reddit));
console.log(Object.entries(Reddit));
console.log(Reddit.hasOwnProperty('isLoggedIn'));  //--> false  --> check the key is present in the Object or not
console.log(Reddit.hasOwnProperty('Location'));  //--> true











// How we can solve the nested obejcts
const Employee = {
    UserID : '11',
    Name : {
        FullName : {
            FirstName : "John",
            LastName : "Martin"
        }
    },
    Location : {
        Country_Details : {
            State_Details : {
                City_Details : {
                    Country : "India",
                    State : "Maharashtra",
                    City : "Pune"
                }
            }
        }
    }
}
console.log(Employee.Name.FullName.FirstName)
// console.log(Employee.CountryDetails.StateDetails.CityDetails.City);
console.log(Employee.Name.FullName.LastName);
console.log(Employee.Location.Country_Details.State_Details.City_Details.City);










// How we can Merge the Objects or combine the objects like concatenate

const obj1 = {1 : "Omkar", 2 : "Ram", 3 : "Shyam"}
const obj2 = {4 : "Sanket", 5: "Om", 6: "Kunal"}
const obj3 = {7 : "A", 8: "B", 9: "C"}

// 1st way: using spread operator
let result ={...obj1, ...obj2}; // this will merge both object and
console.log("Result of merging two objects is :", result);

//2nd way: Obbject.assign()
const obj4 = Object.assign({}, obj1, obj2, obj3)
// use the {} opt. but the syntax of Object assign() is target & source, so we consider the {} as target & others are source(obj1, obj2, obj3). for more info in the link below.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
console.log(obj4);

//we can also merge object using another method but in this case, the output will get in nested format --> don't use this one
let answer = {obj2, obj3}
console.log(answer)
/* OP: 
{
  obj2: { '4': 'Sanket', '5': 'Om', '6': 'Kunal' },
  obj3: { '7': 'A', '8': 'B', '9': 'C' }
}
*/









// When you get values from the database, the value comes in **array of Objects**

const Users = [
    {
        ID: "123",
        UserName : "xyz111",
        email : "xyz@google.com",
    },
    {
        ID: "123",
        UserName : "xyz111",
        email : "xyz@google.com",
    },
    {
        ID: "123",
        UserName : "xyz111",
        email : "xyz@google.com",
    },
    {
        ID: "123",
        UserName : "xyz111",
        email : "xyz@google.com",
    }
]
