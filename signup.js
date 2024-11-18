let s=document.querySelector("#password");
let s1=document.querySelector("#password1");
let uname=document.querySelector("#uname");
console.log(uname.value);
let btn=document.querySelector("button");
const register=()=>{
    if(s.value!==s1.value || uname.value=="")
        {
          s.style.innerText="";
          s1.style.innerText=""; 
          if(s.value!==s1.value)
          alert("password mismatched");
        else
          alert("enter all details");
        }
    else if(s.value===s1.value)
        {
    let object={"name":uname.value.trim(),"password":s.value.trim()};
    console.log(object);
    localStorage.setItem("login",JSON.stringify(object));
    alert("Registration Successful");
    window.location.href="login.html";

    }
}
btn.addEventListener("click",register);