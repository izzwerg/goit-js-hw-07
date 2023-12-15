function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let inputForm = document.querySelector('input');
let createButton = document.querySelector('[data-create]');
let destroyButton = document.querySelector('[data-destroy]');
let outputArea = document.querySelector('#boxes');

createButton.addEventListener('click', valueCheck);

function valueCheck() {
  let newValue = inputForm.value;
  if (newValue >= 1 && newValue <= 100) {
    createBoxes(newValue);
  }
}

function createBoxes(amount) {
  let boxSize = 30;
  let outCode = '';
  for (let index = 0; index < amount; index++) {
    outCode += `<div style = 'background-color:${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;'></div>`;
    boxSize += 10;
  }
  outputArea.innerHTML = outCode;
}

destroyButton.addEventListener('click', delSquares);

function delSquares() {
  outputArea.innerHTML = '';
  inputForm.value = '';
}
