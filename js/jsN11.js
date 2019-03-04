document.querySelector(".count-fib-num").addEventListener("click", fibCount);

class Fibonacci {
	constructor() {
  	this.userNum = document.querySelector(".fib-task-number").value;
    this.result = document.querySelector(".fib-task-result");
    this.counter = 1;
    this.fibNumber = 0
    this.count();
  }
  
  count() {
  	let i = 0;
  	while (i < this.userNum) {
    	this.counter += this.fibNumber;
      this.fibNumber = this.counter - this.fibNumber;
      i++;
    }
    this.result.textContent = this.fibNumber;
  }
}

function fibCount() {
  let newNumber = new Fibonacci();
}