let s=document.querySelector("#password");
let uname=document.querySelector("#uname");
let object=JSON.parse(localStorage.getItem("login"));
let btn=document.querySelector("button");
console.log(object);
console.log(object.name)
const login=()=>{
if(uname.value===object.name && s.value===object.password)
{
    alert("login successful");
    window.location.href="index.html";
}
else{
    alert("Login failed");
}
}
btn.addEventListener("click",login);
