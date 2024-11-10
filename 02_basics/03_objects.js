// Remember:singleton is formed when we create object by:Object.create  (using constructor)

// Object creation  By using :
         // object literals

const mysymbol=Symbol("key1")
const Jsuser={
    // here all key are strings which can be written without ""
    name:"Ashwani",
    "Fullname":"Ashwani Tiwari",
    age:20,
    // symbols are defined in objects using brackets[]
    [mysymbol]:"key234",
    location:"lucknow",
    email:"ashwani01@gmail.com"
    ,
    islogged:"false",
    lastlogin:["Tuesday","Saturday"]
}
// we can access element of object by . and []
console.log(Jsuser.email);
console.log(Jsuser["email"])
console.log(Jsuser["Fullname"]) // full name can only be accessed using []

// symbols are accessed using []
console.log(Jsuser[mysymbol])

       // Changes in object
Jsuser.email="ashwanit123@googl.com"



// INTERESTING
Object.freeze(Jsuser)// it is used to restrict any changes in object

Jsuser.email="ASHWANISD@rediffmail.com"
console.log(Jsuser)


         // Including function in object

Jsuser.greeting =function(){
    console.log("Jai Hanuman");
}
console.log(Jsuser.greeting())
Jsuser.greetingTwo=function(){
    console.log(`Jai Hanuman ,${this.name}`); // elements of same objects are accessed using this.email or this.name
}
console.log(Jsuser.greetingTwo())

           // completed !!!!!