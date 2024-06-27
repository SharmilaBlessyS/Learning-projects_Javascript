const scriptURL = 'https://script.google.com/macros/s/AKfycbznf6BGUDxqWZq0ehvE7quJjVDAmKgFQlu5x96NxRv0GO0cYBPZVIv66TGpmqtSbLLH/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
const emailInput = document.getElementById('text');
const display = document.getElementById('display');


form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You for Subscribing!";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000)
        form.reset();
        display.textContent = ''; // Clear display after form submission
    })
    .catch(error => console.error('Error!', error.message))
});

emailInput.addEventListener('input', function(e) {
  display.textContent = e.target.value;
});
