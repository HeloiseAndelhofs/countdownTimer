const timerChoices = document.querySelectorAll(".timerChoice");
const customTimerInput = document.getElementById("custom");
const timeLeftDisplay = document.getElementById("timeLeft");
const timeEndDisplay = document.getElementById("timeEnd");
const stopTimer = document.getElementById("stop");

console.log(customTimerInput);

let x;


function countdownTimer(time){

    clearInterval(x)


    const arrivedTime = new Date(Date.now() + time);


    x = setInterval(() => {
        
        // const arrivedTimeCustom = new Date(Date.now() + customTimerInput);
        
        
        const distance = arrivedTime - Date.now();
    
    
    
    
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        timeLeftDisplay.innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";
    
    }, 1000);
};



function stopCounter(){
    clearInterval(x);
    x = null;
};

timerChoices.forEach((el) => {
    el.addEventListener("click", function(){
        const dataTime = el.getAttribute("data-time");
        countdownTimer(parseInt(dataTime));
    });
});


stopTimer.addEventListener("click", stopCounter);