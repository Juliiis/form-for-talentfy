const loginForm = document.getElementById("login-form");
const phoneErrorMessage = document.getElementById("phone-error");
const nameErrorMessage = document.getElementById("name-error");
const passwordErrorMessage = document.getElementById("password-error");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail(loginForm.email.value)
    validatePhone(loginForm.phone.value)
    validateName(loginForm.nameAndSurname.value)
    verifyPassword(loginForm.password.value, loginForm.repeatPassword.value)

    const user = {
      name: loginForm.nameAndSurname.value.split(" ")[0],
      surname: loginForm.nameAndSurname.value.split(" ").slice(1).join(" "),
      phone: loginForm.phone.value,
      email: loginForm.email.value,
      password: loginForm.password.value,
    }
    
    console.log(user)
})

function validatePhone(phone){
  var phoneRegExp = /^\d{9}$/;

  if(phone.match(phoneRegExp)) {
    loginForm.phone.classList.remove('input-error')
    phoneErrorMessage.classList.add('hidden')
    return true;
  } else {
    loginForm.phone.classList.add('input-error')
    phoneErrorMessage.classList.remove('hidden')
  }
}

function validateEmail(email) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    return true;
   } else {
     alert("The email must be valid")
   }
}
 
function validateName(nameAndSurname){
  var letters = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
  
  if(nameAndSurname.match(letters)){ 
    loginForm.nameAndSurname.classList.remove('input-error')
    nameErrorMessage.classList.add('hidden')
    return true;
  } else {
    loginForm.nameAndSurname.classList.add('input-error')
    nameErrorMessage.classList.remove('hidden')
  }
}

function verifyPassword(password, confirmPassword) {
  if (password === confirmPassword) {
    loginForm.password.classList.remove('input-error')
    loginForm.repeatPassword.classList.remove('input-error')
    passwordErrorMessage.classList.add('hidden')
    return true; 
  }

  loginForm.password.classList.add('input-error')
  loginForm.repeatPassword.classList.add('input-error')
  passwordErrorMessage.classList.remove('hidden')
}
