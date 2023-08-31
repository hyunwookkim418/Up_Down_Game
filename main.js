let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // Remaining Chances
let userValueList = []; // The history of user's inputs 

chanceArea.innerHTML = `Remaining Chances:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Correct", computerNumber);
}

function play() {
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "Input a number between 1 and 100.";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "You already input the number. Give me a different number.";

    return;
  }

  chances--;
  chanceArea.innerHTML = `Remaining Chances:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultText.textContent = "Correct!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
  "https://media0.giphy.com/media/m9rWdcG4Irwz6Yx0Bf/giphy.gif?cid=ecf05e47yzs07h9rh9ngyy955u75zvqxazz4hf3qtoqccwki&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  resultText.textContent = "Give me the Answer!";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `Remaining Chances:${chances}`;
  userValueList = [];
}

pickRandomNumber();