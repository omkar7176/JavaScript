const accountId = 12
let accountEmail = "omkar@gmail.com"
var accountPass = "1234"
accountCity = "Pune"

/*
Prefer not use var
because of issue in block scope and functional scope
*/
let accountMoney; // value is undefined

accountEmail = "ram@google.com"
accountPass = "7899"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPass, accountCity, accountMoney])