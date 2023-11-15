// variables

const timerChoices = document.querySelectorAll(".timerChoice");
const timeLeftDisplay = document.getElementById("timeLeft");
const timeEndDisplay = document.getElementById("timeEnd");
const stopTimer = document.getElementById("stop");
let x; // paramètre de clear interval

// functions

// reutilisable pour formater la date de millisecondes en hh:mm:ss
function formatedDate(distance){

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    timeLeftDisplay.innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
}

// countdown timer des boutons
function countdownTimer(time){

    clearInterval(x)

    const arrivedTime = new Date(Date.now() + time);

    x = setInterval(() => {
                
        const distance = arrivedTime - Date.now();
    
        formatedDate(distance)
    
    }, 1000);
};


// arreter le timer
function stopCounter(){
    clearInterval(x);
};


// add event listener

// add event listener et fonction de l'input
document.getElementById("customTimer").addEventListener("submit", (event) => {

    event.preventDefault()
    document.getElementById("customTimer").reset();

    let customTimerInput = document.getElementById("custom").value;

    clearInterval(x);

    const inputMilliseconds = parseInt(customTimerInput * 60000);

    const arrivedTime = new Date(Date.now() + inputMilliseconds);
    
    x = setInterval(() => {
        const distance = arrivedTime - Date.now();
        
        
formatedDate(distance)
        
    }, 1000)

    timeEndDisplay.innerHTML = `Timer will end at ${arrivedTime.getHours().toString().padStart(2, "0")}:${arrivedTime.getMinutes().toString().padStart(2, "0")}`;
})







// add event listener pour les boutons
timerChoices.forEach((el) => {
    el.addEventListener("click", function(){
        const dataTime = el.getAttribute("data-time");
        countdownTimer(parseInt(dataTime));
    });
});

// add event listener stop
stopTimer.addEventListener("click", stopCounter);