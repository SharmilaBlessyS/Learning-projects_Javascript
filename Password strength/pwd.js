let pwd = document.getElementById('pwd');
let msg = document.getElementById('msg');
let str = document.getElementById('strength');

pwd.addEventListener('input', () => {
    if (pwd.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (pwd.value.length < 4) {
        str.innerHTML = "weak"
        pwd.style.borderColor = "red";
        msg.style.color = "red";
    }
    else if (pwd.value.length >= 4 && pwd.value.length < 8) {
        str.innerHTML = "medium"
        pwd.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if (pwd.value.length >= 8) {
        str.innerHTML = "strong"
        pwd.style.borderColor = "green";
        msg.style.color = "green";
    }
})