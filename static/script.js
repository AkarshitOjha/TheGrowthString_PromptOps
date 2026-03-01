document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const num1 = parseFloat(document.querySelector('input[name="num1"]').value);
        const num2 = parseFloat(document.querySelector('input[name="num2"]').value);
        const operator = document.querySelector('select[name="operator"]').value;

        calculateResult(num1, num2, operator);
    });
});

function calculateResult(num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    displayResult(result);
}

function displayResult(result) {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = `The result is: ${result}`;
}