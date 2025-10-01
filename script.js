const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sing-in");
const btnSignUp = document.getElementById("btn-sing-up");

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});