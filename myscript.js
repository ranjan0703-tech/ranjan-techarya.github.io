let expression = '';

function appendNumber(num) {
  expression += num;
  updateDisplay();
}

function appendOperation(op) {
  const last = expression.slice(-1);
  if ('+-*/'.includes(last)) {
    expression = expression.slice(0, -1); // Replace last operator
  }
  expression += op;
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
  } catch (e) {
    expression = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}
