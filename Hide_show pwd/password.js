let showPassword = document.getElementById('password');
let button = document.getElementById('pwd');

button.addEventListener("click", () => {
    if (showPassword.value == '') {
        alert("Please enter your password!!");
        button.src = "images/eye-close.png";

    }
    else if (showPassword.type === 'password') {
        showPassword.type = 'text';
        button.src = "images/eye-open.png"
    } else {
        showPassword.type = 'password';
        button.src = "images/eye-close.png"
    }
});
