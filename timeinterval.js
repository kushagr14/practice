//we'll show the seconds at every second

const textEl = document.getElementById("text");
let seconds = 0;
const timer= setInterval(() => {
    textEl.textContent =    `${seconds}` ;
    seconds++;
    if(seconds >= 6){
        clearInterval(timer);
    }
}, 1000);

