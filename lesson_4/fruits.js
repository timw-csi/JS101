let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(object) {
  let fruitObj = {};
  let produceEntries = Object.entries(object);

  for (let i = 0; i < produceEntries.length; i += 1) {
    if (produceEntries[i][1] === 'Fruit') {
      fruitObj[produceEntries[i][0]] = produceEntries[i][1];
    }
  }

  return fruitObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

