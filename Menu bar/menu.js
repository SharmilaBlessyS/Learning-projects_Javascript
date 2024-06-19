let selectField = document.getElementById('fields');
let selectText = document.getElementById('text');
let options = document.getElementsByClassName('options');
let list = document.getElementById('list');
let arrowIocn = document.getElementById('icon');
selectField.onclick = function(){
list.classList.toggle('hide');
arrowIocn.classList.toggle('rotate');
}
for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIocn.classList.toggle('rotate');
    }
}
