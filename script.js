let DEFAULT_DISPLAY = '0'
let num = ''

let active_num = document.getElementById('active-num');
let numButtons = Array.from(document.querySelectorAll(`[data-number]`));
numButtons.forEach(btn => btn.addEventListener('click', primeDisplay));



active_num.textContent = DEFAULT_DISPLAY;

function primeDisplay(e){
	console.log(e.target.getAttribute('data-number'))
	num += e.target.getAttribute('data-number')
	active_num.textContent = num;
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