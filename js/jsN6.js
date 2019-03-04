document.querySelector(".calc-height").addEventListener("click", printPyramid);

class Pyramid {
  constructor() {
    this.rowCount = 0;
    this.result = document.querySelector(".pyramid");
    this.height = +(document.querySelector(".pyramid-height").value);
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
      this.newRow.classList.add("white-space");
      this.space = "  ".repeat(this.height - this.rowCount);
      this.sign = "#".repeat(this.rowCount * 2 + 1);
      this.newRow.textContent = this.space + this.sign;
      this.result.appendChild(this.newRow);
    }
  }
}

function printPyramid() {
  let newPyramid = new CountSpace();
}