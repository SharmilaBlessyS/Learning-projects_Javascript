var webDate = new Date("July 27, 2024 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = webDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Pad hours, minutes, and seconds with leading zero if less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('mins').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
    }

}, 100); // Interval set to 1000ms (1 second)
