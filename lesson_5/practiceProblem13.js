let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sortedArr = arr.sort((a, b) => {
  let oddSumA = a.filter(val => val % 2 === 1).reduce((sum, num) => {
    return sum + num;
  });

  let oddSumB = b.filter(val => val % 2 === 1).reduce((sum, num) => {
    return sum + num;
  });

  return oddSumA - oddSumB;
});



// const tempArray = arr.map((subArray, index) => {
  // return { index, value: subArray.reduce((a, b) => {
    // if (b % 2 === 1) {
      // return a + b;
    // } else return a;
  // }, 0)};
// });

// tempArray.sort((a, b) => {
  // return a.value - b.value;
// });

//const result = tempArray.map(subObj => arr[subObj.index]);

console.log(sortedArr);