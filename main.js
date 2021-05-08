const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const burger = document.querySelector(".burger");
const close = document.querySelector("#close");
const open = document.querySelector("#open");
const nav = document.querySelector("nav")
open.addEventListener("click",()=>{
    nav.style.display = "flex";
    open.style.display = "none";
    close.style.display ="block";
})
close.addEventListener("click",()=>{
    nav.style.display = "none";
    close.style.display = "none";
    open.style.display ="block";

})



function ValidateEmail() 
{
    const email = document.querySelector(".in");
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    email.value="";
    email.classList.remove("invalid");
    document.querySelector(".alert").style.display = "none";
  }
  else{
    email.classList.add("invalid");
    document.querySelector(".alert").style.display = "block";
  }
    
   
}



l1.addEventListener("click",()=>{
    l1.style.backgroundColor="#ed603a";
    l2.style.backgroundColor="#fff";
    l3.style.backgroundColor="#fff";
    l4.style.backgroundColor="#fff";
})
l2.addEventListener("click",()=>{
    l2.style.backgroundColor="#ed603a";
    l1.style.backgroundColor="#fff";
    l3.style.backgroundColor="#fff";
    l4.style.backgroundColor="#fff";
})
l3.addEventListener("click",()=>{
    l3.style.backgroundColor="#ed603a";
    l1.style.backgroundColor="#fff";
    l2.style.backgroundColor="#fff";
    l4.style.backgroundColor="#fff";
})
l4.addEventListener("click",()=>{
    l4.style.backgroundColor="#ed603a";
    l1.style.backgroundColor="#fff";
    l2.style.backgroundColor="#fff";
    l3.style.backgroundColor="#fff";
})
