'use-strict';

const btn = document.querySelector('button');
const errorParagraphs = document.querySelectorAll('.error');

const userInput = document.getElementById('user-input');
const userError = document.querySelector('.username-error');

const emailInput = document.getElementById('email-input');
const emailError = document.querySelector('.email-error');

const passwordInput = document.getElementById('password-input');
const passwordError = document.querySelector('.password-error');

const password2Input = document.getElementById('password2-input');
const password2Error = document.querySelector('.password2-error');

window.addEventListener('load', function () {
  errorParagraphs.forEach(p => p.classList.add('hidden'));
});

btn.addEventListener('click', e => {
  e.preventDefault();
  checkUsernameInput(userInput.value);
  checkEmailInput(emailInput.value);
  checkPasswordInput(passwordInput.value);
  checkSecondPassword(
    checkPasswordInput(passwordInput.value),
    password2Input.value
  );
});

function checkUsernameInput(str) {
  if (str.length > 3 && str.length < 16) {
    show(userError, userInput);
  } else {
    hide(userInput, userError);
  }
}
function checkEmailInput(str) {
  if (str.includes('@')) {
    show(emailError, emailInput);
  } else {
    hide(emailInput, emailError);
  }
}
function checkPasswordInput(str) {
  if (str.length >= 6) {
    show(passwordError, passwordInput);
  } else {
    hide(passwordInput, passwordError);
  }
  return str;
}

function checkSecondPassword(firstPass, secondPass) {
  if (firstPass === secondPass && secondPass !== '' && secondPass.length >= 6) {
    show(password2Error, password2Input);
  } else {
    hide(password2Input, password2Error);
  }
}
function show(errEl, el) {
  errEl.classList.remove('visible');
  errEl.classList.add('hidden');
  el.classList.add('green');
}
function hide(el, errEl) {
  el.classList.remove('green');
  el.classList.add('red-border');
  errEl.classList.add('visible', 'red-text');
}
