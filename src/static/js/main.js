(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var LOOGED_OUT = "loggedOut";
var LOOGED_IN = "loggedIn";

if (nickname === null) {
  body.className = LOOGED_OUT;
} else {
  body.className = LOOGED_IN;
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWNhNTM0MC5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTE9PR0VEX09VVCIsIkxPT0dFRF9JTiIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxvZ2luRm9ybSIsInZhbHVlIiwic2V0SXRlbSIsIk5JQ0tOQU1FIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBakI7QUFFQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7O0FBRUEsSUFBSUosUUFBUSxLQUFLLElBQWpCLEVBQXNCO0FBQ3BCSCxFQUFBQSxJQUFJLENBQUNRLFNBQUwsR0FBaUJGLFVBQWpCO0FBQ0QsQ0FGRCxNQUVLO0FBQ0hOLEVBQUFBLElBQUksQ0FBQ1EsU0FBTCxHQUFpQkQsU0FBakI7QUFDRDs7QUFFRCxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUM1QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxTQUFTLENBQUNYLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUY0QixNQUdwQlksS0FIb0IsR0FHVkYsS0FIVSxDQUdwQkUsS0FIb0I7QUFJNUJGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVYsRUFBQUEsWUFBWSxDQUFDVyxPQUFiLENBQXFCQyxRQUFyQixFQUErQkYsS0FBL0I7QUFDRCxDQU5EOztBQVFBLElBQUlELFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNJLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDUixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpO1xyXG5cclxuY29uc3QgTE9PR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPT0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmlmIChuaWNrbmFtZSA9PT0gbnVsbCl7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT09HRURfT1VUO1xyXG59ZWxzZXtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPT0dFRF9JTjtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn0iXX0=
},{}]},{},[1])