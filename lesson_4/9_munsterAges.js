let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


/* function lowAge() {
  let munsterKeys = Object.keys(ages);
  let lowestAge = 0;
  munsterKeys.forEach(name => {
    if (lowestAge === 0 || lowestAge > ages[name]) {
      lowestAge = ages[name];
    }
  });

  return lowestAge;
}

console.log(lowAge());

*/

// Book answer. very nice! :

let agesArray = Object.values(ages);

console.log(Math.min(...agesArray));
