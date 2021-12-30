const bankAccountDisplay = document.querySelector("#bank");

const explore = document.querySelector("button");

let image = document.getElementById("image");

let currentScore = document.getElementById("score");

let message = document.querySelector("#message");

const resetButton = document.querySelector("#reset");

const possibleOutcomes = [
  "motion fitness",
  "midtown plaza",
  "dakota dunes",
  "mendel art gallery",
  "smokes poutinerie",
  "target",
  "outdoor rink",
  "outlaws",
  "silverwood golf course",
  "bessborough",
];

let score = 50;

function applauseSound() {
  let audio = new Audio('/sounds/applause.wav');
  audio.volume = 0.2;
  audio.play();
}

function bleepSound() {
  let audio = new Audio('/sounds/bleep.wav');
  audio.volume = 0.2;
  audio.play();
}

function goodJobSound() {
  let audio = new Audio('/sounds/good-job.wav');
  audio.volume = 0.2;
  audio.play();
}

function playerLoseSound() {
  let audio = new Audio('/sounds/player-lose.wav');
  audio.volume = 0.2;
  audio.play();
}

function animation() {
  explore.disabled = true;
  setTimeout(function () {
    image.src = "/photos/slotmachine.jpeg";
    explore.disabled = false;
    checkForWin();
  }, 3000);
}

explore.addEventListener("click", function () {
  message.innerHTML = "";
  let result =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
    
  switch (result) {
    case "motion fitness":
      animation();
      image.src = "/photos/motion-fitness.png";
      message.innerHTML =
        "<span class='result'>Motion Fitness</span> <br> Saskatoon staple. Hit the stairmaster and give yourself 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "midtown plaza":
      animation();
      image.src = "/photos/midtown-plaza-saskatoon.jpeg";
      message.innerHTML =
        "<span class='result'>midtown plaza</span><br> Just came here for a booster juice actually. Lose 10 points.";
      score -= 10;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "dakota dunes":
      animation();
      image.src = "/photos/dakota-dunes.png";
      message.innerHTML =
        "Dakota Dunes Casino <br> Hey! What are you doing at the competition? Lose 20 points.";
      score -= 20;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "bessborough":
      animation();
      image.src = "/photos/bessborough2.jpeg";
      message.innerHTML =
        "The Bessborough <br> One of Saskatoon's great buildings. Add 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "smokes poutinerie":
      animation();
      image.src = "/photos/smokes.jpeg";
      message.innerHTML =
        "Smokes Poutinerie at 2AM <br> Oops. Lose 20 points.";
      score -= 20;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "target":
      animation();
      image.src = "/photos/target2.jpeg";
      message.innerHTML = "Target <br> Just Kidding. Lose 20 points.";
      score -= 20;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "outlaws":
      animation();
      image.src = "/photos/outlaws.jpeg";
      message.innerHTML =
        "Waiting in line at Outlaws <br> In the middle of winter. Lose 30 points.";
      score -= 30;
      currentScore.innerHTML = score;
      bleepSound();
      break;

    case "silverwood golf course":
      animation();
      image.src = "/photos/silverwood-golf.jpeg";
      message.innerHTML =
        "Silverwood Golf Course <br> Finally breaking 100 at a fully legitimate course. Add 20 points.";
      score += 20;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "outdoor rink":
      animation();
      image.src = "/photos/local-outdoor-rink.jpeg";
      message.innerHTML =
        "Outdoor Rink <br> Some call it the ODR. Either way, classic move and add 30 points.";
      score += 30;
      currentScore.innerHTML = score;
      goodJobSound();
      break;

    case "mendel art gallery":
      animation();
      image.src = "/photos/mendel-art-gallery.jpeg";
      message.innerHTML =
        "Mendel Art Gallery <br> What is this a field trip? Add 10 points for effort, but this isn't 2002.";
      score += 10;
      currentScore.innerHTML = score;
      goodJobSound();
      break;
  }
});

function checkForWin() {
  if (currentScore.innerHTML >= 100) {
    message.innerHTML = "You win! You are a Saskatoon Expert!";
    message.style.fontSize = "1.8rem";
    applauseSound();
    explore.disabled = true;
  } else if (currentScore.innerHTML <= 0) {
    message.innerHTML = "You lose! You need a tour guide!";
    message.style.fontSize = "1.8rem";
    playerLoseSound();
    explore.disabled = true;
  } else {
    return;
  }
}

resetButton.addEventListener("click", function() {
  window.location.reload();
});
