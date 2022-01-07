const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let newGame;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie.");
  }
}


do {
  prompt(`--------------------------------`);
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Please select rock, paper, or scissors');
    choice = readline.question();
  }

  let randomIndex = Math.ceil(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];


  displayWinner(choice, computerChoice);

  prompt ("Would you like to play again? (y/n)");
  newGame = readline.question().toLowerCase();
  while (newGame[0] !== 'n' && newGame[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    newGame = readline.question().toLowerCase();
  }

} while (newGame[0] !== 'n');