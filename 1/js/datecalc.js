import { formatError } from "./common.js";
import { diffDates, diffToHtml } from "./diffDates.js";


const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');

dateCalcForm.addEventListener('submit', handleCalcDates);

// const formatError = text => `
//     <span style="color:red;">${text}</span>
// `;

function handleCalcDates(event) {
    dateCalcResult.innerText = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const result = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(result);
    }
    else dateCalcResult.innerHTML = formatError("Ошибка!");
};

