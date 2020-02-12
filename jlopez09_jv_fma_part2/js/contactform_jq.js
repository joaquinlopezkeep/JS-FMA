$().ready(function(){
	$("#zhaform").validate({
		rules: {
			firstname: {
				required: true,
				minlength: 2,
				fnameRegEx: true
			},
			lastname: {
				required: true,
				minlength: 2,
				lnameRegEx: true
			},
			yourtitle: "required",
			healthnumber: {
				required: true,
				hNumRegEx: true
			},	
			email: {
				required: true,
				email: true,
				emailRegEx: true
			},
			phonenumber:{
				maxlength: 11,
				minlength: 11
			}
		},
		messages: {
			firstname: {
				required: " *You must enter your first name.",
				minlength: " Your name must be at least than 2 characters long.",
				fnameRegEx: " Please check your input, only letters are allowed."
			}, 
			lastname: {
				required: " *You must enter your last name.",
				lnameRegEx: "Please check your input, only letters and hyphens are allowed.",
				minlength: " Your last name must be at least 2 characters long"
			},	
			yourtitle: " *You must choose a title.",
			healthnumber: {
				required: " *You must enter a health number",
				hNumRegEx: "Please check your input, exapmle:(ZHA000000)"
			},	
			email:{
				required: " *You must enter your email address.",
				email: " Please enter a valid email address.",
				emailRegEx: " Invalid email."
			},
			phonenumber:{
				maxlength: "Phone number must be 11 numbers long.",
				minlength: "Phone number must be 11 numbers long."
			}
			
		},
	
	});
	
	//This function sets focus on load to fname. https://stackoverflow.com/questions/1591910/how-to-focus-on-a-form-input-text-field-on-page-load-using-jquery
	$("input:text:visible:first").focus();
	
	//This function adds a method to validate first name.
	$.validator.addMethod(
		"fnameRegEx",
		function(value, element){
			var re = /^[A-Za-z]+$/;
			return this.optional(element) || re.test(value)
		},
		
	);
	//This function adds a method to validate last name.
	$.validator.addMethod(
		"lnameRegEx",
		function(value, element){
			var re = /^[A-Za-z-]+$/;
			return this.optional(element) || re.test(value)
		},
		
	);
	//This function adds a method to validate health number.
	$.validator.addMethod(
		"hNumRegEx",
		function(value, element){
			var re = /^ZHA[0-9]{6}$/;
			return this.optional(element) || re.test(value)
		},
		
	);
	//This function adds a method to validate email.
	$.validator.addMethod(
		"emailRegEx",
		function(value, element){
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // RegEx from: https://www.w3resource.com/javascript/form/email-validation.php
			return this.optional(element) || re.test(value)
		},
		
	);
	//This function set the placeholder text, focus in and focus out. modified from: https://stackoverflow.com/questions/9707021/how-do-i-auto-hide-placeholder-text-upon-focus-using-css-or-jquery
	$(function (){
		$('#hnumber').data('holder', $('#hnumber').attr('placeholder', 'Enter your number e.g.(ZHA123456)'));
		$('#hnumber').focusin(function () {
			$(this).attr('placeholder', '');
		});
		$('#hnumber').focusout(function (){
			$(this).attr('placeholder', 'Enter your number e.g.(ZHA123456)', $(this).data('holder'));
		});	
	});

});	

