document.querySelector(".executeOperation").addEventListener("click", convert)

class Converter {
	constructor () {
  	this.amount = document.querySelector(".converter").value;
    this.result = document.querySelector(".convetionResult");
    this.usdExchange = 8;
    this.convertToUah();
  }
  
  convertToUah() {
  	let uahAmount = this.amount * this.usdExchange;
    this.result.textContent = uahAmount;
  }
}

function convert() {
	let exchangeOperation = new Converter();
}
