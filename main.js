const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let molePosition;
let currentTime = 60;
let timerId = null;
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare =
    squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");
  molePosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == molePosition) {
      result++;
      score.textContent = result;
      molePosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 800);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Game Over! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
