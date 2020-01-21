(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _socket = require("./socket");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _socket.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjZCLE1BR3JCQyxLQUhxQixHQUdYRixLQUhXLENBR3JCRSxLQUhxQjtBQUk3QiwyQkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHRCxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZZCxRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUM5QkYsU0FBUyxDQUFDZ0IsT0FBRCxFQUFVZCxRQUFWLENBRHFCO0FBQUEsQ0FBekI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRcIjtcclxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XHJcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcclxuXHJcbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XHJcbiAgICBuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJZb3VcIlxyXG4gIH06PC9zcGFuPiAke3RleHR9XHJcbiAgICBgO1xyXG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSBldmVudCA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxyXG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XHJcblxyXG5pZiAoc2VuZE1zZykge1xyXG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcclxufSJdfQ==
},{"./socket":7}],2:[function(require,module,exports){
"use strict";

require("./socket");

require("./login");

require("./notifications");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYTVkNTE0NmIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0XCI7XHJcbmltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgXCIuL3BhaW50XCI7Il19
},{"./chat":1,"./login":3,"./notifications":4,"./paint":5,"./socket":7}],3:[function(require,module,exports){
"use strict";

var _socket = require("./socket");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var NICKNAME = "nickname";
var LOOGED_OUT = "loggedOut";
var LOOGED_IN = "loggedIn";

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _socket.initSocket)(socket);
};

if (nickname === null) {
  //닉네임잉 없으면 
  body.className = LOOGED_OUT;
} else {
  //로그인 상태이면 
  body.className = LOOGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input"); // console.log(input.value);

  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOOGED_IN;
  logIn(value);
}; //엔터를 치면 submit이 되도록한다. 


if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk5JQ0tOQU1FIiwiTE9PR0VEX09VVCIsIkxPT0dFRF9JTiIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFOLFFBQVEsRUFBSTtBQUN0QixNQUFNTyxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVosSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsMEJBQVdPLE1BQVg7QUFDSCxDQUpEOztBQUtBLElBQUlQLFFBQVEsS0FBSyxJQUFqQixFQUFzQjtBQUNsQjtBQUNGTCxFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCVCxVQUFqQjtBQUNELENBSEQsTUFHSztBQUNEO0FBQ0ZULEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJSLFNBQWpCO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ04sUUFBRCxDQUFMO0FBQ0Q7O0FBR0QsSUFBTWMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxDQUFDLEVBQUk7QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkLENBRjRCLENBRzVCOztBQUg0QixNQUlwQnFCLEtBSm9CLEdBSVZELEtBSlUsQ0FJcEJDLEtBSm9CO0FBSzVCRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FqQixFQUFBQSxZQUFZLENBQUNrQixPQUFiLENBQXFCaEIsUUFBckIsRUFBK0JlLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCUixTQUFqQjtBQUNBQyxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBVEQsQyxDQVVBOzs7QUFDQSxJQUFJcEIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpO1xyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9PR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPT0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG4gICAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcclxuICAgIGluaXRTb2NrZXQoc29ja2V0KTtcclxufTtcclxuaWYgKG5pY2tuYW1lID09PSBudWxsKXtcclxuICAgIC8v64uJ64Sk7J6E7J6JIOyXhuycvOuptCBcclxuICBib2R5LmNsYXNzTmFtZSA9IExPT0dFRF9PVVQ7XHJcbn1lbHNle1xyXG4gICAgLy/roZzqt7jsnbgg7IOB7YOc7J2066m0IFxyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9PR0VEX0lOO1xyXG4gIGxvZ0luKG5pY2tuYW1lKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPT0dFRF9JTjtcclxuICBsb2dJbih2YWx1ZSk7XHJcbn07XHJcbi8v7JeU7YSw66W8IOy5mOuptCBzdWJtaXTsnbQg65CY64+E66Gd7ZWc64ukLiBcclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG59Il19
},{"./socket":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " \uCC38\uAC00\uD588\uC74C!!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " \uD1F4\uC7A5\uD588\uC74C!!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUVBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FQSDs7QUFTTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBa0JYLGdCQUFnQixXQUFJVyxRQUFKLGtDQUF1QixrQkFBdkIsQ0FBbEM7QUFBQSxDQUF0Qjs7OztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHRCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFrQlgsZ0JBQWdCLFdBQUlXLFFBQUosa0NBQXVCLGtCQUF2QixDQUFsQztBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG4gIH07XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4gZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0g7LC46rCA7ZaI7J2MISFgLCBcInJnYigwLCAxMjIsIDI1NSlcIik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT4gZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0g7Ye07J6l7ZaI7J2MISFgLCBcInJnYigyNTUsIDE0OSwgMClcIik7Il19
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _socket = require("./socket");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var control = document.getElementById("jscontrols");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _socket.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _socket.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

;

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

function handleCanvasClick() {
  if (filling) {
    // ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    fill();
    (0, _socket.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

function handleCM(event) {
  event.preventDefault();
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCanvas = enableCanvas;

var hideControls = function hideControls() {
  control.style.opacity = 0;
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  control.style.opacity = 1;
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJjb250cm9sIiwiSU5JVElBTF9DT0xPUiIsIkNBTlZBU19TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwicGFpbnRpbmciLCJmaWxsaW5nIiwic3RvcFBhaW50aW5nIiwic3RhcnRQYWludGluZyIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImNvbG9yIiwiY3VycmVudENvbG9yIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZUNvbG9yQ2xpY2siLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZU1vZGVDbGljayIsImlubmVyVGV4dCIsImZpbGwiLCJoYW5kbGVDYW52YXNDbGljayIsImhhbmRsZUNNIiwicHJldmVudERlZmF1bHQiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUJlZ2FuUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiaGFuZGxlRmlsbGVkIiwiZGlzYWJsZUNhbnZhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDYW52YXMiLCJoaWRlQ29udHJvbHMiLCJvcGFjaXR5Iiwic2hvd0NvbnRyb2xzIiwicmVzZXRDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQU1NLE9BQU8sR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWhCO0FBR0EsSUFBTU8sYUFBYSxHQUFHLFNBQXRCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUFWLE1BQU0sQ0FBQ1csS0FBUCxHQUFlRCxXQUFmO0FBQ0FWLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQkYsV0FBaEI7QUFFQVAsR0FBRyxDQUFDVSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FWLEdBQUcsQ0FBQ1csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJKLFdBQW5CLEVBQWdDQSxXQUFoQztBQUNBUCxHQUFHLENBQUNZLFdBQUosR0FBa0JOLGFBQWxCO0FBQ0FOLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQkosYUFBaEI7QUFDQU4sR0FBRyxDQUFDYSxTQUFKLEdBQWdCLEdBQWhCO0FBRUEsSUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCRixFQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNEOztBQUVELFNBQVNHLGFBQVQsR0FBeUI7QUFDdkJILEVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBRUQsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUJwQixFQUFBQSxHQUFHLENBQUNrQixTQUFKO0FBQ0FsQixFQUFBQSxHQUFHLENBQUNxQixNQUFKLENBQVdGLENBQVgsRUFBY0MsQ0FBZDtBQUNELENBSEQ7O0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQXdCO0FBQUEsTUFBakJHLEtBQWlCLHVFQUFULElBQVM7QUFDekMsTUFBSUMsWUFBWSxHQUFHeEIsR0FBRyxDQUFDWSxXQUF2Qjs7QUFDQSxNQUFJVyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQnZCLElBQUFBLEdBQUcsQ0FBQ1ksV0FBSixHQUFrQlcsS0FBbEI7QUFDRDs7QUFDRHZCLEVBQUFBLEdBQUcsQ0FBQ3lCLE1BQUosQ0FBV04sQ0FBWCxFQUFjQyxDQUFkO0FBQ0FwQixFQUFBQSxHQUFHLENBQUMwQixNQUFKO0FBQ0ExQixFQUFBQSxHQUFHLENBQUNZLFdBQUosR0FBa0JZLFlBQWxCO0FBQ0QsQ0FSRDs7QUFTQSxTQUFTRyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixNQUFNVCxDQUFDLEdBQUdTLEtBQUssQ0FBQ0MsT0FBaEI7QUFDQSxNQUFNVCxDQUFDLEdBQUdRLEtBQUssQ0FBQ0UsT0FBaEI7O0FBQ0EsTUFBSSxDQUFDaEIsUUFBTCxFQUFlO0FBQ2JJLElBQUFBLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQVQ7QUFDQSw2QkFBWVcsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNmLFNBQS9CLEVBQTBDO0FBQUVDLE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBO0FBQUwsS0FBMUM7QUFDRCxHQUhELE1BR087QUFDTEUsSUFBQUEsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosQ0FBVjtBQUNBLDZCQUFZVyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsVUFBL0IsRUFBMkM7QUFBRUgsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREEsQ0FBTDtBQUFRRyxNQUFBQSxLQUFLLEVBQUV2QixHQUFHLENBQUNZO0FBQW5CLEtBQTNDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTc0IsZ0JBQVQsQ0FBMEJOLEtBQTFCLEVBQWlDO0FBQy9CLE1BQU1MLEtBQUssR0FBR0ssS0FBSyxDQUFDTyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLGVBQWpDO0FBQ0FyQyxFQUFBQSxHQUFHLENBQUNZLFdBQUosR0FBa0JXLEtBQWxCO0FBQ0F2QixFQUFBQSxHQUFHLENBQUNVLFNBQUosR0FBZ0JhLEtBQWhCO0FBQ0Q7O0FBRUQsU0FBU2UsZUFBVCxHQUEyQjtBQUN6QixNQUFJdkIsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCQSxJQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUNBWCxJQUFBQSxJQUFJLENBQUNtQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0QsR0FIRCxNQUdPO0FBQ0x4QixJQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNBWCxJQUFBQSxJQUFJLENBQUNtQyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0Q7QUFDRjs7QUFBQTs7QUFDRCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFrQjtBQUFBLE1BQWpCakIsS0FBaUIsdUVBQVQsSUFBUztBQUM3QixNQUFJQyxZQUFZLEdBQUd4QixHQUFHLENBQUNVLFNBQXZCOztBQUNBLE1BQUlhLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCdkIsSUFBQUEsR0FBRyxDQUFDVSxTQUFKLEdBQWdCYSxLQUFoQjtBQUNEOztBQUNEdkIsRUFBQUEsR0FBRyxDQUFDVyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkosV0FBbkIsRUFBZ0NBLFdBQWhDO0FBQ0FQLEVBQUFBLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQmMsWUFBaEI7QUFDRCxDQVBEOztBQVNBLFNBQVNpQixpQkFBVCxHQUE2QjtBQUMzQixNQUFJMUIsT0FBSixFQUFhO0FBQ1g7QUFDQXlCLElBQUFBLElBQUk7QUFDSiw2QkFBWVQsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNPLElBQS9CLEVBQXFDO0FBQUVqQixNQUFBQSxLQUFLLEVBQUV2QixHQUFHLENBQUNVO0FBQWIsS0FBckM7QUFDRDtBQUNGOztBQUVELFNBQVNnQyxRQUFULENBQWtCZCxLQUFsQixFQUF5QjtBQUN2QkEsRUFBQUEsS0FBSyxDQUFDZSxjQUFOO0FBQ0Q7O0FBSURDLEtBQUssQ0FBQ0MsSUFBTixDQUFXM0MsTUFBWCxFQUFtQjRDLE9BQW5CLENBQTJCLFVBQUF2QixLQUFLO0FBQUEsU0FDOUJBLEtBQUssQ0FBQ3dCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDYixnQkFBaEMsQ0FEOEI7QUFBQSxDQUFoQzs7QUFJQSxJQUFJOUIsSUFBSixFQUFVO0FBQ1JBLEVBQUFBLElBQUksQ0FBQzJDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCVCxlQUEvQjtBQUNEOztBQUVNLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHN0IsQ0FBSCxRQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixRQUFNQSxDQUFOO0FBQUEsU0FBY0YsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBdkI7QUFBQSxDQUF4Qjs7OztBQUNBLElBQU02QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBRzlCLENBQUgsU0FBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLE1BQVNHLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFNBQXFCRCxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixFQUFPRyxLQUFQLENBQS9CO0FBQUEsQ0FBMUI7Ozs7QUFDQSxJQUFNMkIsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFFM0IsS0FBRixTQUFFQSxLQUFGO0FBQUEsU0FBYWlCLElBQUksQ0FBQ2pCLEtBQUQsQ0FBakI7QUFBQSxDQUFyQjs7OztBQUVBLElBQU00QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDakN0RCxFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixXQUEzQixFQUF3Q3pCLFdBQXhDO0FBQ0E5QixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixXQUEzQixFQUF3Q25DLGFBQXhDO0FBQ0FwQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ3BDLFlBQXRDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixZQUEzQixFQUF5Q3BDLFlBQXpDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ1gsaUJBQXBDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaEN4RCxFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ3BCLFdBQXJDO0FBQ0E5QixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQzlCLGFBQXJDO0FBQ0FwQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixTQUF4QixFQUFtQy9CLFlBQW5DO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixZQUF4QixFQUFzQy9CLFlBQXRDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ04saUJBQWpDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDL0JqRCxFQUFBQSxPQUFPLENBQUMrQixLQUFSLENBQWNtQixPQUFkLEdBQXdCLENBQXhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDL0JuRCxFQUFBQSxPQUFPLENBQUMrQixLQUFSLENBQWNtQixPQUFkLEdBQXdCLENBQXhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTWpCLElBQUksQ0FBQyxNQUFELENBQVY7QUFBQSxDQUFwQjs7OztBQUVQLElBQUkzQyxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsYUFBeEIsRUFBdUNMLFFBQXZDO0FBQ0FZLEVBQUFBLFlBQVk7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldFwiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNjb250cm9sc1wiKTtcclxuXHJcblxyXG5jb25zdCBJTklUSUFMX0NPTE9SID0gXCIjMmMyYzJjXCI7XHJcbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xyXG5cclxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XHJcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcclxuXHJcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbmN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xyXG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcclxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcclxuXHJcbmxldCBwYWludGluZyA9IGZhbHNlO1xyXG5sZXQgZmlsbGluZyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gc3RvcFBhaW50aW5nKCkge1xyXG4gIHBhaW50aW5nID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0UGFpbnRpbmcoKSB7XHJcbiAgcGFpbnRpbmcgPSB0cnVlO1xyXG59XHJcblxyXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKHgsIHkpO1xyXG59O1xyXG5cclxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5LCBjb2xvciA9IG51bGwpID0+IHtcclxuICBsZXQgY3VycmVudENvbG9yID0gY3R4LnN0cm9rZVN0eWxlO1xyXG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgfVxyXG4gIGN0eC5saW5lVG8oeCwgeSk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcclxufTtcclxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcclxuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcclxuICBpZiAoIXBhaW50aW5nKSB7XHJcbiAgICBiZWdpblBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0cm9rZVBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwgeyB4LCB5LCBjb2xvcjogY3R4LnN0cm9rZVN0eWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ29sb3JDbGljayhldmVudCkge1xyXG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vZGVDbGljaygpIHtcclxuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgZmlsbGluZyA9IGZhbHNlO1xyXG4gICAgbW9kZS5pbm5lclRleHQgPSBcIkZpbGxcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsbGluZyA9IHRydWU7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcclxuICB9XHJcbn07XHJcbmNvbnN0IGZpbGwgPSAoY29sb3IgPSBudWxsKSA9PiB7XHJcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XHJcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgfVxyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYW52YXNDbGljaygpIHtcclxuICBpZiAoZmlsbGluZykge1xyXG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbiAgICBmaWxsKCk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuZmlsbCwgeyBjb2xvcjogY3R4LmZpbGxTdHlsZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNNKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuXHJcblxyXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaChjb2xvciA9PlxyXG4gIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKVxyXG4pO1xyXG5cclxuaWYgKG1vZGUpIHtcclxuICBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNb2RlQ2xpY2spO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiBiZWdpblBhdGgoeCwgeSk7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpOyBcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7Y29sb3J9KSA9PiBmaWxsKGNvbG9yKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNhYmxlQ2FudmFzID0gKCkgPT4ge1xyXG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVuYWJsZUNhbnZhcyA9ICgpID0+IHtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlQ29udHJvbHMgPSAoKSA9PntcclxuICBjb250cm9sLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0NvbnRyb2xzID0gKCkgPT57XHJcbiAgY29udHJvbC5zdHlsZS5vcGFjaXR5ID0gMTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIilcclxuXHJcbmlmIChjYW52YXMpIHtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcclxuICBoaWRlQ29udHJvbHMoKTtcclxufSJdfQ==
},{"./socket":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _paint = require("./paint");

var board = document.getElementById("jsPBoard");
var wordNotifi = document.getElementById("jsword");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, " : ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var setNotifi = function setNotifi(text) {
  wordNotifi.innerText = "";
  wordNotifi.innerText = text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotifi("");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showControls)();
  wordNotifi.innerText = "\uBB38\uC81C \uB2E8\uC5B4\uB294 ".concat(word, "\uC785\uB2C8\uB2E4. ");
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded() {
  setNotifi("게임 종료!!");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _paint.resetCanvas)();
};

exports.handleGameEnded = handleGameEnded;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid29yZE5vdGlmaSIsImFkZFBsYXllcnMiLCJwbGF5ZXJzIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInBsYXllciIsInBsYXllckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwibmlja25hbWUiLCJwb2ludHMiLCJhcHBlbmRDaGlsZCIsInNldE5vdGlmaSIsInRleHQiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJzb2NrZXRzIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJoYW5kbGVMZWFkZXJOb3RpZiIsIndvcmQiLCJoYW5kbGVHYW1lRW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbkI7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsT0FBTyxFQUFJO0FBQzFCTCxFQUFBQSxLQUFLLENBQUNNLFNBQU4sR0FBa0IsRUFBbEI7QUFDQUQsRUFBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLFVBQUFDLE1BQU0sRUFBSTtBQUN0QixRQUFNQyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixNQUF2QixDQUF0QjtBQUNBRCxJQUFBQSxhQUFhLENBQUNFLFNBQWQsYUFBNkJILE1BQU0sQ0FBQ0ksUUFBcEMsZ0JBQWtESixNQUFNLENBQUNLLE1BQXpEO0FBQ0FiLElBQUFBLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkwsYUFBbEI7QUFDSCxHQUpEO0FBS0gsQ0FQRDs7QUFTQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxJQUFJLEVBQUk7QUFDdEJiLEVBQUFBLFVBQVUsQ0FBQ1EsU0FBWCxHQUF1QixFQUF2QjtBQUNBUixFQUFBQSxVQUFVLENBQUNRLFNBQVgsR0FBdUJLLElBQXZCO0FBQ0gsQ0FIRDs7QUFLTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJkLFVBQVUsQ0FBRWMsT0FBRixDQUEzQjtBQUFBLENBQTNCOzs7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ25DSixFQUFBQSxTQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0E7QUFDQTtBQUNILENBSk07Ozs7QUFNQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBQVk7QUFBQSxNQUFWQyxJQUFVLFNBQVZBLElBQVU7QUFDekM7QUFDQTtBQUNBbEIsRUFBQUEsVUFBVSxDQUFDUSxTQUFYLDZDQUFpQ1UsSUFBakM7QUFDSCxDQUpNOzs7O0FBTUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDUCxFQUFBQSxTQUFTLENBQUMsU0FBRCxDQUFUO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FMTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc2FibGVDYW52YXMsIGhpZGVDb250cm9scywgZW5hYmxlQ2FudmFzLCBzaG93Q29udHJvbHMsIHJlc2V0Q2FudmFzIH0gZnJvbSBcIi4vcGFpbnRcIjtcclxuXHJcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcclxuY29uc3Qgd29yZE5vdGlmaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianN3b3JkXCIpO1xyXG5cclxuY29uc3QgYWRkUGxheWVycyA9IHBsYXllcnMgPT4ge1xyXG4gICAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBwbGF5ZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5uaWNrbmFtZX0gOiAke3BsYXllci5wb2ludHN9YDtcclxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJFbGVtZW50KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0Tm90aWZpID0gdGV4dCA9PiB7XHJcbiAgICB3b3JkTm90aWZpLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICB3b3JkTm90aWZpLmlubmVyVGV4dCA9IHRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVQbGF5ZXJVcGRhdGUgPSAoeyBzb2NrZXRzIH0pID0+IGFkZFBsYXllcnMoIHNvY2tldHMgKTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9ICgpID0+IHtcclxuICAgIHNldE5vdGlmaShcIlwiKTtcclxuICAgIGRpc2FibGVDYW52YXMoKTtcclxuICAgIGhpZGVDb250cm9scygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxlYWRlck5vdGlmID0gKHt3b3JkfSkgPT4ge1xyXG4gICAgZW5hYmxlQ2FudmFzKCk7XHJcbiAgICBzaG93Q29udHJvbHMoKTtcclxuICAgIHdvcmROb3RpZmkuaW5uZXJUZXh0ID0gYOusuOygnCDri6jslrTripQgJHt3b3JkfeyeheuLiOuLpC4gYDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kZWQgPSAoKSA9PiB7XHJcbiAgICBzZXROb3RpZmkoXCLqsozsnoQg7KKF66OMISFcIik7XHJcbiAgICBkaXNhYmxlQ2FudmFzKCk7XHJcbiAgICBoaWRlQ29udHJvbHMoKTtcclxuICAgIHJlc2V0Q2FudmFzKCk7XHJcbn0iXX0=
},{"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
  socket.on(events.gameStarted, _players.handleGameStarted);
  socket.on(events.leaderNotif, _players.handleLeaderNotif);
  socket.on(events.gameEnded, _players.handleGameEnded);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJpbml0U29ja2V0IiwiYVNvY2tldCIsIndpbmRvdyIsImV2ZW50cyIsIm9uIiwibmV3VXNlciIsImhhbmRsZU5ld1VzZXIiLCJkaXNjb25uZWN0ZWQiLCJoYW5kbGVEaXNjb25uZWN0ZWQiLCJuZXdNc2ciLCJoYW5kbGVOZXdNZXNzYWdlIiwiYmVnYW5QYXRoIiwiaGFuZGxlQmVnYW5QYXRoIiwic3Ryb2tlZFBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImZpbGxlZCIsImhhbmRsZUZpbGxlZCIsInBsYXllclVwZGF0ZSIsImhhbmRsZVBsYXllclVwZGF0ZSIsImdhbWVTdGFydGVkIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJsZWFkZXJOb3RpZiIsImhhbmRsZUxlYWRlck5vdGlmIiwiZ2FtZUVuZGVkIiwiaGFuZGxlR2FtZUVuZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFHQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFBQSxnQkFDbEJDLE1BRGtCO0FBQUEsTUFDNUJDLE1BRDRCLFdBQzVCQSxNQUQ0QjtBQUduQ0wsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsc0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixXQUFqQixFQUE4QkMsMEJBQTlCO0FBQ0F4QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDb0IsU0FBakIsRUFBNEJDLHdCQUE1QjtBQUNILENBZE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGhhbmRsZU5ld01lc3NhZ2UgfSBmcm9tIFwiLi9jaGF0XCI7XHJcbmltcG9ydCB7IGhhbmRsZUJlZ2FuUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgsIGhhbmRsZUZpbGxlZCB9IGZyb20gXCIuL3BhaW50XCI7XHJcbmltcG9ydCB7IGhhbmRsZVBsYXllclVwZGF0ZSwgaGFuZGxlR2FtZVN0YXJ0ZWQsIGhhbmRsZUxlYWRlck5vdGlmLCBoYW5kbGVHYW1lRW5kZWQgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldCA9IChhU29ja2V0KSA9PiB7XHJcbiAgICBjb25zdCB7ZXZlbnRzfSA9IHdpbmRvdztcclxuXHJcbiAgICBzb2NrZXQgPSBhU29ja2V0O1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcclxuICAgIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcclxuICAgIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lU3RhcnRlZCwgaGFuZGxlR2FtZVN0YXJ0ZWQpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJOb3RpZiwgaGFuZGxlTGVhZGVyTm90aWYpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lRW5kZWQsIGhhbmRsZUdhbWVFbmRlZCk7XHJcbn1cclxuIl19
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])