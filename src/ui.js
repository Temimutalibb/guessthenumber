const classOne = document.querySelectorAll(".one");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/////UI function //////
function createBall() {
  const ball = document.createElement("div");
  ball.classList.add("ball");
  const size = Math.random() * 50 + 10; // Random size between 10 and 60
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;
  ball.style.backgroundColor = getRandomColor();

  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size);
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  document.querySelector(".container").appendChild(ball);
}

for (let i = 0; i < 100; i++) {
  createBall();
}

let index = 0;

function oneAnimation() {
  classOne[index].style.transform = "scale(1.5)";
  setTimeout(() => {
    classOne[index].style.transform = "scale(1)";
    index = (index + 1) % classOne.length; // Loop through the children
  }, 1000); // Adjust the delay (in milliseconds) between each scaling
}

// Call scaleChild initially
oneAnimation();

// Set up a repeating interval
setInterval(oneAnimation, 2000);
