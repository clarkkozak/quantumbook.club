//Get the elements you need to input

const loginUsername = document.getElementById("loginUsername");
const loginPassword= document.getElementById("loginPassword");
const loginSubmit = document.getElementById("loginSubmit");

const signupUsername = document.getElementById("signupUsername");
const signupEmail= document.getElementById("signupEmail");
const signupPassword= document.getElementById("signupPassword");
const signupPassword2= document.getElementById("signupPassword2");
const signupSubmit = document.getElementById("signupSubmit");


//On submit, have the data get send to node
loginSubmit.onclick = login;
signupSubmit.onclick = signup;

function login(e) {
//create a new HTTP request
	const xhr = new XMLHttpRequest();
//initalize the request with a method (POST) and a url (localhost:3000)
	xhr.open("POST", "http://localhost:3000");
//set a header telling it what type of data we want
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//a function run when the server sends a response
	xhr.onload = function () {
		console.log(this.responseText); 
	};
//send what you want to the server
	xhr.send(`loginUsername=${loginUsername.value}&loginPassword=${loginPassword.value}`);	
//make sure it submits...
	xhr.close
	console.log("Submitted!");
}

function signup(e) {
//create a new HTTP request
	const xhr = new XMLHttpRequest();
//initalize the request with a method (POST) and a url (localhost:3000)
	xhr.open("POST", "http://localhost:3000");
//set a header telling it what type of data we want
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//a function run when the server sends a response
	xhr.onload = function () {
		console.log(this.responseText); 
	};
//send what you want to the server
	xhr.send(`signupUsername=${signupUsername.value}&signupPassword=${signupPassword.value}&signupPassword2=${signupPassword2.value}&signupEmail=${signupEmail.value}`);	
//make sure it submits...
	console.log("Submitted!");
}
