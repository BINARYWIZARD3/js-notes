//declaration
let arr=new Array();
arr=[1, 2, 3, 4]

// indexing from 0



//to add new element


arr[2]=12;
console.log(arr[2])



//arrays methods=>  push, pop, shift, unshift, splice, slice, reverse, sort , map, filter, find, reduce, some, every


//push
 let A=[0, 1, 2, 5]
 A.push(3000);

 //output will be  [0, 1, 2, 5, 3000]

//pop it will remove the last element.

//shift
let B=[0, 1, 2, 5]
 B.shift();
 //output
 // [1, 2, 5]

 //unshift
let C=[0, 1, 2, 5]
 C.unshift(0);
 //output
 // [0, 0, 1, 2, 5]
   C.splice(2,1);
   //C.splice(from whic index,how may elements);


//splice

//slice  it returns the new array same syntax as a splice
C.reverse();
//reverse
//it will reverse the array

//sort it will always take as a function
let D=[0,4,2,6,1];
let sr= D.sort(function(a,b){
  return a-b;//ascending order
  return a-b;//descending order
});


//foreach

D.forEach(function(v){
  console.log(v)
});





