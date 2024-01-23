// creation of the singleton object
const twitter = new Object(); 
console.log(twitter);  //--> OP: {}

//Creation of Non-singleton object
const Reddit = {}
Reddit.Id = 11;
Reddit.Name = "Shon Martin"
Reddit.Age = 25
Reddit.Location = "USA"
console.log(Reddit); //--> OP: {}










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