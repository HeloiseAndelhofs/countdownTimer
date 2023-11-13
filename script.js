// const timerChoices = document.querySelectorAll(".timerChoice");
// const customTimerInput = document.getElementById("custom");
const timeLeftDisplay = document.getElementById("timeLeft");
const timeEndDisplay = document.getElementById("timeEnd");
const stopTimer = document.getElementById("stop");

// const currentTime = new Date(Date.now()).toLocaleTimeString();
// console.log(currentTime);

const timerChoices = 22620000;
const arrivedTime = new Date(Date.now() + timerChoices);
let x = setInterval(function log() {
    const customTimerInput = 390000;
    
    const arrivedTimeCustom = new Date(Date.now() + customTimerInput);
    
    
    const distance = arrivedTime - Date.now();
    console.log(distance);
    timeLeftDisplay.innerHTML = distance;
    // console.log(arrivedTime);
}, 1000);

function stopCounter(){
    clearInterval(x);
}


// function timer(seconds) {
//     const date = new Date();
//     timeLeftDisplay.innerHTML = date.toLocaleTimeString()
// };

// clearInterval(myInterval);


// timerChoice.addEventListener("click", timer);




// timerChoices.addEventListener("click", log);


stopTimer.addEventListener("click", stopCounter)