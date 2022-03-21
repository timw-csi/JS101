let arr = [1, 2, 3, 4, 5, 6, 7];
//arr.forEach(elem => console.log(elem)); // 1, 2, 3, 4, 5, 6, 7
arr.forEach(elem => {
  if (elem < 3) {
    arr.unshift(100);
  }
  console.log(elem);
}); //
//arr.forEach(elem => {
//  arr.splice(0, 1);
//  console.log(elem);
//}); // 1, 3, 5, 7