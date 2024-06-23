let icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.className = "fa-regular fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}
