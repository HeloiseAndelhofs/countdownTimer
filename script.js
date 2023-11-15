const timerChoices = document.querySelectorAll(".timerChoice");
const timeLeftDisplay = document.getElementById("timeLeft");
const timeEndDisplay = document.getElementById("timeEnd");
const stopTimer = document.getElementById("stop");


document.getElementById("formSubmit").addEventListener("click", (event) => {
    event.preventDefault()
    let customTimerInput = document.getElementById("custom").value;
    console.log(customTimerInput);
    document.getElementById("customTimer").reset();
})


let x;


function countdownTimer(time){

    clearInterval(x)


    const arrivedTime = new Date(Date.now() + time);


    x = setInterval(() => {
                
        
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
};

timerChoices.forEach((el) => {
    el.addEventListener("click", function(){
        const dataTime = el.getAttribute("data-time");
        countdownTimer(parseInt(dataTime));
    });
});


stopTimer.addEventListener("click", stopCounter);