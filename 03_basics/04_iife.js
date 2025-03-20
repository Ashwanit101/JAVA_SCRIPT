// Immediately Invoked Function Expressions (IIFE)
   // it is used to remove global scope pollution and to faster execute database files
 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is used to separate two iife and () is written after named or unnamed function to execute them 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // we can also pass parameter as usual 