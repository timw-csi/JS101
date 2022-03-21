// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

(P):
input: string
output: array of strings (substrings of original string which are palindromes.)

rules: (explicit requirements:) palindrome words are case sensitive.
                                return all the palindrome substrings from a given string.

       (implicit requirements:) empty string as input should prompt an output of empty array.
                                if no palindrome substrings found, return empty array.
                                palindrome substrings can contain multiple, smaller pal. substrings.
                                  in which case, return longest to smallest substrings.

On the answer discussion to Question 16, first example code block. I think commented output on line 8 should be:

// 1, 2, 3, 4, 5, 6, 7