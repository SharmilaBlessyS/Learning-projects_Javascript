const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
const time = new Date();
date.innerHTML = (time.getDate() <10 ? "0" : "") + time.getDate();
day.innerHTML = week[time.getDay()];
month.innerHTML = months[time.getMonth()];
year.innerHTML = time.getFullYear();

