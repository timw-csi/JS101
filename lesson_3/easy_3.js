//1. 
let numbers = [1, 2, 3, 4];

//a
numbers = [];
//b
numbers.splice(0, 4);
//c
numbers.length = 0;


//2. 
[1, 2, 3, 4, 5];

//Wrong. Answer is :
'1,2,34,5'

//3.
'hello there'

//4.
[ { first: 42 }, { second: "value2" }, 3, 4, 5 ]

//5.
//orig
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//new1
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

//new2 ... this one is wrong. would still need return for else statement

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else false;
}

//correct versions:

const isColorValid = color => color === "blue" || color === "green";

const isColorValid = color => ["blue", "green"].includes(color);