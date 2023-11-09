const timerChoice = document.querySelectorAll(".timerChoice");
const customTimerInput = document.getElementById("custom");
const timeLeft = document.getElementById("timeLeft");
const timeEnd = document.getElementById("timeEnd");

// function timer(seconds) {
//     timeLeft.innerHTML = ``
// }

const theBigDay = new Date();
theBigDay.setSeconds(30);
console.log(theBigDay);

// timerChoice.addEventListener("click", timer)