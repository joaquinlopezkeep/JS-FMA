/* This function sums up the values of the input elements.
	@param: none
	@return: integer
*/	
function values(){
	var input = document.getElementsByTagName("input");
	var score = 0;
	for(var i = 0; i < input.length; i++){
		if(input[i].checked){
			score += Number(input[i].value);
		}
	}
	return score;
}


/* This function creates an array of strings with the 
	name of the input elements that have been checked.
	@param: none
	@return: array
*/	
function riskArr(){
	var input = document.getElementsByTagName("input");
	var rArr = [];
	for(var i = 0; i < input.length; i++){
		if(input[i].checked && input[i].value >= 10){
			rArr.push(input[i].name);
		}
	}
	return rArr;
}


/* This function creates a string for the dynamic High risk message.
	@param: none
	@return: string
*/	
function highRiskText(){
	var values = riskArr();
	var risksText = "Your main risk factor";
	if(values.length == 0){
		risksText = "";
	}
	else if(values.length == 1){
		risksText = "Your main risk factor is " + values[0] + ". ";
	}
	else if(values.length == 2){
		risksText += "s are " + values[0] + " and " + values[1] + ". ";
	}
	else if(values.length == 3){
		risksText += "s are " + values[0] + ", " + values[1] + " and " + values[2] + ". ";
	}
	else{
		risksText += "s are " + values[0] + ", " + values[1] + ", " + values[2] + " and " + values[3] + ". ";
	}
	return risksText;
}


//This function selects the correct message to display.	
function message(score){
	if(score <= 15){
		lowRisk();
	}
	else if(score <= 25){
		mediumRisk();
	}
	else{
		highRisk();
	}
}		

// This function creates the elements and textnodes needed for the low risk message.
function lowRisk(){
	var message = document.getElementById("result");
	var newMessage = document.createElement("p");
	var newMessageText = document.createTextNode("Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.");
	newMessage.appendChild(newMessageText);
	message.appendChild(newMessage);
}


// This function creates the elements and textnodes needed for the medium risk message.
function mediumRisk(){
	var message = document.getElementById("result");
	var newMessage = document.createElement("p");
	var newMessageLink = document.createElement("a");
	var newMessageLinkText = document.createTextNode("http://www.zha.org.zd");
	newMessageLink.appendChild(newMessageLinkText);
	newMessageLink.setAttribute("href", "#");
	var newMessageText = document.createTextNode("Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ");
	newMessage.appendChild(newMessageText);
	newMessage.appendChild(newMessageLink);
	message.appendChild(newMessage);
}

// This function creates the elements and textnodes needed for the high risk message.
function highRisk(){
	var message = document.getElementById("result");
	var newMessage = document.createElement("p");
	var newMessageLink = document.createElement("a");
	var newMessageLinkText = document.createTextNode(" our form");
	newMessageLink.appendChild(newMessageLinkText);
	newMessageLink.setAttribute("href", "contactform.html");
	var newMessageText = document.createTextNode("Your results show that you currently have a HIGH risk of developing diabetes.");
	var risks = document.createTextNode(highRiskText());
	var middleMessageText = document.createTextNode("We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in");
	var finalMessageText = document.createTextNode(" and a member of the Health Authority Diabetes Team will be in contact with you.");
	newMessage.appendChild(newMessageText);
	newMessage.appendChild(risks);
	newMessage.appendChild(middleMessageText);
	newMessage.appendChild(newMessageLink);
	newMessage.appendChild(finalMessageText);
	message.appendChild(newMessage);
}

// This function clears the message, to ensure only one message is displayed.
function clearResult(){
	document.getElementById("result").innerHTML = "";
}

//This function shows the results message.
function showResults(){
	document.getElementById("result").style.display = "block";
}

// This function checks the form.
function checkForm(){
	clearResult();
	var score = values();
	message(score);
	showResults();	
}

//This function calls the checkForm function using the onclick event handler.
function init(){
	document.getElementById("calculateRisk").onclick = checkForm;
}

window.onload = init;

