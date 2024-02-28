const validateSignupForm = (firstname, lastname, email, password, errorMsg)=>{
	let errorStatus = false;
	if (!firstname || !lastname || !email || !password) {
		errorStatus = true;
		errorMsg.style.visibility = 'visible';
		errorMsg.textContent = 'All fields must be filled out';
	} else {
		errorStatus = false;
		errorMsg.style.visibility = 'hidden';
		errorMsg.textContent = '';
	}

	const signUpFormStatus = ()=>{
		return errorStatus;
	}

	return signUpFormStatus;
}

export {validateSignupForm}