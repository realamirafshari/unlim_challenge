// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

/* Example 1:
 Input: word1 = "abc", word2 = "pqr"
 Output: "apbqcr"
 Explanation: The merged string will be merged as so:
 word1:  a   b   c
 word2:    p   q   r
 merged: a p b q c r */

const mergeAlternately = function (word1, word2) {
  let string = "";
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      string += word1[i] + word2[i];
    }
  }
};


console.log("abc", "pqr");
