// Given the following data structure, use a combination of methods, including filter,
// to return a new array identical in structure to the original, but containing only
// the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThreeArr = arr.map(subArr => {
  return subArr.filter(val => val % 3 === 0);
});

console.log(arr);
console.log(multiplesOfThreeArr); // [[], [3], [9], [15, 18]]


