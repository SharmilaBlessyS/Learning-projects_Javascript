let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let msgError = document.getElementById('msg-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) { // Corrected regex to allow multiple characters before and after space
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'; // Correctly setting innerHTML to a string
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) { 
        phoneError.innerHTML = "Phone no should contain only digits"; // Corrected the error message
        return false;
    }
    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/)) { 
        emailError.innerHTML = "Email is invalid"; // Corrected the error message
        return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateMsg() {
    var msg = document.getElementById('contact-msg').value; // Corrected the variable name and ID
    var required = 30;
    var left = required - msg.length; // Corrected the length calculation

    if (left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
    }
    
    msgError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validateName() || !validateEmail() || !validateMsg()){
        submitError.style.display = "block";
        submitError.innerHTML= "please fill the all columns";
        setTimeout(function(){
            submitError.style.display = "none";
        },3000)
        return false;
        
    }
}

