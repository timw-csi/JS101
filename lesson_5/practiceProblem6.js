let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(entry => {
  let name = entry[0][0].toUpperCase() + entry[0].slice(1);
  let age = entry[1].age;
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

// names.forEach(name => {
  // let firstName = name[0].toUpperCase() + name.slice(1);
  // let age = munsters[name].age;
  // let gender = munsters[name].gender;
// 
  // console.log(`${firstName} is a ${age}-year-old ${gender}.`);


//});

