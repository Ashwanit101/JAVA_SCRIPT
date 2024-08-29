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

let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

//  **********OPERATIONS********//

let value=2
let negvalue=-value
console.log(negvalue);
// arithmetic operations
console.log(2+2);
console.table([2+2,2*2,2-2,2/2,2*3,2**2,2/3,2%3]);
let str1="Hello"
let str2=" Ashwani"
let str3=str1 +str2 
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2"+2);
// if first operand is string then whole calculation takes place converting all as string
console.log(1+2+"2");
// if numbers occur before string then first  calculation takes place then both concatenate as string
console.log("1"+2+2);
console.log((3+4)*6%3); // bad practice
console.log(+true);
console.log(+"")
let num1,num2,num3;
num1=num2=num3=2+2;
console.log(num1)
let gamecounter=100
gamecounter++;
// post precedence
console.log(gamecounter)








