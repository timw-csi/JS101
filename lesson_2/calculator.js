// Ask user 1st number
// Ask user 2nd number
// Ask user operation
// Perform operation on 2 numbers
// Print result to terminal

// top of calculator.js

const LANGUAGE = 'en';

const rlSync = require('readline-sync');

const calcMsg = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message, lang = 'en') {
  return calcMsg[lang][message];
}

// put functions at the top of program
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidAnswer(newCalc) {
  return newCalc.trimStart() === '' || !['y', 'n', 'Y', 'N'].includes(newCalc);
}

prompt(messages('Welcome', LANGUAGE));
prompt(messages('Yo', LANGUAGE));

while (true) {
  let number1 = rlSync.question("What is the first number?\n");

  while (invalidNumber(number1)) {
    number1 = rlSync.question("Hmm... that doesn't look like a valid number.\n");
  }

  let number2 = rlSync.question("What is the second number?\n");

  while (invalidNumber(number2)) {
    number2 = rlSync.question("Hmm... that doesn't look like a valid number.\n");
  }

  let operation = rlSync.question("Which operation would you like to perform?\n1) Add 2) Subtract 3) Divide 4) Multiply\n");

  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = rlSync.question("Must choose 1, 2, 3, or 4.\n");
  }

  let result;

  switch (operation) {
    case '1':
      result = Number(number1) + Number(number2);
      break;
    case '2':
      result = Number(number1) - Number(number2);
      break;
    case '3':
      result = Number(number1) / Number(number2);
      break;
    case '4':
      result = Number(number1) * Number(number2);
      break;
  }

  /* if (operation === '1') {
    result = Number(number1) + Number(number2);
  } else if (operation === '2') {
    result = Number(number1) - Number(number2);
  } else if (operation === '3') {
    result = Number(number1) / Number(number2);
  } else if (operation === '4') {
    result = Number(number1) * Number(number2);
  } */

  prompt(`The result is ${result}.`);
  let newCalc = rlSync.question("Would you like to perform another calculation? (y/n)\n");

  while (invalidAnswer(newCalc)) {
    newCalc = rlSync.question("Please enter y or n.\n");
  }

  if (newCalc.toLowerCase() !== 'y') break;
}