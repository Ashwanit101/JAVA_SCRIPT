let score="33abc"
console.log(typeof score)
console.log(typeof (score)) // same as above
//   Typeconversion
let ValueInNumber=Number(score)
console.log(typeof ValueInNumber)
 console.log(ValueInNumber)

// "33"=>33
// "33abc"=>NaN=>NOT A NUMBER
// null=> 0
//  undefined=> NaN
// "Hitesh"=>NaN

let isloggined=undefined
let BooleanIsLoggined=Boolean(isloggined)
console.log(typeof BooleanIsLoggined)
console.log(BooleanIsLoggined)
// 0=>false ,1=>true
// ""=>false
// " Ashwani"=> true
// null=>false
// undefined=>false

let someNumber="33"
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)