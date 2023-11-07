document.getElementById("addButton").addEventListener("click", add);
document.getElementById("subtractButton").addEventListener("click", subtract);
document.getElementById("multiplyButton").addEventListener("click", multiply);
document.getElementById("divideButton").addEventListener("click", divide);

function add() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const result = operand1 + operand2;
    document.getElementById("result").textContent = result;
}

function subtract() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const result = operand1 - operand2;
    document.getElementById("result").textContent = result;
}

function multiply() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const result = operand1 * operand2;
    document.getElementById("result").textContent = result;
}

function divide() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    if (operand2 === 0) {
        document.getElementById("result").textContent = "Error: División por cero";
    } else {
        const result = operand1 / operand2;
        document.getElementById("result").textContent = result;
    }
}
