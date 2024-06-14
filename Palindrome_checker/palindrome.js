var inputField = document.getElementById('text-input');
var button = document.getElementById('check-btn');
var result = document.getElementById('demo');

function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

button.addEventListener("click", function () {
    var inputValue = inputField.value.trim();

    if (inputValue === '') {
        alert("Please input a value");
    } else if (isPalindrome(inputValue)) {

        result.textContent = `${inputValue} is a palindrome`;

    } else {

        result.textContent = `${inputValue} is not a palindrome`;
    }
    inputField.value = '';
});