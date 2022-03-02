// Declare any global variables we need
let headFlipCount = 0;
let tailFlipCount = 0;

let counts = {
  heads: 0,
  tails: 0
}

// Flip Button Click Handler
document.addEventListener("DOMContentLoaded", function () {
function handleFlipResult(result) {
  // result = "heads" || "tails"

  counts[result]++ // result = "heads" ==> counts["heads"] == counts.heads

  let img = document.querySelector('img')
  img.src = `./assets/images/penny-${result}.jpg`
  img.alt = `${result} face of a penny`

  // TODO: capitalize the result in the message
  document.querySelector('.message-container h3').textContent = `You flipped ${result}!`

  //update scoreboard
  document.querySelector(`#${result}`).textContent = counts[result]
  let headsPercent = Math.round(counts.heads/ (counts.heads+counts.tails) * 100)
  let tailsPercent = Math.round(counts.tails/ (counts.heads+counts.tails) * 100)
  document.querySelector('#heads-percent').textContent = headsPercent + `%`
  document.querySelector('#tails-percent').textContent = tailsPercent + `%`
}

  function handleFlip(e) {
    console.log("Flipping out");
    let isHeads = Math.random() >= 0.5;

    if (isHeads) {
     handleFlipResult('heads')
    } else {
      handleFlipResult('tails')
    }
  }

 // Clear Button Click Handler
  function handleClear(e) {
    console.log("Clear it out");

    // Reset global variables to 0
    counts.heads = counts.tails = 0

    // Update the scoreboard (same logic as in flip button click handler)
    //access all DOM elements and set back to 0
    document.querySelector('#heads').textContent = 0
    document.querySelector('#tails').textContent = 0
    document.querySelector('#heads-percent').textContent = '0%'
    document.querySelector('#tails-percent').textContent = '0%'

    document.querySelector('.message-container h3').textContent = 'Let\'s Get Rolling!'

  }

  // Add event listener and handler for flip and clear buttons
  document.querySelector("#flip").addEventListener("click", handleFlip);
  document.querySelector("#clear").addEventListener("click", handleClear);
});
