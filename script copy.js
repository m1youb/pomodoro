const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


let timeLeft = 15000;

function updateTimer() {
  let minutes = Math.floor(timeleft / 60);
  let seconds = timeleft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  
  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  
}



startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);