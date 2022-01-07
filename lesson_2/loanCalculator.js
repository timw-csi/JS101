/*
  m = monthly payment
  p = loan amount
  j = monthly interest rate
  n = loan duration in months
*/

// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

const rlSync = require('readline-sync');
let loanMonths;
let monthlyInterestRate;
let monthlyPayment;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number < 0 || Number.isNaN(number);
}

function invalidAnswer(answer) {
  return answer.trimStart() === '' || !['y', 'n', 'Y', 'N'].includes(answer[0]);
}

while (true) {
  // this is neat way to clearly demarcate new session
  prompt('---------------------------------');
  prompt('Hello, welcome to the Loan Calculator.');

  let loanAmount = Number(rlSync.question("What is the loan amount?\n"));
  while (invalidNumber(loanAmount)) {
    loanAmount = Number(rlSync.question("Please enter a number greater than 0. No special characters (ex. $)\n"));
  }
  if (loanAmount === 0) {
    prompt(`Debt is to be avoided.`);
    break;
  }

  // this is not best practice to place math work at end of log row, off screen
  // put it in variable
  // let monthlyInterestRate = ((Number(rlSync.question("What is the Annual Percentage Rate (APR) (ex. 10 for 10%, 3.4 for 3.4%)?\n")) / 100) / 12);
  let interestRate = (Number(rlSync.question("What is the Annual Percentage Rate (APR) (ex. 10 for 10%, 3.4 for 3.4%)?\n")) / 100);
  while (invalidNumber(interestRate)) {
    interestRate = Number(rlSync.question("Please enter a number greater than or equal to 0.\n"));
  }
  monthlyInterestRate = interestRate / 12;

  let monthOrYear = rlSync.question("Would you like to enter the loan duration in months or years?\n 1) Months 2) Years\n");
  while (!['1', '2'].includes(monthOrYear)) {
    monthOrYear = rlSync.question("Please select either 1 or 2.\n");
  }
  switch (monthOrYear) {
    case '1':
      loanMonths = (Number(rlSync.question("What is the duration of the loan? (in months)\n")));
      while (invalidNumber(loanMonths)) {
        loanMonths = Number(rlSync.question("Please enter a number greater than 0.\n"));
      }
      break;
    case '2':
      loanMonths = (Number(rlSync.question("What is the duration of the loan? (in years)\n")) * 12);
      while (invalidNumber(loanMonths)) {
        loanMonths = Number(rlSync.question("Please enter a number greater than 0.\n") * 12);
      }
      break;
  }


  if (monthlyInterestRate !== 0) {
    monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));
  } else {
    monthlyPayment = loanAmount / loanMonths;
  }

  console.log(`The monthly payment for your loan is $${monthlyPayment.toFixed(2)}.`);

  let anotherCalculation = rlSync.question("Do you want to perform another loan calculation? (y or n)\n");
  while (invalidAnswer(anotherCalculation)) {
    anotherCalculation = rlSync.question("Please enter y or n.");
  }
  if (anotherCalculation[0].toLowerCase() !== 'y') break;
}