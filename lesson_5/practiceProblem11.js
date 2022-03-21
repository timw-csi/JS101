let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

//arr.forEach(obj => console.log(Object.values(obj)));

// use map. identical in structure, but with each number incremented by 1.
// leave original arr untouched

let incrementedArr = arr.map(obj => {
  let newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }

  return newObj;
});

console.log(arr);
console.log(incrementedArr);