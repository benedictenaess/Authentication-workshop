import { validateSignInForm } from "./signinValidation.js";

// SELECTING SINGIN FORM ELEMENTS
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const submissionError = document.querySelector('.submission-error');
const signInButton = document.querySelector('.sign-in-button');
const signInForm = document.querySelector('.sign-in-form');


//SELECTING SIGN UP ELEMENTS
const singupFirstname = document.querySelector('.firstname');
const singupLastname = document.querySelector('.lastname');
const singupEmail = document.querySelector('.sign-up-email');
const singupPassword = document.querySelector('.sign-up-password');
const singupError = document.querySelector('.sign-up-error');
const singupForm = document.querySelector('.sign-up-form');
const closeSignupFormButton = document.querySelector('.sign-up-form__close');
const openSignupFormButton = document.querySelector('.sign-up-form__open');
const signupFormContainer = document.querySelector('.sign-up-form-container');

signInButton.addEventListener('click', (e)=>{
	e.preventDefault();
	validateSignInForm(emailInput.value, passwordInput.value, emailError, passwordError);
})

openSignupFormButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signupFormContainer.style.display = 'block';
})

closeSignupFormButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signupFormContainer.style.display = 'none';
})

// signInForm.addEventListener('submit', (e)=>{
// 	e.preventDefault();
// })