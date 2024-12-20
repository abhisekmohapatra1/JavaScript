const accountId = 11223
let accountName = "Abhisek"
var accountEmail = "abhisek@gmail.com"
accountCity = "Bhubaneswar"

/*
prefer not to use var because of issue in block scope and functional scope 
*/

// accountId = 11111 --- this is not allowed 

console.log(accountId);

accountName = "Abinash"
accountEmail = "abinash@gmail.com"
accountCity = "Bangalore"

console.table([accountId, accountName, accountEmail, accountCity])