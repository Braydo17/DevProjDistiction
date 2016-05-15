function checkName() {
	var Lname=document.getElementById("name");
	var Lname_msg=document.getElementById("name_msg");
	var letters = /^[A-Za-z]+$/;

	if (Lname.value.length > 15) {
		name_msg.textContent = "Please choose max 20 characters for the name";
		return false;
	}
  if (letters.test(Lname.value) == false) {
  		Lname_msg.textContent="Alphabets only";
  		return false;
  } else {
  		Lname_msg.textContent="";
	}
}

function checkPhone() {
var phone=document.getElementById("phone");
var phone_msg=document.getElementById("phone_msg");
var phoneRE = /^\(\d\d\) \d\d\d\d-\d\d\d\d$/;

  if (!phone.value.match(phoneRE)) {
    phone_msg.textContent="Your phone numb is not valid";
    return false;
  } else {
    phone_msg.textContent="";
    }
}

function checkEmail() {
var email=document.getElementById("email").value;
var email_msg=document.getElementById("email_msg");
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    email_msg.textContent="Please enter a valid email";
    return false;
  } else {
    email_msg.textContent="";
  }
}

function checkDesc()
{
	var desc=document.getElementById("desc");
	var desc_msg=document.getElementById("desc_msg");
	var letters = /^[A-Za-z]+$/;

	if (desc.value.length > 20) {
		name_msg.textContent = "Please choose max 20 characters for the name";
		return false;
	}
  if (letters.test(desc.value) == false) {
  		desc_msg.textContent="Alphabets only";
  		return false;
  } else {
  		desc_msg.textContent="";
	}
}


function init() {
	var regform=document.getElementById("regform");
	var menuform=document.getElementById("menuform");
	
	if(regform != null)
	{
		var Lname=document.getElementById("name");
		var phone=document.getElementById("phone");
		var email=document.getElementById("email");
		Lname.onblur=checkName;
		phone.onblur=checkPhone;
		email.onblur=checkEmail;
	}

	if(menuform != null)
	{
		var Lname=document.getElementById("name");
		var desc=document.getElementById("desc");
		Lname.onblur=checkName;
		desc.onblur=checkDesc;
	}

}

window.onload=init;