switch (result) {
  case "allez":
    image.src = "./images/allez.jpeg";
    message.innerHTML =
      "<span class='result'>Allez. Crash at the Tour de France</span> <br> Lose 30 points.";
    score -= 30;
    currentScore.innerHTML = score;
    bleepSound();
    break;

  case "ben and JLo":
    image.src = "./images/ben-jlo.jpeg";
    message.innerHTML =
      "<span class='result'>Ben and JLo get back together</span> <br> Add 20 points";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;

  case "bernie":
    image.src = "./images/bernie-chillin.jpeg";
    message.innerHTML =
      "<span class='result'>Bernie wears stylish mittens</span><br> Add 20 points";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;

  case "billionaires":
    image.src = "./images/billionaires.jpeg";
    message.innerHTML =
      "<span class='result'>Billionaires explore space</span><br> Add 20 points.";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;

  case "free britney":
    image.src = "./images/free-britney.jpeg";
    message.innerHTML =
      "<span class='result'>#FreeBritney</span><br> Add 20 points";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;

  case "kimye":
    image.src = "./images/kimye.jpeg";
    message.innerHTML =
      "<span class='result'>Kim and Kanye break up</span> <br> Lose 20 points.";
    score -= 20;
    currentScore.innerHTML = score;
    bleepSound();
    break;

  case "milk crate":
    image.src = "./images/milk-crate.jpeg";
    message.innerHTML =
      "<span class='result'>Milk Crate Challenge</span> <br> Questionnable way to get likes online. Lose 30 points.";
    score -= 30;
    currentScore.innerHTML = score;
    bleepSound();
    break;

  case "NFT":
    image.src = "./images/NFTs.jpeg";
    message.innerHTML =
      "<span class='result'>NFT market goes crazy</span><br> Are NFTs here to stay? Add 20 points.";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;

  case "olympics":
    image.src = "./images/olympics.jpeg";
    message.innerHTML =
      "<span class='result'>Kevin Hart and Snoop Dogg provide Olympic Coverage</span> <br> Add 20 points.";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;

  case "shipping":
    image.src = "./images/shipping.jpeg";
    message.innerHTML =
      "<span class='result'>Supply Chain Issues</span> <br> Where is everything? Lose 30 points.";
    score -= 30;
    currentScore.innerHTML = score;
    bleepSound();
    break;

  case "suez canal":
    image.src = "./images/suez-canal.jpeg";
    message.innerHTML =
      "<span class='result'>This big ship got stuck</span> <br> What a mess. Lose 20 points.";
    score -= 20;
    currentScore.innerHTML = score;
    bleepSound();
    break;

  case "super bowl":
    image.src = "./images/tbgronk.jpeg";
    message.innerHTML =
      "<span class='result'>Tom Brady wins Super Bowl #7</span> <br> Add 20 points.";
    score += 20;
    currentScore.innerHTML = score;
    goodJobSound();
    break;
}