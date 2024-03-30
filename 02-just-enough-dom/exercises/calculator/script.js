//'use strict';

/* Calculator

	Do math with two numbers.

*/

// --- save important DON elements to variables ---

const leftNumberEl = document.getElementById('left').value;
const rightNumberEl = document.getElementById('right').value;

const addButton = document.getElementById('add');
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const displayEl = document.getElementById('display-actual');

// --- add event listeners + handlers ---

addButton.addEventListener('click', () => {
	const leftNum = Number(leftNumberEl);
	const rightNum = Number(rightNumberEl);

	const sum = leftNum + rightNum;

	displayEl.innerHTML = `${leftNum} + ${rightNum} = ${sum}`;
});

subtractButton.addEventListener('click', () => {
		const leftNum = Number(leftNumberEl);
	const rightNum = Number(rightNumberEl);

	const sum = leftNum - rightNum;

	displayEl.innerHTML = `${leftNum} - ${rightNum} = ${sum}`;
});

multiplyButton.addEventListener('click', () => {
	const leftNum = Number(leftNumberEl);
	const rightNum = Number(rightNumberEl);

	const sum = leftNum * rightNum;

	displayEl.innerHTML = `${leftNum} * ${rightNum} = ${sum}`;
});

divideButton.addEventListener('click', () => {
	const leftNum = Number(leftNumberEl);
	const rightNum = Number(rightNumberEl);

	const sum = leftNum / rightNum;

	displayEl.innerHTML = `${leftNum} / ${rightNum} = ${sum}`;
});
