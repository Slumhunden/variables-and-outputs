"use strict";

let number = 0;

window.addEventListener("load", start);

function start() {
    document.querySelector("#btn-increment").addEventListener("click", incrementNumber);
    document.querySelector("#btn-decrement").addEventListener("click", decrementNumber);
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
}