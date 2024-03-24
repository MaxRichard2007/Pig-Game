"use strict";

// Selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const score = document.querySelector(".score");

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `image/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer()
  }
});

btnHold.addEventListener("click", function () {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  // score[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  // 2. Check if player's score is >= 100
  // Finish the game

  // Switch to the next players
  switchPlayer();
});
