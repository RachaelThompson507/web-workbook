var userChoice = prompt("Do you choose Rock, Paper or Scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "ROCK";
} else if (computerChoice <= 0.67) {
  computerChoice = "PAPER";
} else {
  computerChoice = "SCISSORS";
}
//console.log("Computer chooses: " + computerChoice);

var play = function(userChoice, computerChoice) {

  if (userChoice.toUpperCase() === computerChoice) {
   return  "Tie!";
  } else if (userChoice.toUpperCase() ==="PAPER" && computerChoice === "ROCK") {
   return  "You Win!";
  } else if (userChoice.toUpperCase() ==="SCISSOR" && computerChoice === "PAPER") {
   return  "You Win!";
  }else if (userChoice.toUpperCase() ==="ROCK" && computerChoice === "SCISSORS") {
   return  "You Win!";
  } else {
    return  "You Lose...";
  }
} //closes compare function

document.write("Computer chose: " + computerChoice + "<br>");
document.write("User chose: " + userChoice.toUpperCase() + "<br>");
document.write(play(userChoice, computerChoice));
