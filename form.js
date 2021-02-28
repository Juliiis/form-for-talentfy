const loginForm = document.getElementById("login-form");

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
    loginForm.reset();
})

function validatePhone(phone){
  var phoneRegExp = /^\d{9}$/;

  if(phone.match(phoneRegExp)) {
    return true;
  } else {
    alert('The phone must have 9 digits'); 
  }
 }

 function validateEmail(email) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    return true;
   } else {
     alert("invalid e-mail")
   }
 }
 
function validateName(nameAndSurname){
  var letters = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
  
  if(nameAndSurname.match(letters)){ 
    return true;
  } else {
    alert('Only alphabet letters'); 
  }
}

function verifyPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
      return alert("The passwords are not the same");   
  }
}
