//1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

/* A: advice.replace('important', 'urgent');
// => Few things in life are as urgent as house training your pet dinosaur.

Note that if the string contains two or more occurrences of important, this code only replaces the first. 
Can you figure out how to replace all occurrences?

A: advice.replaceAll('important', 'urgent');
*/

/* 2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort
can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original
array as shown below. Write two distinct ways of reversing the array without mutating the original array.
Use reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// A: 
// for reverse
let numbers = [1, 2, 3, 4, 5];
let numbersCopy = numbers.slice(); // using slice w/ no arguments to create copy
numbersCopy.reverse();
console.log(numbers);
console.log(numbersCopy);
// Book answer:
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

//for sort
let numbers = [1, 2, 3, 4, 5];
let numbersCopy = [...numbers]; //using spread syntax to create copy
numbersCopy.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(numbersCopy); // [ 5, 4, 3, 2, 1 ]
// Book answer:
let numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// Bonus: Can you do it using the Array.prototype.forEach() method?
// A: Book answer: (I couldn't get it)
let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// 3. Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

//A: 

numbers.includes(number1) // false
numbers.includes(number2) // true

// 4. Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

//A:

let completeSentence = `Four score and ${famousWords}`;
let completeSentence = 'Four score and ' + famousWords;

//book answer:

"Four score and ".concat(famousWords);

//5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at 
// index 2, so that the array becomes [1, 2, 4, 5].

//A:

array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);

//6. Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. 
// We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

//A:
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// callback as function declaration
let flattened = flintstones.reduce(function (previousValue, currentValue) {
  return previousValue.concat(currentValue);
  },
  []
)
//callback as arrow function
let flattened = flintstones.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
)  

// built in method
flintstones.flat();

//other way
let flintstones = ["Fred", "Wilma"];
let newFlintstones1 = ["Barney", "Betty"];
let newFlintstones2 = ["Bambam", "Pebbles"];

let finalFlintstones = flintstones.concat(newFlintstones1, newFlintstones2);

//book answer
flintstones = [].concat(...flintstones);

//book answer with forEach
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element); // why is the assignment needed? why does this line not work with just 'newFlintstones.concat(element)' ? Because concat is non destructive and thus needs assignment?
})


//7. Consider the following object:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//Create an array from this object that contains only two elements: Barney's name and Barney's number:
[ 'Barney', 2 ]

//A: 
Object.entries(flintstones)[2]

//book answer: 
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

//8. How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

//A. Array.isArray(numbers);
//   Array.isArray(table);

/*9. Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-character wide table of Flintstone family members, how can we center 
the following title above the table with spaces?
*/

let title = "Flintstone Family Members";
let length = title.length;
let tableWidth = 40;
let halfPad = ((tableWidth - length) / 2) + length;

title.padStart(halfPad)

//10. Write two one-line expressions to count the number of lower-case t characters in 
// each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//A:

let results1 = statement1.match(/t/g).length;
let results2 = statement2.match(/t/g).length;

//book answer:
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
