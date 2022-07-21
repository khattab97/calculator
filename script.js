let DEFAULT_DISPLAY = '0'
let num = '';
let firstNum = '';
let operator = '';

let active_num = document.getElementById('active-num');
let submitted_num = document.getElementById('submitted-num');
let numButtons = Array.from(document.querySelectorAll(`[data-number]`));
numButtons.forEach(btn => btn.addEventListener('click', primeDisplay));
let operatorButtons = Array.from(document.querySelectorAll(`[data-operator]`));
operatorButtons.forEach(btn => btn.addEventListener('click', secDisplay));
let equalBtn = document.getElementById('equalsBtn');
equalBtn.addEventListener('click', result)


active_num.textContent = DEFAULT_DISPLAY;

function primeDisplay(e){
	console.log(e.target.getAttribute('data-number'))
	num += e.target.textContent
	active_num.textContent = num;
}

function secDisplay(e){
	if (firstNum.length) num = operate(firstNum, num, operator).toString();
	firstNum = num;
	submitted_num.textContent = firstNum;
	num = '';

	switch (e.target.textContent){
		case '+':
			operator = '+';
			break;
		case '-':
			operator = '-';
			break;
		case '×':
			operator = '*';
			break;
		default:
			operator = '/';
	}
}


function result(e){
	if (firstNum.length){
		num = operate(firstNum, num, operator).toString();
		active_num.textContent = num;
		firstNum = ''
		submitted_num.textContent = firstNum;
	}
}


function operate(num1, num2, operator){
	num1 = +num1;
	num2 = +num2;
	switch (operator){
		case '+':
			return add(num1, num2);
		case '-':
			return subtract(num1, num2);
		case '*':
			return multiply(num1, num2);
		case '/':
			return divide(num1, num2);
	}
}

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b){
	return b > 0? a / b : undefined;
}