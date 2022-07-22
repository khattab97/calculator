let DEFAULT_DISPLAY = '0'
let num = '';
let firstNum = '';
let operator = '';

let active_num = document.getElementById('active-num');
let submitted_num = document.getElementById('submitted-num');
let numButtons = Array.from(document.querySelectorAll(`[data-number]`));
numButtons.forEach(btn => btn.addEventListener('click', primeDisplay));
let pointBtn = document.getElementById('pointBtn');
pointBtn.addEventListener('click', primeDisplay);
let operatorButtons = Array.from(document.querySelectorAll(`[data-operator]`));
operatorButtons.forEach(btn => btn.addEventListener('click', secDisplay));
let equalBtn = document.getElementById('equalsBtn');
equalBtn.addEventListener('click', result)
let clear = document.getElementById('clear');
clear.onclick = function (){
	firstNum = '';
	num = '';
	active_num.textContent = DEFAULT_DISPLAY;
	submitted_num.textContent = ''
}

let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', () => {
	num = num.slice(0, -1);
	active_num.textContent = num;
});


active_num.textContent = DEFAULT_DISPLAY;

function primeDisplay(e){
	console.log(e.target.getAttribute('data-number'))
	if (num.length < 11) {
		num += e.target.textContent
		active_num.textContent = num;
	}
}

function secDisplay(e){
	if (firstNum.length) num = operate(firstNum, num, operator).toString();
	operator = e.target.textContent
	firstNum = active_num.textContent;
	submitted_num.textContent = `${firstNum} ${operator} `;
	num = '';
}


function result(e){
	if (firstNum.length && num.length){
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
		case '×':
			return multiply(num1, num2);
		case '÷':
			let res = divide(num1, num2);
			if(res) return Math.round(res*1000)/1000;
			alert('Cant Divide By ZERO')
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