const un = 'user';
const pw ='pw';
let settedUn = localStorage.username;
let settedPw = localStorage.password;

const loginBorder = document.getElementById('login-border');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginBtn = document.getElementById('login-btn');
const loginWarning = document.getElementById('login-warning');

const registerLink = document.getElementById('register-link');

const regBorder = document.getElementById('reg-border');
const regUsername = document.getElementById('reg-username');
const regPassword = document.getElementById('reg-password');
const regPasswordRe = document.getElementById('reg-passwordRe');
const regBtn = document.getElementById('reg-btn');
const regWarning = document.getElementById('reg-warning');
			
const cbPrivacy = document.getElementById('cb-privacy');
const inputs = document.querySelectorAll('input');

const bg = document.getElementById('loginBg');
let loggedInText = document.getElementById('loggedInText');

const loggedIn = () => {
	loginWarning.style.opacity = '0';
		bg.style.filter = 'blur(6px)';
		loggedInText.style.left = '15%';
		setTimeout(() => {
			loggedInText.style.left = '-100%';
		},3000);
};

const loginCheck = () => {
	if(loginUsername.value == "" || loginPassword.value == ""){
		loginWarning.innerHTML = 'Please fill out all the fields';
		loginWarning.style.opacity = '1';
	}
	else if((loginUsername.value == un && loginPassword.value == pw) || (loginUsername.value == un && loginPassword.value == pw)){
		loggedIn();
	}
	else if(loginUsername.value == localStorage.username && loginPassword.value == localStorage.password){
		loggedIn();
	}
	else if(loginUsername.value !== un || loginPassword.value !== pw){
		loginWarning.innerHTML = 'Invalid username or password';
		loginWarning.style.opacity = '1';
	}
};

const goToReg = () => {
	loginWarning.style.opacity = '0';
	loginBorder.style.left = "-300%";
	regBorder.style.transform = 'scale(1)';
}

const termsOfUseCheck = () => {
	if(cbPrivacy.checked == true && regUsername.value != "" && regPassword.value != "" && regPassword.value == regPasswordRe.value){
		regBorder.style.transform = 'scale(0)';
		loginBorder.style.left = '0';
	}
	if(cbPrivacy.checked == false){
		regWarning.innerHTML ="You have to accept our terms of use!"
		regWarning.style.opacity = '1';
	}
}

const regFieldsCheck = () => {
	if(regUsername.value == ""){
		regWarning.innerHTML ="Please fill out the required fields"
		regWarning.style.opacity = '1';
		regUsername.style.borderBottom = '2px solid red';
	}
	else{
		localStorage.setItem('username', regUsername.value)
		settedUn = localStorage.username;
	}
	
	if(regPassword.value == ""){
		regWarning.innerHTML ="Please fill out the required fields"
		regWarning.style.opacity = '1';
		regPassword.style.borderBottom = '2px solid red';
		regPasswordRe.style.borderBottom = '2px solid red';
	}
}

const comparePasswords = () => {
	if(regPassword.value == regPasswordRe.value){
		localStorage.setItem('password', regPassword.value);
		settedPw = localStorage.password;
	}
	else{
		regWarning.innerHTML ="Passwords are not the same!"
		regWarning.style.opacity = '1';
	}
}


	
loginBtn.addEventListener('click', loginCheck);

registerLink.addEventListener('click', goToReg);

regBtn.addEventListener('click', () => {
	
	termsOfUseCheck();

	regFieldsCheck();
	
	comparePasswords();
	
});
			
				
inputs.forEach(element => {
	element.addEventListener('change', () => {
		if(element.style.borderBottom = '2px solid red'){
			element.style.borderBottom = 'none';
		}
	});
});