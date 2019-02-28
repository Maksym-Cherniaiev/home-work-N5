document.querySelector(".changeText").addEventListener("click", getText);

class Mirror {
	constructor() {
  	this.result = document.querySelector(".mirrorText-result");
  	this.originalText = document.querySelector(".mirrorText").value;
    this.reverseText();
  }
  
  reverseText() {
    this.result.textContent = this.originalText.split("").reverse().join("");
  }
}

function getText() {
	let mirroredText = new Mirror();
}