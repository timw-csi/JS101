function doubleOddIndices(array) {
  let doubleOddIndicesArr = [];

  array.forEach((elm, index) => {
    if (index % 2 === 1) {
      doubleOddIndicesArr.push(elm * 2);
    } else doubleOddIndicesArr.push(elm);
  });

  return doubleOddIndicesArr;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]