//var c = 300  it is not defined in a block space therefore we donot usually use it 
let a = 300
if (true) { 
    // while let and const acts in specified block space
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// GLOBAL scope can be accessed within other scope but local scope cannot be accessed globally

// console.log(a);
// console.log(b);
// console.log(c);


//   NESTED SCOPE
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); it is outside two functin therefore cannot accessed

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //wrong // same concept of above function
}

// console.log(username); //wrong// same concept of above function


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// concept of hoisting
addTwo(5) // wrong give error becuase here we defined function by taking a variable and we called it before declaration
const addTwo = function(num){
    return num + 2
}