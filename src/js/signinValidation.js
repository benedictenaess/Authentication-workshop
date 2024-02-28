const validateSignInForm = (email, password, emailErrorElement, passErrorElement)=> {
	let errors = {
		errorStatus: false,
		emailError: '',
		passError: ''
	}
	if(!email && !password){
		errors.errorStatus = true,
		errors.emailError = 'Email is required',
		errors.passError = 'Password is required';

		emailErrorElement.style.visibility = 'visible';
		passErrorElement.style.visibility = 'visible';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passError;
	} else if (!email){
		errors.errorStatus = true,
		errors.emailError = 'Email is required',
		errors.passError = '';

		emailErrorElement.style.visibility = 'visible';
		passErrorElement.style.visibility = 'hidden';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passError;
	} else if (!password){
		errors.errorStatus = true,
		errors.emailError = '',
		errors.passError = 'Password is required';

		emailErrorElement.style.visibility = 'hidden';
		passErrorElement.style.visibility = 'visible';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passError;
	} else {
		errors.errorStatus = false,
		errors.emailError = '',
		errors.passError = '';

		emailErrorElement.style.visibility = 'hidden';
		passErrorElement.style.visibility = 'hidden';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passError;
	}

	const signInFormStatus = () => {
		return errors.errorStatus
	}

	return {signInFormStatus}
};

export {validateSignInForm}