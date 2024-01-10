let userOne = {
    email : "xyz@google.com",
    name : "John Andre",
    address : "India",
    comp_name : "Google",
    ID : 234433244
}
let userTwo = userOne

userTwo.email = "abc.google.com";
userTwo.name = "rocky";
userTwo.comp_name = "Microsoft";

console.log(userTwo);
console.log(userTwo);