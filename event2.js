let h1=document.querySelector("h1");
window.addEventListener("keydown", function(data){
    if(data.key===" "){
        h1.textContent="SPC"
    }
    else{
        h1.textContent=data.key

    }
})