document.querySelector(".calc-height").addEventListener("click", printPyramid);

class Pyramid {
	constructor() {
  	this.row = "";
    this.result = document.querySelector(".pyramid");
  	this.height = parseInt(document.querySelector(".pyramid-height").value);
    this.createPyramid();
  }
  // Added CSS class because I wanted it to be shown in my document correctly.
  // I could use a "documetn.write" method, but it's a bad practice.
	
  createPyramid() {
    for (let i = 0; i < this.height; i++) {
      if (this.row >= "#") {
        this.row += "##";
        this.pyramidTier = document.createElement("p");
        this.pyramidTier.classList.add("centered");
        this.pyramidTier.textContent = this.row;
        this.result.appendChild(this.pyramidTier);
      } else if (this.row === "") {
        this.row += "#";
        this.pyramidTier = document.createElement("p");
        this.pyramidTier.classList.add("centered");
        this.pyramidTier.textContent = this.row;
        this.result.appendChild(this.pyramidTier);
      }
    }
  }
}

function printPyramid() {
	let newPyramid = new Pyramid();
}


// Here lies the real solution, nested loops helped me with this.
// I don't know how to implement this in my HTML-document :/

/* function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j < n-i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= (2*i+1); k++) {
      row = row + "#";
    }
    console.log(row);
  }
} */