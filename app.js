"use strict";

let number = 0;
let message;

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}

function incrementNumber() {
  number += 1;
  console.log(number);
  displayNumber();
}

function decrementNumber() {
  number -= 1;
  console.log(number);
  displayNumber();
}

function displayNumber() {
    document.querySelector("#number").textContent = number;
    if (number < 10){
        message = "Hit that one more time";
    } else {
        message = "Don't hit the button";
    }
    document.querySelector("#message").textContent = message;
}
let num = 5;
console.log(num);
if (num >= 5) {
  console.log("tallet er større eller lig med 5");
} else {
  console.log("tallet er mindre end 5");
}
let fullName = "Hanne";
if (fullName == "Hanne");
console.log("Ja det er Hanne!");
