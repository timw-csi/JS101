let statement = "The Flintstones Rock";
let letterFrequency = {};

statement.split('').filter(char => char !== ' ').forEach(letter => {
  if (!letterFrequency[letter]) {
    letterFrequency[letter] = 1;
  } else letterFrequency[letter] += 1;
});

console.log(letterFrequency);