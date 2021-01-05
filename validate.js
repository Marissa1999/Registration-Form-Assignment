/*

Form Validation Assignment

The form is considered correctly completed only if all validate functions are satisfied.
When an invalid entry is found, the input box must change its background color to red.
When an invalid entry is found, an error message (in red text color) should be displayed in the appropriate span.
When an invalid entry is corrected, all related error messages and colors should be reset.

First and Last Name: minimum of 2 characters, only letters or the '-' character.
E-Mail: alphanumeric text, followed by '@', followed by alphanumeric text, followed by '.', followed by text. 
User-name: Minimum 6 characters, alphanumeric, starting with a letter.
Password: Minimum 8 characters, alphanumeric, with at least 1 Uppercase letter and 1 lowercase letter and 1 number.
Repeat Password: Identical to password.

NB: Alphanumeric means only letters and numbers.

*/



function validate()
{
	
	validateName("first");
	validateName("last");
	validateEmail();
	validateUsername();
	validatePassword();
	
}




function validateName(selection)
{

 
	 var idName;
	 var errorSection;
	 var className;
	 
	 
	 if (selection == "first")
     {
		idName = "fName";
		nameError = "err_fName";
		className = "fName";
	 }
	 
	 
	 
	 else
     {
		idName = "lName";
		nameError = "err_lName";
		className = "lName";
	 }
	 
	 
	 
	
        if (document.getElementById(idName).value.length < 2)
	    {
		    displayError(idName, nameError);
		    document.getElementById(nameError).innerHTML = "Error: Minimum Two Characters";
            return false;
	    }
	 

  
	   else if (!isValidName(document.getElementById(idName).value))
	   {
		    displayError(idName, nameError);
		    document.getElementById(nameError).innerHTML = "Error: Letters and '-' Are Only Accepted";
            return false;
	   } 
		

	 
  	 eliminateError(idName, nameError);
		 
	 
	
}





function validateEmail()
{
	
	
	var email = "email";
	var emailElement = document.getElementById(email).value;
	var emailError = "err_email";


	
	if(emailElement.indexOf("@") == -1)
    {
		
        displayError(email, emailError);
		document.getElementById(emailError).innerHTML = "Error: Invalid Email"; 
	    return false;
		
    }
	
	
	
	

    var username = emailElement.substring(0, emailElement.indexOf("@"));
	
    if(!isAlphaNumeric(username))
    {
		
       displayError(email, emailError);
	   document.getElementById(emailError).innerHTML = "Error: Invalid Email"; 
	   return false;
	   
    }

	
	
	
    var domain = emailElement.substring(emailElement.indexOf("@") + 1);
	
    if(domain.indexOf(".") == -1)
    {
		
        displayError(email, emailError);
		document.getElementById(emailError).innerHTML = "Error: Invalid Email"; 
		return false;
		
    }
	
	
	
	
	
    var domainName = domain.substring(0, domain.indexOf("."));
	
    if(!isAlphaNumeric(domainName))
    {
		
        displayError(email, emailError);
		document.getElementById(emailError).innerHTML = "Error: Invalid Email"; 
		return false;
		  
    }
	

	
	
    var extension = domain.substring(domain.indexOf(".") + 1);
	
    if(!isAlphaNumeric(extension))
    {
		
        displayError(email, emailError);
		document.getElementById(emailError).innerHTML = "Error: Invalid Email"; 
		return false;
		
    }
	
    
        eliminateError(email, emailError);
		
	
	
}






function validateUsername()
{
	
	var userName = "username";
	var usernameError = "err_username";
	
	
	
	 if (document.getElementById(userName).value.length < 6)
	 {
		 displayError(userName, usernameError);
		 document.getElementById(usernameError).innerHTML = "Error: Minimum Six Characters";
         return false;
	 }
	 
	 
	 
	 
	 else if (!isAlphaNumeric(document.getElementById(userName).value))
     {
		 displayError(userName, usernameError);
		 document.getElementById(usernameError).innerHTML = "Error: Must be Alphanumeric"; 
		 return false; 
	 }
	 
	 
	 
	 
	 else if (!firstLetterCharacter(document.getElementById(userName).value))
     {
	     displayError(userName, usernameError);
		 document.getElementById(usernameError).innerHTML = "Error: First Character Must Be a Letter"; 
		 return false; 
	 }
	
	
	
     eliminateError(userName, usernameError);
	
}










function validatePassword()
{
	
	var passwordName = "password";
	var repeatedPasswordName = "password2";
	var passwordError = "err_password";	
	var repeatedPasswordError = "err_password2";

	
	
	
	 if (document.getElementById(passwordName).value.length < 8)
	 {
		 displayError(passwordName, passwordError);
		 document.getElementById(passwordError).innerHTML = "Error: Minimum Eight Characters";
         return false;
	 }
	 
	 
	 
	 
	 
	 
	 else if (!isAlphaNumeric(document.getElementById(passwordName).value))
     {
		 displayError(passwordName, passwordError);
		 document.getElementById(passwordError).innerHTML = "Error: Must Be Alphanumeric"; 
		 return false;	  
	 }
	
	
	
	

	
	 else if(!numberCheck(document.getElementById(passwordName).value))
     {
         displayError(passwordName, passwordError);
		 document.getElementById(passwordError).innerHTML = "Error: Must Contain One Number"; 
		 return false; 
     }
	 
	 
	 
	 
	 
	 
	 else if(!lowercaseCheck(document.getElementById(passwordName).value))
     {
         displayError(passwordName, passwordError);
		 document.getElementById(passwordError).innerHTML = "Error: Must Contain One Lowercase Letter"; 
		 return false; 
     }
	
	
	
	
	
	 else if(!uppercaseCheck(document.getElementById(passwordName).value))
     {
         displayError(passwordName, passwordError);
		 document.getElementById(passwordError).innerHTML = "Error: Must Contain One Uppercase Letter"; 
		 return false; 
     }
	

	
	
	  eliminateError(passwordName, passwordError);
	

	
	
	
	
	
	if (document.getElementById(passwordName).value != document.getElementById(repeatedPasswordName).value)
	{
		 displayError(repeatedPasswordName, repeatedPasswordError);
		 document.getElementById(repeatedPasswordError).innerHTML = "Error: Repeated Password Does Not Match the First One"; 
		 return false; 
		
	}
	
	
	
	 eliminateError(repeatedPasswordName, repeatedPasswordError);

	
} 






	
function isValidName(name)
{
	
    var validCharacters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-";
	
    for(var i = 0; i < name.length; i++)
    {
        if(validCharacters.indexOf(name.charAt(i)) == -1)
        {
            return false;
        }
    }
	
    return true;
	
}






function isAlphaNumeric(value)
{
	
    var validAlpha = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
	
    for(var i = 0; i < value.length; i++)
    {
        if(validAlpha.indexOf(value.charAt(i)) == -1)
        {
            return false;
        }
    }
	
    return true;
	
}







function firstLetterCharacter(userName)
{
	
    var validLetters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	
        if(validLetters.indexOf(userName.charAt(0)) == -1)
        {
            return false;
        }
   
    return true;
	
}
	
	
	
	
	
	
	
	
function numberCheck(passWord)
{
	
	var numbers = "1234567890";
	
    for(var i = 0; i < passWord.length; i++)
    {
        if(numbers.indexOf(passWord.charAt(i)) == -1)
        {
            return false;
        }
    }
	
    return true;
	
	
}
	

	
	
	
	
function uppercaseCheck(passWord)
{
	
	var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
	
    for(var i = 0; i < passWord.length; i++)
    {
        if(uppercaseLetters.indexOf(passWord.charAt(i)) == -1)
        {
            return false;
        }
    }
	
    return true;
	
	
}
	
	
	
	
	
	
function lowercaseCheck(passWord)
{
	
	var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
	
    for(var i = 0; i < passWord.length; i++)
    {
        if(lowercaseLetters.indexOf(passWord.charAt(i)) == -1)
        {
            return false;
        }
    }
	
    return true;
	
	
}
	

	
	

	
	
function eliminateError(inputName, errorMessage)
{
	  document.getElementById(inputName).setAttribute("style", "background-color: white;");
	  document.getElementById(errorMessage).innerHTML = "";
      return true;
}








function displayError(inputName, errorMessage)
{
	 document.getElementById(inputName).setAttribute("style", "background-color: red;");
     document.getElementById(errorMessage).setAttribute("style","color: red;");
}