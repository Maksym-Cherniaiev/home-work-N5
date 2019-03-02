document.querySelector(".transform-uppercase").addEventListener("click", modifyText);

class UpperCaseText {
	constructor() {
  	this.modifiedString = "";
  	this.originString = document.querySelector(".mixed-text").value;
    this.result = document.querySelector(".uppercase-text");
    this.strToArr();
    this.noBuildIn();
    this.ifCapital();
    this.ifSmall();
  }
  
  // this task was pretty interesting
  strToArr() {
  	this.arrString = this.originString.split("");
  }
  
  ifCapital() {
  	this.modifiedString += String.fromCharCode(this.charCodeLetter);
  }
  ifSmall() {
  	let upLetter = String.fromCharCode(this.charCodeLetter - 32);
    this.modifiedString += upLetter;
  }
  // difference in ASCII decimal betwen upper and lower characters is 32
  noBuildIn() {
    this.arrString.forEach(letter => {
    	this.charCodeLetter = letter.charCodeAt();
      if (this.charCodeLetter < 97 || this.charCodeLetter > 122) {
      	this.ifCapital();
      } else if (this.charCodeLetter >= 97 && this.charCodeLetter <= 122) {
      	this.ifSmall();
      }
      this.result.textContent = this.modifiedString;
    });
  }
}

function modifyText() {
	let upperCasedText = new UpperCaseText();
}