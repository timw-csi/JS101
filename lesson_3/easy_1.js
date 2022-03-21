//1.  Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Bonus:

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/* A. No, it will create 4 additional entries in the numbers array, 3 of which will be 'undefined'
and the 4th new entry (index 6) will be assigned to the number 5.

A. to Bonus: Line 3 will return 'undefined'.
*/

//2. How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/* A. str.slice(-1) === '!';
Book answer is:
str1.endsWith("!"); // true
str2.endsWith("!"); // false
*/

//3. Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

/* A. Object.keys(ages).includes('Spot');
Book answer:
ages.hasOwnProperty('Spot');
*/

/* 4.Using the following string, create a new string that contains all lowercase letters except for
the first character, which should be capitalized. (See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

/* A. let lower = munstersDescription.toLowerCase();
      let final = lower[0].toUpperCase() + lower.slice(1);
      console.log(final);
      OR
      munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1);

Book answer: munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
*/

// 5. What will the following code output?

console.log(false == '0');
console.log(false === '0');

/* A. True for the first one, because '0' is a falsy value and non-strict equality operator, ==, coerces it to 0
and false will be coerced to 0 by the == operator.
False for the second because === is a strict equality operator and false and '0' are diff data types (boolean
and string). 
*/

//6. We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

/* A. (Object.assign() was given as a hint.) 
    Object.assign(ages, additionalAges);
*/

//7. Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

/* A. > str1.includes('Dino') // false
> str2.includes('Dino') // true

Alternate book solutions:
str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true
(This method uses RegEx. read up on MDN.)

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true

(String.prototype.indexOf() returns the index within the calling string of the first appearance of the specified
value. Returns -1 if value is not found.)
*/

//8. How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

/* A. flinstones.push('Dino');
 Book answers:
 let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones = flintstones.concat("Dino");
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]
(concat doesn't mutate existing arrrays, but instead returns a new array)

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones[flintstones.length] = "Dino";
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]
*/

//9. In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

/* A. flintstones.push('caveman', 'pterodactyl');
flintstones = flintstones.concat('Yo', 'Hoppy');
*/

//10. Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning 
// of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

//HINT: Review the String.prototype.slice() and String.prototype.indexOf() methods on MDN, 
//and use those methods to create the return value.

/* A.  advice.indexOf('house'); // 39
       advice = advice.slice(0, 39);  // 'Few things in life are as important as '

       book answer (cleaner than mine):
       advice.slice(0, advice.indexOf('house')); // => 'Few things in life are as important as '
*/