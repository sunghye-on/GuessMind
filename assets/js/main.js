const body = document.querySelector("body");
const nickname = localStorage.getItem("nickname");

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
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}