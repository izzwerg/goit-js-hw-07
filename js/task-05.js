function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeButton = document.querySelector('.change-color');
let targetColorTag = document.querySelector('body');
let targetTextTag = document.querySelector('.color');
changeButton.addEventListener('click', newColor);

function newColor() {
  let newRandomColor = getRandomHexColor();
  targetColorTag.setAttribute('style', `background-color:${newRandomColor}`);
  targetTextTag.textContent = newRandomColor;
}
