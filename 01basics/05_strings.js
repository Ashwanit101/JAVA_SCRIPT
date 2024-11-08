const name="Ashwani"
const repocount=50
console.log(name+repocount+"Hello");
// use backsticks (`) instead of "" quote
 console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
 
 const gameName = new String("Ashwani-01-t")
 console.log(gameName[0]);
  // using prototypes of string
  console.log(gameName.length);
  console.log(gameName.toUpperCase());
  console.log(gameName.charAt(2));
  console.log(gameName.indexOf('t'));

  const newString= gameName.substring(0,4);
  // starting index and size including that index
  console.log(newString);
  // using slice we can use negative indexing and here 12 is index which is not included
  const anotherString= gameName.slice(-10,12);
  console.log(anotherString);
  const newStringOne="  Ashwani "
  console.log(newStringOne);
  // using trim we remove blank spaces in string
  console.log(newStringOne.trim());
const url="https://ashwani.%01com"
// replace any single or set of  character of string  with another one
console.log(url.replace('%01','*'));
// includes tell whether it is present in string or not
console.log(url.includes('%01'));
console.log(gameName.split('-'));

// completed
  
  
  

