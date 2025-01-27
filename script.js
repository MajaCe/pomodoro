let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const statusText = document.getElementById('status-text');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'Take a Break! ⏸️';
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft === 0) {
                clearInterval(timerId);
                isRunning = false;
                startButton.textContent = "Let's Play! 🚀";
                alert('Woohoo! You did it! Time for a well-deserved break! 🎉');
                statusText.textContent = 'Super job! Time to recharge! 🌈';
            }
        }, 1000);
    } else {
        clearInterval(timerId);
        isRunning = false;
        startButton.textContent = "Let's Play! 🚀";
    }
}

function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    timeLeft = 25 * 60;
    startButton.textContent = "Let's Play! 🚀";
    statusText.textContent = 'Ready for an adventure? 🎮';
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display
updateDisplay(); 