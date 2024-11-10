 
 // array 
 // IN JS array can contain multiple type values  and are resizeble
 const myArr=[0,1,2,3,4,5]
 const myHeros=[" Shaktimaan "," Batman "]
 const myArr2= new Array(1,2,3,4)
 console.log(myArr[0]);
  
 
    // !!!Array Methods !!!
 
  myArr.push(6)
  myArr.push(7)
  myArr.pop()
  console.log(myArr);
  // unshift add element to the front of array
  myArr.unshift(9)
   // shift delete element from front
  myArr.shift()
  console.log(myArr);
  
  console.log(myArr.includes(98)); // return boolean
  console.log(myArr.indexOf(3));
 
  const newArr=myArr.join()
  // join basically join all elements by comma and make it a STRING
  console.log(newArr);
 
 //   !!!!!IMP : SLICE , SPLICE !!!!!!!
 console.log("A",myArr);//original one
 // slice
 // slice does not make changes in original copy(deep copy)
 const arr1=myArr.slice(1,5)// 3 not includes
 console.log(arr1);
 
 //splice
  // splice make changes in original copy(shallow copy) , it removes elements from original copy
 const arr2=myArr.splice(1,5)
 console.log("B",myArr);
 console.log(arr2);
 //  part2 next file
 
  // completed.................
 
  
 
 