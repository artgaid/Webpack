import { formatError } from "./common.js";

const timerStart = document.getElementById("timer__start");
const timerStop = document.getElementById("timer__stop");
const time = document.getElementsByName("allTime");
const timeResult = document.getElementById("timer__result");
let clickGo = 0;

timerStart.addEventListener('click', timerGo);

function timerGo(event) {
    let allTime = 0;

    if (clickGo < 1) {
        allTime = time[0].value;
        event.preventDefault();
        timeResult.innerHTML = allTime;
        clickGo++;

        if (timeResult.innerHTML > 0) {
            countdown(timeResult.innerHTML, (number) => {
                timeResult.innerHTML = number;
                console.log(number);
            });

        } else timeResult.innerHTML = formatError("Введите положительное число!");
    } else {
        allTime = timeResult.innerHTML;
        event.preventDefault();
        timeResult.innerHTML = allTime;

        if (timeResult.innerHTML > 0) {
            countdown(timeResult.innerHTML, (number) => {
                timeResult.innerHTML = number;
                console.log(number);
            });

        } else timeResult.innerHTML = formatError("Введите положительное число!");

    }

}

function countdown(number, cb) {
    timerStop.addEventListener('click', timerStp);
    let x = true;

    function dwn() {
        if (number < 1 || x == false) {
            clearInterval();
        } else {
            number--;
            cb(number);
        }
    }

    function timerStp(event) {
        event.preventDefault();
        x = false;
    }

    cb(number);
    setInterval(dwn, 1000);

}