const display = document.getElementById('display');
const previousAnsDisplay = document.getElementById('previous-ans');
const buttons = document.querySelectorAll('.btn');
let currentExpression = '';
let lastAnswer = 0;
buttons.forEach(button => {
button.addEventListener('click', () => {
        const text = button.innerText;
const action = button.dataset.action;

if (action === 'clear') {
currentExpression = ''; display.innerText = '0';
} else if (action === 'calculate') {
calculateResult();
} else {
appendValue(text);
}
});
});
function appendValue(value) {
    if (display.innerText === '0' && value !== '.') {
        currentExpression = value;
} else {
   currentExpression += value;
 }
 display.innerText = currentExpression;
}
function calculateResult() {
    try {
let sanitizedExpression = currentExpression
            .replace(/÷/g, '/')
   .replace(/×/g, '*')
            .replace(/%/g, '/100');

        let result = eval(sanitizedExpression);

 if (result !== undefined) {
   if (!Number.isInteger(result)) {
 result = parseFloat(result.toFixed(6));
       }

 lastAnswer = result;
 previousAnsDisplay.innerText = `Ans = ${lastAnswer}`;
  display.innerText = result;
 currentExpression = result.toString();
        }
    } catch (error) {
 display.innerText = 'Error';
  currentExpression = '';
    }
}