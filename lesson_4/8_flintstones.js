let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function flintObject(array) {
  let nameObject = {};

  let entries = Object.entries(array);
  entries.forEach(entry => {
    let [index, name] = entry;
    nameObject[name] = Number(index);
  });

  return nameObject;
}

console.log(flintObject(flintstones));

//Book answer. cleaner:

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

