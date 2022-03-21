// function getRandomInt(min, max) {
  // min = BigInt(Math.ceil(min));
  // max = BigInt(Math.floor(max));
  // return Math.floor((Math.random()) * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }
// 
// 
// let NUM = big number.toString(16)
// NUM.splice()
// 
// console.log(getRandomInt(1, 3.4e+39));

function uuidString() {
  const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const valueSections = [8, 4, 4, 4, 12];
  let uuid = '';

  valueSections.forEach((number, valueIndex) => {
    for (let index = 0; index < number; index += 1) {
      let randomIndex = Math.floor(Math.random() * (chars.length));

      uuid += String(chars[randomIndex]);
    }

    if (valueIndex < (valueSections.length - 1)) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(uuidString());