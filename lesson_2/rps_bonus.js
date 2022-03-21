/* Need to get it working again.
  gotta fix issues from playerWins reformatting, and also
  reformat VALID_CHOICES to object.
*/

const readline = require('readline-sync');

const WINS_NEEDED = 3;

const VALID_CHOICES = {
  r:  'rock',
  p:  'paper',
  sc: 'scissors',
  sp: 'spock',
  l:  'lizard',
};

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  spock:    ['rock',     'scissors'],
  lizard:   ['paper',    'spock'],
};

const CHOICE_ABBREVS = Object.keys(VALID_CHOICES);
const CHOICE_LONG = Object.values(VALID_CHOICES);

let newGame;
let choice;
let computerChoice;
let winner;
let playerTally = 0;
let computerTally = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function greeting() {
  prompt(`Welcome to Rock, Paper, Scissors, Spock, Lizard.
  This is a best of 5 series. First to ${WINS_NEEDED} games wins. Good luck!`);
}

function selection() {
  prompt(`Choose one: ${Object.values(VALID_CHOICES)}.
  (First letters also accepted. e.g. 'r' for rock,
  'sc' for scissors, 'sp' for spock.)`);

  choice = readline.question().toLowerCase();

  abbreviate();


  while (!CHOICE_ABBREVS.includes(choice) && !CHOICE_LONG.includes(choice)) {
    prompt(`Please select: ${Object.values(VALID_CHOICES)}.
    (First letters also accepted. e.g. 'r' for rock,
    'sc' for scissors, 'sp' for spock.)`);

    choice = readline.question().toLowerCase();

    abbreviate();
  }
}

function invalidAnswer(answer) {
  if (answer.length === 1) {
    return !['y', 'n'].includes(answer[0]);
  } else if (answer.length > 1) {
    return !['yes', 'no'].includes(answer);
  } else return true;
}

function abbreviate() {
  if (CHOICE_ABBREVS.includes(choice)) {
    choice = VALID_CHOICES[choice];
  }
}

function computerSelection() {
  let randomIndex = Math.ceil(Math.random() * (CHOICE_ABBREVS.length - 1));
  computerChoice = VALID_CHOICES[CHOICE_ABBREVS[randomIndex]];
}

function determineWinner(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    winner = 'player';
  } else if (choice === computerChoice) {
    winner = 'No one';
  } else {
    winner = 'computer';
  }

  return winner;
}

function displayWinner(choice, computerChoice, winner) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  prompt(`${winner[0].toUpperCase() + winner.slice(1)} wins.`);
  if (winner === 'No one') {
    prompt(`It's a tie.`);
  }
}

function tallyScore(winner) {
  if (winner === 'player') {
    playerTally += 1;
  } else if (winner === 'computer') {
    computerTally += 1;
  }
}

function displayScore(playerTally, computerTally) {
  prompt(`Player victories: ${playerTally}. Computer victories: ${computerTally}.`);
}

function declareChampion(playerTally, computerTally) {
  if (playerTally === WINS_NEEDED) {
    prompt(`Player is the Grand Champion in this best of 5 series.`);
  } else if (computerTally === WINS_NEEDED) {
    prompt(`Computer is the Grand Champion in this best of 5 series.`);
  }
}

function resetGame() {
  if (playerTally === WINS_NEEDED || computerTally === WINS_NEEDED) {
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

  computerSelection();

  determineWinner(choice, computerChoice);

  displayWinner(choice, computerChoice, winner);

  tallyScore(winner);

  displayScore(playerTally, computerTally);

  declareChampion(playerTally, computerTally);

  resetGame();

  playAgain();

} while (newGame[0] !== 'n');

if (newGame[0] === 'n') {
  prompt(`Goodbye, thanks for playing.`);
}