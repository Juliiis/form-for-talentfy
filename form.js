const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail(loginForm.email.value)
    validatePhone(loginForm.phone.value)
    // nameWithoutNumbers(loginForm.nameAndSurname.value)

    const user = {
      name: loginForm.nameAndSurname.value.split(" ")[0],
      surname: loginForm.nameAndSurname.value.split(" ").slice(1).join(" "),
      phone: loginForm.phone.value,
      email: loginForm.email.value,
      password: loginForm.password.value,
      repeatPassword: loginForm.repeatPassword.value
    }
    
    console.log(user)
    loginForm.reset();
})

function validateEmail(email) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
   return true;
  }
}

function validatePhone(phone){
  var phoneRegExp = /^\d{9}$/;

  if(phone.match(phoneRegExp)) {
    return true;
  } else {
    alert('The phone must have 9 digits'); 
  }
 }
 
// function nameWithoutNumbers(nameAndSurname){
//   var numbers = "0123456789"
  
//   if(nameAndSurname === numbers){ 
//     return "The name cannot has numbers"
//   }
// }