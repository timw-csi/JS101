let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ageTotal = 0;

for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    ageTotal += munsters[member].age;
  }
}

// let munstersNames = Object.keys(munsters);
// 
// 
// munstersNames.forEach(name => {
  // if (munsters[name].gender === 'male') {
    // ageTotal += munsters[name].age;
  // }
// });

console.log(ageTotal);