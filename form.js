const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
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

function ValidateEmail(email) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
   return true;
 } return false;
}