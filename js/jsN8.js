document.querySelector(".check-pass").addEventListener("click", checkPass);

class PassHandler {
	constructor() {
  	this.password = ["ironman", "ostap", "cursor"];
  	this.userValue = document.querySelector(".password-string").value;
    this.result = document.querySelector(".true-false-result");
    this.checkIfCorrect();
  }
  
  checkIfCorrect() {
  	for (let i = 0; i < this.password.length; i++) {
    	if (this.userValue.toLowerCase() === this.password[i].toLowerCase()) {
        this.result.textContent = "true";
        return this.userValue;
      } else {
        this.result.textContent = "false";
      }
    }
  }
}

function checkPass() {
	let check = new PassHandler();
}