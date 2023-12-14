let regForm = document.querySelector('.login-form');
regForm.addEventListener('submit', regSubmit);
function regSubmit(e) {
  e.preventDefault();
  let form = e.target;
  let formEmail = form.elements.email.value;
  let formPass = form.elements.password.value;

  if (formEmail === '' || formPass === '') {
    alert('All form fields must be filled in');
  } else {
    let formReturn = {};
    formReturn[form.elements.email.name] = form.elements.email.value;
    formReturn[form.elements.password.name] = form.elements.password.value;
    console.log(formReturn);
    form.reset();
  }
}
