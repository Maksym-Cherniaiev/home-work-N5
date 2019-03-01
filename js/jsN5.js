document.querySelector(".find-min").addEventListener("click", findSmalest);

class SmalestNum {
  constructor() {
    this.numA = document.querySelector(".num-a").value;
    this.numB = document.querySelector(".num-b").value;
    this.numC = document.querySelector(".num-c").value;
    this.numD = document.querySelector(".num-d").value;
    this.resultPlace = document.querySelector(".result");
    this.arrOfNums();
  }
  
  arrOfNums() {
    this.arrOfNums = [this.numA, this.numB, this.numC, this.numD];
    for (let i = 0; i < this.arrOfNums.length; i++) {
    	if (parseInt(this.arrOfNums[i]) < parseInt(this.arrOfNums[0])) {
      	this.arrOfNums[0] = this.arrOfNums[i];
      }
    }
    this.resultPlace.textContent = this.arrOfNums[0];
  }
}

function findSmalest() {
  let someNumber = new SmalestNum();
}
