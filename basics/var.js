const accountId = 14453 //cannot be changed
let accountEmail = "sawaizkhan2003@gmail.com"
var accountPassword = "12345"
accountCity = "Chennai"
let accountState;
// accountId = 2 not allowed
accountEmail = "mk4914@srmist.edu.in"
accountPassword = "334444"
accountCity = "korba"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])