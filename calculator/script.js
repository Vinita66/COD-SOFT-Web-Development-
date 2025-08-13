let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value;
    let result = 0;

    try {
        // Match numbers and operators separately
        let numbers = expression.split(/[\+\-\*\/]/).map(Number);
        let operators = expression.replace(/[0-9]|\./g, "").split("");

        if (numbers.length === 0) return;

        // Start with the first number
        result = numbers[0];

        // Apply operations one by one
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "+") {
                result += numbers[i + 1];
            } else if (operators[i] === "-") {
                result -= numbers[i + 1];
            } else if (operators[i] === "*") {
                result *= numbers[i + 1];
            } else if (operators[i] === "/") {
                result /= numbers[i + 1];
            }
        }

        display.value = result;
    } catch {
        display.value = "Error";
    }
}
