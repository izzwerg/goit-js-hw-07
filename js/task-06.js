function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let inputForm = document.querySelector('input');
let createButton = document.querySelector('[data-create]');
let destroyButton = document.querySelector('[data-destroy]');
let outputArea = document.querySelector('#boxes');


console.log(outputArea)