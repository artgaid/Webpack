const dateCalcForm = document.getElementById('datecalc');
const timerForm = document.getElementById('timer');
const switchCalc = document.getElementById('switch__calc');
const switchTime = document.getElementById('switch__time');

switchTime.addEventListener('click', displayCalc);
switchCalc.addEventListener('click', displayTime);


function displayCalc() {
    event.preventDefault();
    dateCalcForm.style.display = "none";
    timerForm.style.display = "";
}

function displayTime() {
    event.preventDefault();
    dateCalcForm.style.display = "";
    timerForm.style.display = "none";
}
