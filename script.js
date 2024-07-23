const time = document.querySelector(".time");
const start = document.querySelector(".btn-start");
const stop = document.querySelector(".btn-pause");
const reset = document.querySelector(".btn-reset");

let interval;
let seconds = 0;

start.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;
            let date = new Date(seconds * 1000);
            let hours = date.toISOString().substring(11, 19);
            time.textContent = hours;
        }, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    time.textContent = '00:00:00';
});
