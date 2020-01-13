(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./socket");

require("./login");

require("./notifications");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWE4ZWE1MWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0XCI7XHJcbmltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbiJdfQ==
},{"./login":2,"./notifications":3,"./socket":4}],2:[function(require,module,exports){
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
},{"./socket":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewuser = void 0;
var notification = document.getElementById("jsNotifications");

var handleNewuser = function handleNewuser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname, "참가");
}; // window.socket.on(window.events.newuser, handleNewuser);


exports.handleNewuser = handleNewuser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZU5ld3VzZXIiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjs7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQ3pDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQUFxQixJQUFyQjtBQUNILENBRk0sQyxDQUlQIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmaWNhdGlvbnNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3dXNlciA9ICh7bmlja25hbWV9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuaWNrbmFtZSxcIuywuOqwgFwiKTtcclxufVxyXG5cclxuLy8gd2luZG93LnNvY2tldC5vbih3aW5kb3cuZXZlbnRzLm5ld3VzZXIsIGhhbmRsZU5ld3VzZXIpOyJdfQ==
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(window.events.newuser, _notifications.handleNewuser);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJ1cGRhdGVTb2NrZXQiLCJhU29ja2V0IiwiaW5pdFNvY2tldCIsIndpbmRvdyIsImV2ZW50cyIsIm9uIiwibmV3dXNlciIsImhhbmRsZU5ld3VzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE9BQUQ7QUFBQSxTQUFjSCxNQUFNLEdBQUdHLE9BQXZCO0FBQUEsQ0FBckI7Ozs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRCxPQUFELEVBQWE7QUFBQSxnQkFDbEJFLE1BRGtCO0FBQUEsTUFDNUJDLE1BRDRCLFdBQzVCQSxNQUQ0QjtBQUVuQ0osRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxPQUF6QixFQUFrQ0MsNEJBQWxDO0FBQ0gsQ0FKTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld3VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XHJcblxyXG5sZXQgc29ja2V0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gKGFTb2NrZXQpID0+IChzb2NrZXQgPSBhU29ja2V0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcclxuICAgIGNvbnN0IHtldmVudHN9ID0gd2luZG93O1xyXG4gICAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xyXG4gICAgYVNvY2tldC5vbih3aW5kb3cuZXZlbnRzLm5ld3VzZXIsIGhhbmRsZU5ld3VzZXIpO1xyXG59XHJcbiJdfQ==
},{"./notifications":3}]},{},[1])