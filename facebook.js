document.getElementById("loginForm").addEventListener("submit" , function(event){
    event.preventDefault();

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if (email && password) {
    alert('Login successful! Email: ' + email);
} else {
    alert('Please fill out all fields.');
}

});
