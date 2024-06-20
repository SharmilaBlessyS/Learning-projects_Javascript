let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

startButton.addEventListener('click', () => {
    startStopwatch();
});

stopButton.addEventListener('click', () => {
    stopStopwatch();
});

resetButton.addEventListener('click', () => {
    stopStopwatch();
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    startStopwatch(); // Start immediately after resetting
});

updateDisplay();
