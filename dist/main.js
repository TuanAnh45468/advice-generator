const adviceID = document.getElementById("advice-id");
const adviceQuote = document.getElementById("advice-quote");
let advice =
  "Smile and the world smiles with you. Frown and you're on your own.";
let id = 2;
adviceID.textContent = `Advice # ${id}`;
adviceQuote.textContent = '"' + advice + '"';

const diceBtn = document.getElementById("diceBtn");

diceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      id = data.slip.id;
      advice = data.slip.advice;

      adviceID.textContent = `Advice # ${id}`;
      adviceQuote.textContent = '"' + advice + '"';
    })
    .catch((error) => console.error("Error: ", error));
});
