// functions -> a bloc of code that get executed when we call it.

/*
function dance(){
    console.log("dance")
    console.log("dance")
    console.log("dance")
    console.log("dance")
}
dance();
*/

//if arguments are more we need to create equal paprameters to get rid of it we use rest...
/*
function abcd(...val){
console.log(val)
}
abcd(1,2,3,4,5,6,7,8);
*/


// fat arrow function

let fnc=(hey) => {
    console.log(hey)
}
fnc(abc);



//dynamic function


function dance(chacha){
    console.log(`${chacha} naach rha hai`)
}
let a=ghoda;
dance(a);
// other function calling with different args



//arguments and parameters
//parameters
function add(val1, val2){
    console.log(val1+val2)
}
add(11,22);  //arguments



// agar argument s koi value nhi ayi hai to parameters automatically undefined hojayega

function addd(val1, val2){
    console.log(val1, val2)
}
addd();

//output  =>   undefined undefined

//or

function adddd(val1, val2){
    console.log(val1+val2)
}
adddd();

//output => NaN not a number.

//so

function addddd(val1=0, val2=0){
    console.log(val1+val2)
}
addddd();
//if no arguments are given then parameter defined values will be taken.

//if args given then the function will run normally.



