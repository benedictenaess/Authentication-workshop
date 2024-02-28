/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signinValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signinValidation.js */ \"./src/js/signinValidation.js\");\n/* harmony import */ var _signupValidation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signupValidation.js */ \"./src/js/signupValidation.js\");\n\n\n\n// SELECTING SINGIN FORM ELEMENTS\nconst emailInput = document.querySelector('.email');\nconst passwordInput = document.querySelector('.password');\nconst emailError = document.querySelector('.email-error');\nconst passwordError = document.querySelector('.password-error');\nconst submissionError = document.querySelector('.submission-error');\nconst signInButton = document.querySelector('.sign-in-button');\nconst signInForm = document.querySelector('.sign-in-form');\n\n\n//SELECTING SIGN UP ELEMENTS\nconst singupFirstname = document.querySelector('.firstname');\nconst singupLastname = document.querySelector('.lastname');\nconst singupEmail = document.querySelector('.sign-up-email');\nconst singupPassword = document.querySelector('.sign-up-password');\nconst singupError = document.querySelector('.sign-up-error');\nconst singupForm = document.querySelector('.sign-up-form');\nconst closeSignupFormButton = document.querySelector('.sign-up-form__close');\nconst openSignupFormButton = document.querySelector('.sign-up-form__open');\nconst signupFormContainer = document.querySelector('.sign-up-form-container');\nconst signUpButton = document.querySelector('.sign-up-button');\n\nsignInButton.addEventListener('click', (e)=>{\n\te.preventDefault();\n\t(0,_signinValidation_js__WEBPACK_IMPORTED_MODULE_0__.validateSignInForm)(emailInput.value, passwordInput.value, emailError, passwordError);\n})\n\nsignUpButton.addEventListener('click', (e)=>{\n\te.preventDefault();\n\t(0,_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__.validateSignupForm)(singupFirstname.value, singupLastname.value, singupEmail.value, singupPassword.value, singupError);\n})\n\nopenSignupFormButton.addEventListener('click', (e)=>{\n\te.preventDefault();\n\tsignupFormContainer.style.display = 'block';\n})\n\ncloseSignupFormButton.addEventListener('click', (e)=>{\n\te.preventDefault();\n\tsignupFormContainer.style.display = 'none';\n})\n\n\n//# sourceURL=webpack://workshop-signin/./src/js/app.js?");

/***/ }),

/***/ "./src/js/signinValidation.js":
/*!************************************!*\
  !*** ./src/js/signinValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateSignInForm: () => (/* binding */ validateSignInForm)\n/* harmony export */ });\nconst validateSignInForm = (email, password, emailErrorElement, passErrorElement)=> {\n\tlet errors = {\n\t\terrorStatus: false,\n\t\temailError: '',\n\t\tpassError: ''\n\t}\n\tif(!email && !password){\n\t\terrors.errorStatus = true,\n\t\terrors.emailError = 'Email is required',\n\t\terrors.passError = 'Password is required';\n\n\t\temailErrorElement.style.visibility = 'visible';\n\t\tpassErrorElement.style.visibility = 'visible';\n\n\t\temailErrorElement.textContent = errors.emailError;\n\t\tpassErrorElement.textContent = errors.passError;\n\t} else if (!email){\n\t\terrors.errorStatus = true,\n\t\terrors.emailError = 'Email is required',\n\t\terrors.passError = '';\n\n\t\temailErrorElement.style.visibility = 'visible';\n\t\tpassErrorElement.style.visibility = 'hidden';\n\n\t\temailErrorElement.textContent = errors.emailError;\n\t\tpassErrorElement.textContent = errors.passError;\n\t} else if (!password){\n\t\terrors.errorStatus = true,\n\t\terrors.emailError = '',\n\t\terrors.passError = 'Password is required';\n\n\t\temailErrorElement.style.visibility = 'hidden';\n\t\tpassErrorElement.style.visibility = 'visible';\n\n\t\temailErrorElement.textContent = errors.emailError;\n\t\tpassErrorElement.textContent = errors.passError;\n\t} else {\n\t\terrors.errorStatus = false,\n\t\terrors.emailError = '',\n\t\terrors.passError = '';\n\n\t\temailErrorElement.style.visibility = 'hidden';\n\t\tpassErrorElement.style.visibility = 'hidden';\n\n\t\temailErrorElement.textContent = errors.emailError;\n\t\tpassErrorElement.textContent = errors.passError;\n\t}\n\n\tconst signInFormStatus = () => {\n\t\treturn errors.errorStatus\n\t}\n\n\treturn {signInFormStatus}\n}\n\n\n\n//# sourceURL=webpack://workshop-signin/./src/js/signinValidation.js?");

/***/ }),

/***/ "./src/js/signupValidation.js":
/*!************************************!*\
  !*** ./src/js/signupValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateSignupForm: () => (/* binding */ validateSignupForm)\n/* harmony export */ });\nconst validateSignupForm = (firstname, lastname, email, password, errorMsg)=>{\n\tlet errorStatus = false;\n\tif (!firstname || !lastname || !email || !password) {\n\t\terrorStatus = true;\n\t\terrorMsg.style.visibility = 'visible';\n\t\terrorMsg.textContent = 'All fields must be filled out';\n\t} else {\n\t\terrorStatus = false;\n\t\terrorMsg.style.visibility = 'hidden';\n\t\terrorMsg.textContent = '';\n\t}\n\n\tconst signUpFormStatus = ()=>{\n\t\treturn errorStatus;\n\t}\n\n\treturn signUpFormStatus;\n}\n\n\n\n//# sourceURL=webpack://workshop-signin/./src/js/signupValidation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;