(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var NICKNAME = "nickname";
var LOOGED_OUT = "loggedOut";
var LOOGED_IN = "loggedIn";

if (nickname === null) {
  body.className = LOOGED_OUT;
} else {
  body.className = LOOGED_IN;
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input"); // console.log(input.value);

  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
}; //엔터를 치면 submit이 되도록한다. 


if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTNiMTQyZGEuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTklDS05BTUUiLCJMT09HRURfT1VUIiwiTE9PR0VEX0lOIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFqQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjs7QUFFQSxJQUFJTCxRQUFRLEtBQUssSUFBakIsRUFBc0I7QUFDcEJMLEVBQUFBLElBQUksQ0FBQ1csU0FBTCxHQUFpQkYsVUFBakI7QUFDRCxDQUZELE1BRUs7QUFDSFQsRUFBQUEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCRCxTQUFqQjtBQUNEOztBQUVELElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzVCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUdaLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkLENBRjRCLENBRzVCOztBQUg0QixNQUlwQmMsS0FKb0IsR0FJVkQsS0FKVSxDQUlwQkMsS0FKb0I7QUFLNUJELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQVYsRUFBQUEsWUFBWSxDQUFDVyxPQUFiLENBQXFCVCxRQUFyQixFQUErQlEsS0FBL0I7QUFDRCxDQVBELEMsQ0FRQTs7O0FBQ0EsSUFBSWIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ2UsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIik7XHJcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5jb25zdCBMT09HRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9PR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKXtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPT0dFRF9PVVQ7XHJcbn1lbHNle1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9PR0VEX0lOO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAvLyBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbn07XHJcbi8v7JeU7YSw66W8IOy5mOuptCBzdWJtaXTsnbQg65CY64+E66Gd7ZWc64ukLiBcclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG59Il19
},{}]},{},[1])