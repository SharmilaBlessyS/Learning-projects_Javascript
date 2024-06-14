let inputBox = document.getElementById('result');
let equalButton = document.getElementById('equal');

function display(num) {
    inputBox.value += num;
}

function Calc() {
    try {
        if (inputBox.value.trim() === "") {
            inputBox.value = "";
        } else {
            inputBox.value = eval(inputBox.value);
        }
    } catch (err) {
        inputBox.value = "Syntax Error";
    }
}

function clearInput() {
    inputBox.value = "";
}

function del() {
    inputBox.value = inputBox.value.slice(0, -1);
}



