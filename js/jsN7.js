document.querySelector(".transform").addEventListener("click", transformLetters);

class TransformLetters {
	constructor() {
  	this.text = document.querySelector(".first-last-upercase").value;
    this.result = document.querySelector(".transformed-text");
    this.toUpperCaseLetters();
  }
  
  toUpperCaseLetters() {
  	let firstLetterUp = this.text.charAt(0).toUpperCase() + this.text.slice(1).toLowerCase();
    let lastLetterUp = firstLetterUp.slice(0, -1) + firstLetterUp.charAt(firstLetterUp.length - 1).toUpperCase();
    this.result.textContent = lastLetterUp;
  }
}

function transformLetters() {
	let newText = new TransformLetters();
}