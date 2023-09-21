"use strict";

// variables

const current0El = document.querySelector(".player--0");
const current1El = document.querySelector(".player--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const btnRoll = document.querySelector(".btn--roll");
const diceEl = document.querySelector(".dice");
const player0 = document.querySelector("#name--0");
const player1 = document.querySelector("#name--1");
let currentScore = 0;
let currentPlayer = 0;
let finalscore = [0, 0];
let playingState = true;

// switch-fuction

const Switch = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  current0El.classList.toggle("player--active");
  current1El.classList.toggle("player--active");
};

// roll-function

btnRoll.addEventListener("click", function () {
  if (playingState) {
    const random = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = `imags/dice-${random}.png`;
    if (random !== 1) {
      currentScore += random;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      Switch();
    }
  }
});

// hold-function

btnHold.addEventListener("click", function () {
  if (playingState) {
    finalscore[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      finalscore[currentPlayer];
    if (finalscore[currentPlayer] >= 100) {
      diceEl.classList.add("hidden");
      playingState = false;
      document.getElementById(`name--${currentPlayer}`).textContent = `winneer`;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
    } else {
      Switch();
    }
  }
});

// new-game-functin

btnNew.addEventListener("click", function () {
  currentScore = 0;
  finalscore = [0, 0];
  playingState = true;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");
  document.getElementById(`score--0`).textContent = finalscore[0];
  document.getElementById(`score--1`).textContent = finalscore[1];
  player0.textContent = "Player 1";
  player1.textContent = "Player 2";
  Switch();
});
