// Given the following data structure, write some code to return an array which
// contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let results = arr.filter(obj => {
  return Object.values(obj).every(subArray => {
    return subArray.every(num => num % 2 === 0);
  });
});


// let results = arr.map((subObj, index) => {
  // return Object.values(subObj).map(innerArray => {
    // if (innerArray.every(val => val % 2 === 0)) {
      // return arr[index];
    // }
  // });
// });

console.log(results);