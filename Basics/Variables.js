const accountId = 145524
let accountEmail = "asad@googlemail.com"
var accountPassword = "asad2345"
accountCity = "Kadiri"
let accountState;

// accountCity = "Kadiri" //It is not preferable to assign use "let"

// accountId = 52 //not allowed

// {
//     // curly braces is a scope
// }

accountEmail = "asad@email.com"
accountPassword ="123456"
accountCity = "Hyderabad"

// console.log(accountId)

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])