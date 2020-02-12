//This function focus on the first name field.
function focusOnFname(){
	document.getElementById("fname").focus();
}

/*This function creates a placeholder text and styles it.
	It also has tow other function to remove the text on focus
	and to restore it of the field is left unfinished.
	I have used the code from the inclass activities but
	slighlty modified.
*/ 
function textHint(){
	var txtElem = document.getElementById("hnumber");
	var defaultText = "Enter your number e.g.(ZHA123456)";
	txtElem.value = defaultText;
	txtElem.style.color = "#a8a8a8";
	txtElem.style.fontStyle = "italic";
	txtElem.onfocus = function() {
		if (this.value === defaultText) {
			this.value = "";
			this.style.color = "#000";
			this.style.fontStyle = "normal";
		}
	}
	txtElem.onblur = function() {
		if (this.value === "") {
			this.value = defaultText;
			this.style.color = "#A8A8A8";
			this.style.fontStyle = "italic";
		}
	}
}

/*This function shows the an error message by change the display style.
	@param: string
*/
function showError(elemId) {
	document.getElementById(elemId).style.display="inline";
}

/*This function hides the an error message by change the display style.
	@param: string
*/
function hideError(elemId){
	document.getElementById(elemId).style.display = "none";
}


/*This function validates the input value of the first name field.
	@param: none
	@return: boolean
*/
function fnameValid(){
	var fnameRegEx = /^[A-Za-z]+$/;
	var elem = document.getElementById("fname");
	var elemNext = elem.nextSibling.id;
	if((elem.value==="") ||(!fnameRegEx.test(elem.value)) || (elem.value.length < 2)){
		showError(elemNext);
		return false;
	}
	else {
		hideError(elemNext);
		return true;
	}
}

/*This function validates the input value of the last name field.
	@param: none
	@return: boolean
*/
function lnameValid(){
	var lnameRegEx = /^[A-Za-z-]+$/;
	var elem = document.getElementById("lname");
	var elemNext = elem.nextSibling.id;
	if((elem.value==="") || (!lnameRegEx.test(elem.value)) ||(elem.value.length < 2)){
		showError(elemNext);	
		return false;
	}
	else {
		hideError(elemNext);
		return true;
	}
}


/*This function validates the selection of the title field.
	@param: none
	@return: boolean
*/
function titleValid(){
	var elem = document.getElementById("title");
	var elemNext = elem.nextSibling.id;
	if((elem.value === "Mr") ||
		   (elem.value === "Ms") ||
		   (elem.value === "Mrs") ||
		   (elem.value === "Miss") ||
		   (elem.value === "Master")){
				hideError(elemNext);
				return true;
		}
	else {
		showError(elemNext);
		return false
	}
}

/*This function validates the input value of the health number field.
	@param: none
	@return: boolean
*/
function healthNumValid(){
	var healthNumRegEx = /^ZHA[0-9]{6}$/;
	var elem = document.getElementById("hnumber");
	var elemNext = elem.nextSibling.id;
	if((elem.value==="")|| (!healthNumRegEx.test(elem.value))){
		showError(elemNext);
		return false;
	}
	else {
		hideError(elemNext);
		return true;
	}
}

/*This function validates the input value of the email field.
	@param: none
	@return: boolean
*/
function emailValid(){
	var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // RegEx from: https://www.w3resource.com/javascript/form/email-validation.php
	var elem = document.getElementById("mail");
	var elemNext = elem.nextSibling.id;
	if((elem.value==="") || (!emailRegEx.test(elem.value))){
		showError(elemNext);
		return false;
	}
	else {
		hideError(elemNext);
		return true;
	}
}

/*This function validates the input value of the phone number field.
	@param: none
	@return: boolean
*/
function phoneValid(){
	var phoneRegEx = /^[0-9]{11}$/;
	var elem = document.getElementById("telenumber");
	var elemNext = elem.nextSibling.id;
	if((elem.value != "")&&(!phoneRegEx.test(elem.value))){
		showError(elemNext);
		return false;
	}
	else{
		hideError(elemNext);
		return true;
	}
}


/*This function checks the form by calling all the validation functions.
	@param: none
	@return: boolean
*/
function checkForm(){
	var allowSubmit = true;
	if(fnameValid() == false){
		allowSubmit = false;
	}
	if(lnameValid() == false){
		allowSubmit = false;
	}
	if(titleValid() == false){
		allowSubmit = false;
	}
	if(healthNumValid() == false){
		allowSubmit = false;
	}
	if(emailValid() == false){
		allowSubmit = false;
	}
	if(phoneValid() == false){
		allowSubmit = false;
	}
	return allowSubmit;
}


/*This function initialises the submission using the event handler onsubmit.
	It also sets the focus and text hint.
*/
function init(){
	textHint();
	focusOnFname();
	document.getElementById("zhaform").onsubmit = checkForm;
} 

window.onload = init;

