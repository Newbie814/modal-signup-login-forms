const loginButtonMain = document.querySelector('.login-btn');
const signUpButtonMain = document.querySelector('.signUp-btn');

const loginModal = document.querySelector('.login-form-wrapper');
const signUpModal = document.querySelector('.signup-form-wrapper');

const loginCloseButton = document.querySelector('.login-x');
const signUpCloseButton = document.querySelector('.signup-x');

const formContainer = document.querySelector('.form-container');

console.log(loginCloseButton);
console.log(signUpCloseButton);

signUpButtonMain.addEventListener('click', () => {
  signUpModal.classList.add('display-form');
  formContainer.classList.add('disable');
});

loginButtonMain.addEventListener('click', () => {
  loginModal.classList.add('display-form');
  formContainer.classList.add('disable');
});

signUpCloseButton.addEventListener('click', () => {
  signUpModal.classList.remove('display-form');
  formContainer.classList.remove('disable');
});

loginCloseButton.addEventListener('click', () => {
  loginModal.classList.remove('display-form');
  formContainer.classList.remove('disable');
});

// Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

//   function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

//   function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
