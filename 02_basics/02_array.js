  const marvelheroes=["Thor","Ironman","Captain America"];
  const dcheroes=["Superman","Batman","Aquaman"];
   // push operations pushes whole array into array
//   marvelheroes.push(dcheroes);
// //   console.log(marvelheroes);
  
  const allheroes=marvelheroes.concat(dcheroes) // it concatenate both and give a new array
//   console.log(allheroes)

  const allnewheroes=[...marvelheroes,...dcheroes] // interesting  

  // spread method (it spread array like glass fall )

//   console.log(allnewheroes)
const anotherarray=[1,2,3,[4,5,6,[53,[4,2,4]]]]; // interesting

//flat method
const realanotherarray=anotherarray.flat(Infinity)// we can also give depth inspite of infinity

// console.log(realanotherarray)
console.log(Array.isArray("Ashwani"))
console.log(Array.from("Ashwani")) // interesting
// it convert string or anything to array



console.log(Array.from({name:"hitesh"})) // MOST INTERESTING 
//because it gives empty array when unable to make array because we have not specified whether the key or value which has to be used to make array

let  score1=100
let score2=200
let score3=300
const key="Ashwani"

console.log(Array.of(score1,score2,score3,key)); // .of is also used to make array by combining different elements

// completed!!!!!
