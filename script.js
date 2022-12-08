const explore = document.querySelector("button");
let mainImage = document.getElementById("image");
let currentScore = document.getElementById("score");
let message = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
let score = 50;
let timeout;

const possibleOutcomes = [
  {
    image: "./images/allez.jpeg",
    prompt: "Allez. Crash at the Tour de France. <br> Lose 30 points.",
    points: -30,
    sound: bleepSound,
  },
  {
    image: "./images/ben-jlo.jpeg",
    prompt:
      "<span class='result'>Ben and JLo get back together</span> <br> Add 20 points",
    points: 20,
    sound: goodJobSound,
  },
  {
    image: "./images/bernie-chillin.jpeg",
    prompt:
    "<span class='result'>Bernie wears stylish mittens</span><br> Add 20 points",
    points: 20,
    sound: goodJobSound,
  },
  {
    image: "./images/billionaires.jpeg",
    prompt:
    "<span class='result'>Billionaires explore space</span><br> Add 20 points.",
    points: 20,
    sound: goodJobSound,
  },
  {
    image: "./images/free-britney.jpeg",
    prompt:
    "<span class='result'>#FreeBritney</span><br> Add 20 points",
    points: 20,
    sound: goodJobSound,
  },
  {
    image: "./images/milk-crate.jpeg",
    prompt:
    "<span class='result'>Milk Crate Challenge</span><br> Questionnable way to get likes online. Lose 30 points",
    points: -30,
    sound: bleepSound,
  },
  {
    image: "./images/NFTs.jpeg",
    prompt:
    "<span class='result'>NFT market goes crazy</span><br> Are NFTs here to stay? Add 20 points.",
    points: 20,
    sound: goodJobSound,
  },
  {
    image: "./images/olympics.jpeg",
    prompt:
     "<span class='result'>Kevin Hart and Snoop Dogg provide Olympic Coverage</span> <br> Add 20 points.",
    points: 20,
    sound: goodJobSound,
  },
  {
    image: "./images/shipping.jpeg",
    prompt:
     "<span class='result'>Supply Chain Issues</span> <br> Where is everything? Lose 30 points.",
    points: -30,
    sound: bleepSound,
  },
  {
    image: "./images/suez-canal.jpeg",
    prompt:
    "<span class='result'>This big ship got stuck</span> <br> What a mess. Lose 20 points.",
    points: -20,
    sound: bleepSound,
  },
  {
    image: "./images/tbgronk.jpeg",
    prompt:
     "<span class='result'>Tom Brady wins Super Bowl #7</span> <br> Add 20 points.",
    points: 20,
    sound: goodJobSound,
  }

];


//Functions to play sounds

function applauseSound() {
  let audio = new Audio("./sounds/applause.wav");
  audio.volume = 0.1;
  audio.play();
}

function bleepSound() {
  let audio = new Audio("./sounds/bleep.wav");
  audio.volume = 0.1;
  audio.play();
}

function goodJobSound() {
  let audio = new Audio("./sounds/good-job.wav");
  audio.volume = 0.1;
  audio.play();
}

function playerLoseSound() {
  let audio = new Audio("./sounds/player-lose.wav");
  audio.volume = 0.1;
  audio.play();
}

function animate() {
  mainImage.src = "./images/2021.jpeg";
  explore.disabled = false;
  message.innerHTML =
    "<span class='result'>2021 Year In Review</span><br> Click 'Explore' to navigate through 2021. <br> 100 points to win. 0 points is a loss.";
  checkForWin();
}

explore.addEventListener("click", function () {
  explore.disabled = true;
  message.innerHTML = "";
  timeout = setTimeout(animate, 3500);
  const {image, prompt, points, sound} =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
  mainImage.src = image;
  message.innerHTML = prompt //Change this so there is not HTML
  score = score + points
  currentScore.innerHTML = score
  sound()
});

function checkForWin() {
  if (currentScore.innerHTML >= 100) {
    message.innerHTML =
      "<div class='ending-message'>You win! You are a 2021 expert.</div>";
    applauseSound();
    explore.disabled = true;
  } else if (currentScore.innerHTML <= 0) {
    message.innerHTML =
      "<div class='ending-message'>You lose! Better luck next time.</div>";
    playerLoseSound();
    explore.disabled = true;
  } else {
    return;
  }
}

resetButton.addEventListener("click", function () {
  clearTimeout(timeout);
  explore.disabled = false;
  score = 50;
  message.innerHTML =
    "<span class='result'>2021 Year In Review</span><br> Click 'Explore' to navigate through 2021. <br> 100 points to win. 0 points is a loss.";
  image.src = "./images/2021.jpeg";
  currentScore.innerHTML = score;
});
