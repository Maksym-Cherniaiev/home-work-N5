document.querySelector(".remove-duplicates").addEventListener("click", removeDuplicates);

class StringHandler {
  constructor() {
    this.userText = document.querySelector(".task-nine-text").value;
    this.result = document.querySelector(".no-duplicates");
    this.uniqArr = [];
    this.removeDuplicate();
  }
  
  // In my opinion this task is the hardest.
  // If not these two conditions (spaces and case insensitive) it would be the easiest task

  removeDuplicate() {
    let newArr = Array.from(this.userText).forEach(letter => {
      let changedLetter = letter.toLowerCase();
      if (letter === " " || this.uniqArr.indexOf(changedLetter) == -1) {
        this.uniqArr.push(changedLetter);
     }
    });
    this.result.textContent = this.uniqArr.join("");
  }

  // ----This one works fine, but I don't like it.-----

  /* removeDuplicate() {
    for (let i = 0; i < this.userText.length; i++) {
      if (this.userText[i] === " " || this.uniqArr.toLowerCase().indexOf(this.userText.toLowerCase().charAt(i)) == -1) {
        this.uniqArr += this.userText[i];
      }
    }
    this.result.textContent = this.uniqArr;
  } */

  // ----Best one, but it's case sensitive.------------

 /*  removeDuplicate() {
    let newArr = Array.from(new Set(this.userText)); //Used Array.from because Set returns object.
    this.result.textContent = newArr.join("");
  } */
}

function removeDuplicates() {
  let someText = new StringHandler();
}