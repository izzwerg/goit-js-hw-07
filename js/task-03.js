let nameIn = document.querySelector('#name-input');
let nameOut = document.querySelector('#name-output');
nameIn.addEventListener('input', e => {
  if (e.currentTarget.value.trim() === '') {
    nameOut.textContent = 'Anonymous';
  } else {
    nameOut.textContent = e.currentTarget.value.trim();
  }
});
