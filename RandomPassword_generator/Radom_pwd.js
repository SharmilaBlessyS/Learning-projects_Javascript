const passwordBox = document.getElementById('pwd');
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()+_-~={}[]|\?/><";
const all = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += all[Math.floor(Math.random() * all.length)];

    }
    passwordBox.value = password;
}

function copyPasswod(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied !!");
}
