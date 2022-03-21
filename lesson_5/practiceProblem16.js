// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

//let resultObj = {};

console.log(Object.fromEntries(arr));
// 
// arr.forEach(subArray => {
  // resultObj[subArray[0]] = subArray[1];
// });
// 
// console.log(resultObj);