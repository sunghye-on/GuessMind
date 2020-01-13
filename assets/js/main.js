const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const nickname = localStorage.getItem("nickname");
const NICKNAME = "nickname";
const LOOGED_OUT = "loggedOut";
const LOOGED_IN = "loggedIn";

if (nickname === null){
  body.className = LOOGED_OUT;
}else{
  body.className = LOOGED_IN;
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  // console.log(input.value);
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
};
//엔터를 치면 submit이 되도록한다. 
if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}