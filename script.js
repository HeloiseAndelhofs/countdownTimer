const timerChoices = document.querySelectorAll(".timerChoice");
const customTimerInput = document.getElementById("custom");
const timeLeftDisplay = document.getElementById("timeLeft");
const timeEndDisplay = document.getElementById("timeEnd");

const currentTime = new Date(Date.now()).toLocaleTimeString();
console.log(currentTime);

// const myInterval = setInterval(timer, 1000);

// function timer(seconds) {
//     const date = new Date();
//     timeLeftDisplay.innerHTML = date.toLocaleTimeString()
// };

// clearInterval(myInterval);


// timerChoice.addEventListener("click", timer);

function log() {
    console.log("bouton");
}


timerChoices.addEventListener("click", log);