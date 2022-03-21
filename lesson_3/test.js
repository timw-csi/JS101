/* let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};
console.log(munsters);

function messWithDemographics(demoObject) {
  demoObject = JSON.parse(JSON.stringify(demoObject));
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
  return demoObject;
  //return newObj;
}

console.log(messWithDemographics(munsters));
console.table(munsters);

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
                            rps(rps(  paper     ,      'rock'     )   ,  'rock')
                                  rps(paper, rock)
                                      paper
*/

//# 4 from hard_1
/*

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('255.245.16.5'));
console.log(isDotSeparatedIpAddress('4.4.4.4'));
console.log(isDotSeparatedIpAddress('300.14.5.145'));
console.log(isDotSeparatedIpAddress(''));

*/

// #6 from Exercises, Easy 4

function isPalindromicNumber(number) {
  return String(number) === String(number).split("").reverse().join("");
}

//Further exploration

function isPalindrome(num, length) {
  num = String(num);
  if (length !== num.length) {
    let diff = length - num.length;
    for (let i = (num.length - 1); i >= diff; i--) {
      if (num[i] === "0") {
        num = num.slice(0, i);
      } else {
        break;
      }
    }
  }
  return isPalindromicNumber(num);
}

console.log(isPalindrome(000292000, 9));  // true
console.log(isPalindrome(00330, 5)); // false
console.log(isPalindrome(0, 1)); //true

