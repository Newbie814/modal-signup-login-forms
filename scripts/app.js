const loginButtonMain = document.querySelector('.login-btn');
const signUpButtonMain = document.querySelector('.signUp-btn');

const loginModal = document.querySelector('.login-form-wrapper');
const signUpModal = document.querySelector('.signup-form-wrapper');

const loginCloseButton = document.querySelector('.login-x');
const signUpCloseButton = document.querySelector('.signup-x');

console.log(loginCloseButton);
console.log(signUpCloseButton);

signUpButtonMain.addEventListener('click', () => {
  signUpModal.classList.add('display-form');
});

loginButtonMain.addEventListener('click', () => {
  loginModal.classList.add('display-form');
});

signUpCloseButton.addEventListener('click', () => {
  signUpModal.classList.remove('display-form');
});

loginCloseButton.addEventListener('click', () => {
  loginModal.classList.remove('display-form');
});
