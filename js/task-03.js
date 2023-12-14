let nameIn = document.querySelector('#name-input');
let nameOut = document.querySelector('#name-output');
nameIn.addEventListener('input', e => {
  if (e.currentTarget.value === '') {
    nameOut.textContent = 'Anonymous';
  } else {
    nameOut.textContent = e.currentTarget.value;
  }
  console.dir(e.currentTarget.value);
});
