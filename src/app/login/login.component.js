const login = document.getElementById("sub");
const username = document.getElementById("email");

username.addEventListener("keyup", () =>{
login.disabled = !username.value;
});