'use strict';

/* Upside-Down Pyramid



*/

// --- saved DOM Elements ---

const letter = document.getElementById('to-pyramid');
const doIt = document.getElementById('pyramid-it');
const output = document.getElementById('pyramided'); 
// --- user interaction ---

doIt.addEventListener('click', () => {
	debugger;

	// read user text
let text=letter.value;
	// create the pyramid
let result="";
	for (let i=0;i<text.length; i++) {
		for (let j=0; j<text.length-i;j++ ) {
      result+=(text[j]);
    }
    result+= '\n';
      
	}

	// display the pyramid
    output.innerHTML=result;  

});
