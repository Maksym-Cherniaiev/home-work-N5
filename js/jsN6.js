document.querySelector(".calc-height").addEventListener("click", printPyramid);

class Pyramid {
  constructor() {
    this.result = document.querySelector(".pyramid");
    this.height = parseInt(document.querySelector(".pyramid-height").value);
    this.createPyramid();
  }

  // this one was quite hard ))

  createPyramid() {
    for (let i = 0; i < this.height; i++) {
      let newRow = document.createElement("p");
      let row = "";
      for (let j = 1; j < this.height - i;   j++) {
        row += "_";
      }
      for (let k = 1; k <= (2 * i + 1); k++) {
        row += "#";
      }
      newRow.textContent = row;
      this.result.appendChild(newRow);
    }
  }
}

function printPyramid() {
  let newPyramid = new Pyramid();
}