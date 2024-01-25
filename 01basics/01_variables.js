const AccountId=1234566
let AccountPassword="1234"
var AccountEmail="ashwani@google.com"
AccountCity="Kanpur"
let AccountState
// We generally use let(for variables) and const(for constants ) 
// AccountId=546898486
// constant cant be changed
AccountPassword="3524"
AccountEmail="Ashwani@gmail.com"
AccountCity="Kanpur"

/*
  Note: Prefer not to use var
  because of use in block scope and functional scope
*/
console.log(AccountId)
console.table([AccountId,AccountPassword,AccountCity,AccountEmail,AccountState])