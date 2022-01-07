const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  spock:    ['rock',     'scissors'],
  lizard:   ['paper',    'spock'],
};

let newGame;
let choice;
let playerTally = 0;
let computerTally = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function greeting() {
  prompt(`Welcome to Rock, Paper, Scissors, Spock, Lizard.
  This is a best of 5 series. First to 3 games wins. Good luck!`);
}

function selection() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.
  (First letters also accepted. e.g. 'r' for rock,
  'sc' for scissors, 'sp' for spock.)`);

  choice = readline.question().toLowerCase();

  abbreviate(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`Please select: ${VALID_CHOICES.join(', ')}.
    (First letters also accepted. e.g. 'r' for rock,
    'sc' for scissors, 'sp' for spock.)`);

    choice = readline.question().toLowerCase();

    abbreviate(choice);
  }
}

function invalidAnswer(answer) {
  if (answer.length === 1) {
    return !['y', 'n'].includes(answer[0]);
  } else if (answer.length > 1) {
    return !['yes', 'no'].includes(answer);
  } else return true;
}

function abbreviate(selection) {
  switch (selection) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 'sc':
      choice = 'scissors';
      break;
    case 'sp':
      choice = 'spock';
      break;
    case 'l':
      choice = 'lizard';
      break;
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie.");
  } else {
    prompt('Computer wins!');
  }
}

function tallyScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerTally += 1;
  } else if (playerWins(computerChoice, choice)) {
    computerTally += 1;
  }
}

function displayScore(playerTally, computerTally) {
  prompt(`Player victories: ${playerTally}. Computer victories: ${computerTally}.`);
}

function declareChampion(playerTally, computerTally) {
  if (playerTally === 3) {
    prompt(`Player is the Grand Champion in this best of 5 series.`);
  } else if (computerTally === 3) {
    prompt(`Computer is the Grand Champion in this best of 5 series.`);
  }
}

function resetGame() {
  if (playerTally === 3 || computerTally === 3) {
    playerTally = 0;
    computerTally = 0;
  }
}

function playAgain () {
  prompt ("Would you like to play again?");
  newGame = readline.question().toLowerCase();
  while (invalidAnswer(newGame)) {
    prompt('Please enter "y", "n", "yes", or "no".');
    newGame = readline.question().toLowerCase();
  }
}

do {
  console.clear();
  greeting();
  prompt(`--------------------------------`);
  displayScore(playerTally, computerTally);
  prompt(`--------------------------------`);

  selection();

  let randomIndex = Math.ceil(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];


  displayWinner(choice, computerChoice);

  tallyScore(choice, computerChoice);

  displayScore(playerTally, computerTally);

  declareChampion(playerTally, computerTally);

  resetGame();

  playAgain();

} while (newGame[0] !== 'n');