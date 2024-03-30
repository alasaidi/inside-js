'use strict';

/* Repeat Characters



*/

// --- saved DOM Elements ---

const letter = document.getElementById('user-text');
const num = document.getElementById('number-of-times');
const doIt = document.getElementById('repeat-them');
const output = document.getElementById('repeated-output'); 

// --- user interaction ---

doIt.addEventListener('click', () => {
	debugger;

	// read user valueslet 
let text=letter.value;
	// repeat the characters in the text
let result="";
	for (let i=0; i<text.length; i++) {
		for (let j=0;j< num.value; j++) {
      result+=text[i];
    }
	}

	// display the text with repeated characters
  output.innerHTML=result;
});
