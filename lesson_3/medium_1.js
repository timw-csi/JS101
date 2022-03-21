//1.
/*
function flintstones() {
  let indent = ' ';
  for (let idx = 0; idx < 10; idx += 1) {
    console.log(`${indent.repeat(idx)}The Flintstones Rock!`);
  }
}

flintstones();
*/
//2.

let munstersDescription = "The Munsters are creepy and spooky.";
/*
function caseSwap(string) {
  let newStr = string.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    } else return char;
  });
  return newStr.join('');
}
*/

function caseSwap(string) {
  let newStr = '';
  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      newStr += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      newStr += char.toLowerCase();
    } else newStr += char;
  });
  return newStr;
}

console.log(caseSwap(munstersDescription));

// book answer. don't need last else statement on line 22 and 35, toUpperCase or LowerCase will handle spaces.:

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

/* 3. Alan can use a while (divisor > 0) loop statement instead. this will prevent the loop from running
   with 0 or a neg number. will just return empty factors array. more graceful than throwing error.
   bonus: the purpose of (number % divisor === 0) is to make sure that divisor is integer and cleanly divides
   the number, thus making it a factor.

/* 4. I said no, there wouldn't be a difference. WRONG.
  book answer: Yes, there is a difference. While both methods have the same return value,
  the first implementation mutates the argument represented by buffer. That is, the caller will
  see that the array is different when the function returns. The rollingBuffer2 implementation
  doesn't mutate the argument specified by the value of buffer.

/* 5. line 1: .9 line 2: true;

WRONG again: 
  If you thought that the outputs would be 0.9 and true, respectively, you were wrong. JavaScript uses
  floating point numbers for all numeric operations. Most floating point representations used on computers
   lack a certain amount of precision, and that can yield unexpected results like these.

  In this case, the output was:
  0.8999999999999999
  false

  The details of why this happens aren't crucial right now -- it's just something you need to be aware of.


/* 6. False. NaN is only value in JS that doesn't pass strict equality test with itself.
  Bonus: Number.isNaN();
*/

/* 7. 34. newAnswer === 50, due to messWithIt(answer), but answer === 42 in the outer scope, so line
  9 returns 34.
*/

/* 8. Yes, the family data was ransacked. Because the messWithDemographics(demoObject) function took the munster
      family object as an argument, then line 10 accessed the values of each family member's info, then the forEach
      method reassgined the values for the age and gender keys of each family member. 

  Book answer: Why? In JavaScript, objects are passed by reference. Thus, Spot's demoObject starts off pointing 
  to the munsters object. His program could replace that with some other object, and the family's data would be
  safe. However, in this case, the program doesn't reassign demoObject; it just uses it, as-is. Thus, the object
  that gets changed by the function is the munsters object.

      I used demoObject = JSON.parse(JSON.stringify(demoObject));  
      to copy the argument object inside the function body and then perform reassignments on this new object,
      instead of performing directly on argument (munsters, in this case).
*/

/* 9.
    console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
                rps(rps(          paper     ,      rock     )   ,  rock)
                rps     (paper                                 ,   rock)
                                      paper

*/

/* 10. Function invocation will return 'yes'. Foo() returns 'yes'. bar('yes') returns yes because 
      assignment operator (=) in parameter calls argument 'no' for function body, thus returning 'yes'.

      Book answer: 'no'. This is because the value returned from the foo function will always be "yes" , and 
      "yes" === "no" will be false.

      I was wrong in assuming that assignment in line 5 would assign the parameter to 'no'. An assignment in
      parameter of function serves as a default argument in case nothing is entered. In this case, 'yes' is
      entered, so the default doesn't take place, and 'yes' is used as argument.
*/
