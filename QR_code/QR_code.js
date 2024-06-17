let imgBox = document.getElementById('box');
let qrImage = document.getElementById('qrImg');
let inputBox = document.getElementById('input-box');

function generateQR() {
    if (inputBox.value.trim() !== "") {  // Check if the input is not an empty string
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputBox.value);
        imgBox.classList.add('show-img');
    } else {
        inputBox.classList.add('error');
        setTimeout(() => {
            inputBox.classList.remove('error');
        }, 1000);
    }
}
