/* function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(number);    // 1
console.log(newNumber); // 1

number = 3;
console.log(number);    // 3
console.log(newNumber); // 1
*/

function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
  console.log(name);
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

anotherFunction();