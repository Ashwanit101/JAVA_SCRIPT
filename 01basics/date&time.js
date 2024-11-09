 //Dates
 let myDate=new Date();
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof(myDate));
// let mycreatedDate=new Date(2023,0,23);// here counting of month start from 0 indexing

// let mycreatedDate=new Date(2024,8,2,5,6);// here 5 and 6 will be considered for hour and min
let mycreatedDate=new Date("01-12-2024");
//  console.log(mycreatedDate.toLocaleString());

// !!!!!IMPORTANT!!!!
// in quizes where comparison is required of time (in milliseconds)
 let myTimeStamp=Date.now();

//  console.log(myTimeStamp);
//  console.log(mycreatedDate.getTime())
 // how to convert millisec to sec
//  console.log(Math.floor(Date.now()/1000));
 
 let newDate=new Date();
 console.log(newDate);
 console.log(newDate.getMonth()+1);//because month indexing start from 0
 console.log(newDate.getDay());

 // `${newDate.getDay() and the time }`
  newDate.toLocaleString('default',{
    weekday:"long",
 }) 

 
 