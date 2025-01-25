const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
  // ****IMPORTANT****
 //('this' tells us the current context); 
 // In browser this is by default window object
//  while in codespaces it is empty object


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // error it does not works like in objects to fetch an element of function.
// }
          // ARROW FUNCTION
const chai =  () => {
    let username = "hitesh"
    console.log(this); // IMP : this does not work both in normal functoin and arrow function
}


// chai()
      // if we take curly braces we have to write return otherwise not
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
       //...implicit return....
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // to return object requires parenthesis


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()