let arr = [1, 2];

let results = arr.map(subArr => arr.pop()); // => [ 2, <1 empty item> ]

console.log(arr);
console.log(results);