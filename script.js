'use-strict';

const btn = document.querySelector('button');
const errorParagraphs = document.querySelectorAll('.error');

const userInput = document.getElementById('user-input');
const userError = document.querySelector('.username-error');

const emailInput = document.getElementById('email-input');
const emailError = document.querySelector('.email-error');

window.addEventListener('load', function () {
  errorParagraphs.forEach(p => p.classList.add('hidden'));
});

btn.addEventListener('click', e => {
  e.preventDefault();
  checkUsernameInput(userInput.value);
  checkEmailInput(emailInput.value);
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
