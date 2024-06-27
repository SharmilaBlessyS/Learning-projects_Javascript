let hours = document.getElementById('hrs');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');


setInterval(()=>{
    let time = new Date();
    hours.innerHTML = (time.getHours()<10 ? "0": "")+ time.getHours();
    minutes.innerHTML = (time.getMinutes()<10 ? "0": "")+time.getMinutes();
    seconds.innerHTML = (time.getSeconds()<10 ? "0": "")+time.getSeconds();
},10);
