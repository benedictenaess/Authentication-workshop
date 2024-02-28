import { validateSignInForm } from "./signinValidation";

// SELECTING SINGIN FORM ELEMENTS
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const submissionError = document.querySelector('.submission-error');
const signInButton = document.querySelector('sing-in-button');
const signInForm = document.querySelector('.sing-in-form');

signInButton.addEventListener('click', (e)=>{
	e.preventDefault();
	validateSignInForm(emailInput, passwordInput, emailError, passwordError);
})

signInForm.addEventListener('submit', (e)=>{
	e.preventDefault();
})