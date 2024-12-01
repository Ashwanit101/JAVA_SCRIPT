 function saymyName(){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("W")
    console.log("A")
    console.log("N")
    console.log("I")
 }
saymyName()
function addtwonums(num1,num2){
    return num1+num2
}
// console.log(addtwonums(3,6))
const result=addtwonums(4,7)
console.log("Result",result)

function loginUserMessage(username="Ashwani")
{
    // it will give by default ashwani on not giving any input otherwise it will overwrite
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Himanshu"));

 // !!!!!!IMPORTANT!!!!!
 // ... is used as REST OPERATOR 
//  (it is used to convert different elements into array form)
 function calculateprice(val1,val2,...num1){
    return num1
 }
 console.log(calculateprice(200,400,499,599,699)
 );
 

 // passing object in a function

 const user={
    username:"Ashwani",
    prices:200
 }
 function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
 }
// handleobject(user)
 
// directly pass object
handleobject({
    username:"Himanshu",
    prices:399
})
// passing array in function
const newArray=[200,400,500,390]
function returnsecondval(anyarray){
    return anyarray[1]
}
console.log(returnsecondval(newArray));

// CAN directly pass array
console.log(returnsecondval([200,400,500,600,700,800])) 
