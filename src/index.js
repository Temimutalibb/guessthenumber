const gameBody = document.querySelector(".game-body");
const gameDisplay = document.querySelector(".game-display");
const inputNumber = document.querySelector(".input-number");
const correctNumber = document.querySelector(".correct-number");
let correctNumberP = document.querySelector(".correct-number p");
const play = document.querySelector(".play");
const classone = document.querySelectorAll(".one");

///this is fofunction for playing the game ////

let currentIndex = 0;
let gameCount = 1;
let win = 0;
let lost = 0;
let divElement;
let buttonOver;

function checkGame() {
  let random = Math.floor(Math.random() * 9) + 1;
  let inputValue = Number(inputNumber.value);
  if (inputNumber.value === "") {
    alert("input number");
    return;
  }

  if (gameCount === 10) {
    gameOver();
  } else {
    if (inputValue === random) {
      win++;
      gameResult("*", "green");
      inputNumber.value = "";
      correctNumberP.textContent = random;
    } else {
      lost++;
      gameResult("x", "Red");
      inputNumber.value = "";
      correctNumberP.textContent = random;
    }
  }
  gameCount++;
}

inputNumber.addEventListener("focus", () => {
  correctNumberP.textContent = "guess the number";
});
play.addEventListener("click", checkGame);
/////////////////////////////////////

//function to input lost or win i con inside the circle box
function gameResult(yesorno, color) {
  for (let i = 0; i < classone.length; i++) {
    const element = classone[i];

    if (element.textContent.trim() === "") {
      element.textContent = yesorno;
      element.style.color = color;
      element.style.fontSize = "25px";
      break;
    }
  }
}
//////////////////////////////////////////////////

////this is the function for when the game is over
function gameOver() {
  play.disabled = true;
  inputNumber.disabled = true;

  const childElements = gameBody.querySelectorAll("*");
  childElements.forEach((element) => {
    element.style.display = "none";
  });

  divElement = document.createElement("div");
  buttonOver = document.createElement("button");

  divElement.style.color = "white";
  divElement.style.fontSize = "40px";
  divElement.style.textAlign = "center";
  buttonOver.style.height = "40px";
  buttonOver.style.fontSize = "25px";
  buttonOver.style.textAlign = "25px";
  buttonOver.textContent = "play again";
  buttonOver.style.color = "blue";
  buttonOver.style.margin = "0 auto";
  buttonOver.style.display = "block";

  gameBody.appendChild(divElement);
  gameBody.appendChild(buttonOver);

  const colors = ["red", "blue", "green", "yellow"];

  if (win > lost) {
    //if the number of right guess is more change the background color in 1 mins interval
    const intervalid = setInterval(() => {
      gameBody.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }, 1000);
    //then the text content should display winning emoji
    gameBody.style.backgroundColor = "green";
    const congratEmoji = "\uD83C\uDF89";
    divElement.textContent = congratEmoji;
  } else {
    divElement.textContent =
      "\uD83D\uDE22 \uD83D\uDE22 \uD83D\uDE22 \uD83D\uDE22" + "\nYou lost";
    gameBody.style.backgroundColor = "red";
  }

  buttonOver.addEventListener("click", resetGame);
}

function resetGame() {
  currentIndex = 0;
  gameCount = 1;
  win = 0;
  lost = 0;

  const resetChildElements = gameBody.querySelectorAll("*");
  resetChildElements.forEach((element) => {
    element.style.display = "block";
  });

  buttonOver.parentNode.removeChild(buttonOver);
  divElement.parentNode.removeChild(divElement);

  gameBody.style.backgroundColor = "white";
  gameDisplay.style.display = "flex";

  play.disabled = false;
  inputNumber.disabled = false;
  inputNumber.value = "";

  const childElements = gameDisplay.querySelectorAll("*");
  childElements.forEach((element) => {
    element.textContent = "";
  });
}
