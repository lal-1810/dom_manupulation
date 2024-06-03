//const box=document.querySelector("div")
/*box.onmouseover=(e)=>{
   // alert("hey!what are you doing?")
    console.log("ouch!!!!")
    console.log(e);
    
}*/
//box.addEventListener("click",()=>{console.log("box was clicked")})
const btn=document.querySelector('button');
let mode="light";
btn.addEventListener('click',()=>{

    if (mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";

    }
    else{
    mode="light";
    document.querySelector("body").style.backgroundColor="white";
}
})
const input=document.querySelector('input')
input.addEventListener("keydown",(evt)=>{
console.log(evt.key)
})


    
