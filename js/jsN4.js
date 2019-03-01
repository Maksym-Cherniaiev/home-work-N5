document.querySelector(".calc-sum").addEventListener("click", calculate);

class SumOfRange {
	constructor() {
  	this.sum = 0;
    this.nextValue = 0;
    this.resultSum = document.querySelector(".result-sum");
  	this.rangeStart = parseInt(document.querySelector(".range-start").value);
    this.rangeFinish = parseInt(document.querySelector(".range-finish").value);
    this.countSumOfRange();
  }
  // I didn't want to use FOR loop 
	countSumOfRange() {
  	while (this.rangeStart <= this.rangeFinish) {
      this.sum = this.sum + this.rangeStart;
      this.rangeStart++;
    }
    this.resultSum.textContent = this.sum;
  }
}

function calculate() {
	let newSum = new SumOfRange();
}
