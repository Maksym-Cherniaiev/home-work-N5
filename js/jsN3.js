document.querySelector(".print-stairs").addEventListener("click", showStairs);

class Stairs {
  constructor() {
    this.stair = "";
    this.stairContainer = document.querySelector(".stairs-go-here");
    this.stairsQuantity = document.querySelector(".stairs").value;
    this.counter = 0;
    this.countStairs();
  }
  // I could use here a FOR loop instead of DO WHILE.

  countStairs() {
    do {
      this.stair = this.stair + "#";
      this.stairElement = document.createElement("p");
      this.stairElement.textContent = this.stair;
      this.stairContainer.appendChild(this.stairElement);
      this.counter++;
    } while (this.counter < this.stairsQuantity);
  }
}

function showStairs() {
  let newStair = new Stairs();
}