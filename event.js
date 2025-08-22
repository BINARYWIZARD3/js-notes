/*
let h1=document.querySelector("h1");
h1.addEventListener("click", function(){
    h1.style.color="red";
});
  for double click use (dblclick)
*/


let inp=document.querySelector("input");
inp.addEventListener("input", function(evt){
  if(evt.data !==null){
    console.log(evt.data);
  }
  
});



let ch=document.querySelector("select")
let dev=document.querySelector("#device")
ch.addEventListener("change", function(evt){
  // to show in console
  console.log(evt.target.value);

  // to show in frontend
  dev.textContent=`${evt.target.value} device selected`;
  

});




