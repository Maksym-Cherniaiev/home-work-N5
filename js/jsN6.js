document.querySelector(".calc-height").addEventListener("click", printPyramid);

class Pyramid {
  constructor() {
    this.rowCount = 0;
    this.result = document.querySelector(".pyramid");
    this.height = parseInt(document.querySelector(".pyramid-height").value);
    this.showMessage();
  }

  showMessage() {
    this.pyramidMessage = document.querySelector(".pyramid-message");
    this.pyramidMessage.classList.add("piramid-message-visible");
  }
}

class CountSpace extends Pyramid {
  constructor() {
    super();
    this.createPyramid();
  }
  
  createPyramid() {
    for (this.rowCount; this.rowCount < this.height; this.rowCount++) {
      this.newRow = document.createElement("p");
      this.space = "_".repeat(this.height - this.rowCount);
      this.sign = "#".repeat(this.rowCount * 2 + 1);
      this.newRow.textContent = this.space + this.sign;
      this.result.appendChild(this.newRow);
    }
  }
}

function printPyramid() {
  let newPyramid = new CountSpace();
}