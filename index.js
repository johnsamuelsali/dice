function rollDice() {
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");
  const title = document.querySelector("h1");

  title.textContent = "Rolling... 🎲";

  let interval = setInterval(() => {
    let temp1 = Math.floor(Math.random() * 6) + 1;
    let temp2 = Math.floor(Math.random() * 6) + 1;
    dice1.setAttribute("src", "./images/dice" + temp1 + ".png");
    dice2.setAttribute("src", "./images/dice" + temp2 + ".png");
  }, 100); 

  setTimeout(() => {
    clearInterval(interval);

    var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
    var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

    dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    var winner;
    if(randomNumber1 === randomNumber2){
        winner = "Draw!";
    } else if(randomNumber1 > randomNumber2){
        winner = "🚩 Computer wins";
    } else {
        winner = "You win! 🚩";
    }

    title.textContent = winner;
  }, 1000); 
}
