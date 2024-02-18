const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const passwordError =document.getElementById('passwordError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const numberError = document.getElementById('numberError');
const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');


phoneNumber.addEventListener("input",()=>{
    if(isNaN(phoneNumber.value)){
        phoneNumber.style.border = "2px solid red";
        numberError.style.opacity = 1;
    }else{
        numberError.style.opacity = 0;
        phoneNumber.style.border = "";
    }
});

password.addEventListener('input', () =>{
    if (password.value != confirmPassword.value && confirmPassword.value != "" && password.value != ""){
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        passwordError.style.opacity = 1;
        confirmPasswordError.style.opacity = 1;
    }else{
        password.style.border = "";
        confirmPassword.style.border = "";
        passwordError.style.opacity = 0;
        confirmPasswordError.style.opacity = 0;
    }
});
confirmPassword.addEventListener('input', () => {
    if (password.value != confirmPassword.value && confirmPassword.value != "" && password.value != ""){
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        passwordError.style.opacity = 1;
        confirmPasswordError.style.opacity = 1;
    }else{
        password.style.border = "";
        confirmPassword.style.border = "";
        passwordError.style.opacity = 0;
        confirmPasswordError.style.opacity = 0;
    }
});