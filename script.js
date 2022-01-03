// const bankAccountDisplay = document.querySelector("#bank");

const explore = document.querySelector("button");

let image = document.getElementById("image");

let currentScore = document.getElementById("score");

let message = document.querySelector("#message");

const resetButton = document.querySelector("#reset");

const possibleOutcomes = [
  "allez",
  "ben and JLo",
  "bernie",
  "billionaires",
  "free britney",
  "kimye",
  "milk crate",
  "NFT",
  "olympics",
  "suez canal",
  "super bowl",
];

let score = 50;

function applauseSound() {
  let audio = new Audio("/sounds/applause.wav");
  audio.volume = 0.1;
  audio.play();
}

function bleepSound() {
  let audio = new Audio("/sounds/bleep.wav");
  audio.volume = 0.1;
  audio.play();
}

function goodJobSound() {
  let audio = new Audio("/sounds/good-job.wav");
  audio.volume = 0.1;
  audio.play();
}

function playerLoseSound() {
  let audio = new Audio("/sounds/player-lose.wav");
  audio.volume = 0.1;
  audio.play();
}

function animation() {
  explore.disabled = true;
  setTimeout(function () {
    image.src = "/images/2021.jpeg";
    explore.disabled = false;
    message.innerHTML =
      "<span class='result'>2021 Year In Review</span><br> Click 'Explore' to navigate through 2021. <br> 100 points to win.";
    checkForWin();
  }, 3500);
}

explore.addEventListener("click", function () {
  message.innerHTML = "";
  let result =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

  switch (result) {
    case "allez":
      animation();
      image.src = "/images/allez.jpeg";
      message.innerHTML =
        "<span class='result'>Allez. Crash at the Tour de France</span> <br> Lose 30 points.";
      score -= 30;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "ben and JLo":
      animation();
      image.src = "/images/ben-jlo.jpeg";
      message.innerHTML =
        "<span class='result'>Ben and JLo get back together</span> <br> Add 20 points";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "bernie":
      animation();
      image.src = "/images/bernie-chillin.jpeg";
      message.innerHTML =
        "<span class='result'>Bernie wears stylish mittens</span><br> Add 10 points";
      score += 10;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "billionaires":
      animation();
      image.src = "/images/billionaires.jpeg";
      message.innerHTML =
        "<span class='result'>Billionaires explore space</span><br> Add 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "free britney":
      animation();
      image.src = "/images/free-britney.jpeg";
      message.innerHTML =
        "<span class='result'>#FreeBritney</span><br> Add 20 points";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "kimye":
      animation();
      image.src = "/images/kimye.jpeg";
      message.innerHTML =
        "<span class='result'>Kim and Kanye break up</span> <br> Lose 20 points.";
      score -= 20;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "milk crate":
      animation();
      image.src = "/images/milk-crate.jpeg";
      message.innerHTML =
        "<span class='result'>Milk Crate Challenge</span> <br> Questionnable way to get likes online. Lose 30 points.";
      score -= 30;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "NFT":
      animation();
      image.src = "/images/NFTs.jpeg";
      message.innerHTML =
        "<span class='result'>NFT market goes crazy</span><br> Are NFTs here to stay? Add 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "olympics":
      animation();
      image.src = "/images/olympics.jpeg";
      message.innerHTML =
        "<span class='result'>Kevin Hart and Snoop Dogg provide Olympic Coverage</span> <br> Very funny stuff. Add 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "shipping":
      animation();
      image.src = "/images/shipping.jpeg";
      message.innerHTML =
        "<span class='result'>Supply Chain Issues</span> <br> Where is everything? Lose 30 points.";
      score -= 30;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "suez canal":
      animation();
      image.src = "/images/suez-canal.jpeg";
      message.innerHTML =
        "<span class='result'>This big ship got stuck</span> <br> What a mess. Lose 20 points.";
      score -= 20;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "super bowl":
      animation();
      image.src = "/images/tbgronk.jpeg";
      message.innerHTML =
        "<span class='result'>Tom Brady wins Super Bowl #7</span> <br> Add 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;
  }
});

function checkForWin() {
  if (currentScore.innerHTML >= 100) {
    message.innerHTML = "You win! You are a 2021 expert.";
    message.style.fontSize = "1.8rem";
    applauseSound();
    explore.disabled = true;
  } else if (currentScore.innerHTML <= 0) {
    message.innerHTML = "You lose! Better Luck next time";
    message.style.fontSize = "1.8rem";
    playerLoseSound();
    explore.disabled = true;
  } else {
    return;
  }
}

resetButton.addEventListener("click", function () {
  window.location.reload();
});
