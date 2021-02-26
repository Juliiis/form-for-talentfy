const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail(loginForm.email.value)
    validatePhone(loginForm.phone.value)
    validateName(loginForm.nameAndSurname.value)

    const user = {
      name: loginForm.nameAndSurname.value.split(" ")[0],
      surname: loginForm.nameAndSurname.value.split(" ").slice(1).join(" "),
      phone: loginForm.phone.value,
      email: loginForm.email.value,
      password: loginForm.pswd.value,
      repeatPassword: loginForm.repeatPassword.value
    }
    
    console.log(user)
    loginForm.reset();
})

function validateEmail(email) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
   return true;
  } else "invalid e-mail"
}

function validatePhone(phone){
  var phoneRegExp = /^\d{9}$/;

  if(phone.match(phoneRegExp)) {
    return true;
  } else {
    alert('The phone must have 9 digits'); 
  }
 }
 
function validateName(nameAndSurname){
  var letters = /^[A-Za-z]+$/;
  
  if(nameAndSurname.match(letters)){ 
    return true;
  } else {
    alert('Only alphabet letters'); 
  }
}

// function verifyPassword() {
//   var password = document.getElementById("pswd").value;
//   var confirmPassword = document.getElementById("repeatPassword").value;
//   if (password !== confirmPassword) {
//       return alert("The passwords are not the same");   
//   }
// }
