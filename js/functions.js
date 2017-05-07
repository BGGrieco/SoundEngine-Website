//Function to trigger multiple functions on form submit.
function fireFunctions()
	{
		"use strict";
		nameChecker();
		emailChecker();
		emailConfirmer();
	}
	
//Function to check Name is entered and dynamically update the DOM.
function nameChecker()
	{
		"use strict";
		var userName = document.getElementById("firstName").value;
		var feedbackTextOne = document.getElementById("headerOne");
		
		if (userName === "")
			{
				feedbackTextOne.innerHTML = "This field is mandatory.";
				document.getElementById("firstName").focus();
			}
		
		else
			{
			    feedbackTextOne.innerHTML = "";	
			}
	}
	
//Function to check e-mail and dynamically update DOM.
function emailChecker()
{
	"use strict";
    var userEmail = document.getElementById("eMail").value;
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;
    var feedbackTextTwo = document.getElementById("headerTwo");
    
    if (userEmail !== "" && emailRegex.test(userEmail))
    {
        feedbackTextTwo.innerHTML = "Valid e-mail address.";
        emailConfirmer();
    }
    
    else if (userEmail === "")
    {
        feedbackTextTwo.innerHTML = "This field is mandatory.";
		document.getElementById("eMail").focus();
    }
    
    else
    {
        feedbackTextTwo.innerHTML = "Invalid e-mail address.";
		document.getElementById("eMail").focus();
    }
}

//Function to confirm e-mail address and dynamically update the DOM.
function emailConfirmer()
{
	"use strict";
    var userEmail = document.getElementById("eMail").value;
    var confirmEmail = document.getElementById("emailConfirm").value;
    var feedbackTextThree = document.getElementById("headerThree");
    
    if (confirmEmail === userEmail)
    {
        feedbackTextThree.innerHTML = "E-mail address confirmed.";
        passwordChecker();
    }
    
    else if (confirmEmail === "")
    {
        feedbackTextThree.innerHTML = "This field is mandatory.";
		document.getElementById("emailConfirm").focus();
    }
    
    else
    {
        feedbackTextThree.innerHTML = "E-mail address not matching.";
		document.getElementById("emailConfirm").focus();
    }
}

function dropFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) 
{
  if (!event.target.matches(".dropbtn")) 
  {

    var dropdowns = document.getElementsByClassName('dropdownContent');
    var i;
    for (i = 0; i < dropdowns.length; i++) 
	{
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) 
	  {
        openDropdown.classList.remove('show');
      } 
    }
  }
}
// Side menu for mobile version
function openNav() 
	{
		"use strict";
        document.getElementById("mySidenav").style.width = "230px";
    }

function closeNav() 
	{
		"use strict";
        document.getElementById("mySidenav").style.width = "0";
    }