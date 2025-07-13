const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


let timeLeft = 15000;

function updateTimer() {
  let minutes = Math.floor(timeleft / 60);
  let seconds = timeleft % 60;
  let formattedTime = 
}





startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);