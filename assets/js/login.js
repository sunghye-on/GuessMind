const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const nickname = localStorage.getItem("nickname");
const NICKNAME = "nickname";
const LOOGED_OUT = "loggedOut";
const LOOGED_IN = "loggedIn";

const logIn = nickname => {
    window.socket = io("/");
    window.socket.emit(window.events.setNickname, { nickname });
};
if (nickname === null){
    //닉네임잉 없으면 
  body.className = LOOGED_OUT;
}else{
    //로그인 상태이면 
  body.className = LOOGED_IN;
  logIn(nickname);
}


const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  // console.log(input.value);
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOOGED_IN;
  logIn(value);
};
//엔터를 치면 submit이 되도록한다. 
if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}