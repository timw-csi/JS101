function multiply(numbers, multiplier) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    doubledNums.push(numbers[counter] * multiplier);
    counter += 1;
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);

/*function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}
*/