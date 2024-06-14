const notesContainer = document.getElementsByClassName('text-container')[0]; // Access the first element
const button = document.getElementById('btn');
let notes = document.querySelectorAll('.input-box');


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

button.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box"; 
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    inputBox.appendChild(img); // Append img to inputBox
    notesContainer.appendChild(inputBox); // Append inputBox to notesContainer
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
notes =document.querySelectorAll('.input-box');
notes.forEach(nt =>{
    nt.onkeyup = function(){
        updateStorage();
    }
})
    }
})
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})