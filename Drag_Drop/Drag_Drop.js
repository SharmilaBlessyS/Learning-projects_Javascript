let lists = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let selected = null;  // Declare 'selected' variable in the outer scope

for (let list of lists) {  // Add 'let' for block-scoped variable declaration
    list.addEventListener("dragstart", function (e) {
        selected = e.target;  // Assign 'selected' here
    });
}

rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
    if (selected) {  // Check if 'selected' is not null
        rightBox.appendChild(selected);
        selected = null;
    }
});

leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
    if (selected) {  // Check if 'selected' is not null
        leftBox.appendChild(selected);
        selected = null;
    }
});
