/*
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.



Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
Example 3:

Input: s = "a", t = "aa"
Output: "a"
Example 4:

Input: s = "ae", t = "aea"
Output: "a"


Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lower-case English letters.
*/

var findTheDifference = function(s, t) {
  const o = {};
  for (let i = 0; i < t.length; i++) {
      o[s[i]] = o[s[i]] === undefined ? -1 : --o[s[i]];
      o[t[i]] = o[t[i]] === undefined ? 1 : ++o[t[i]];
  }
  for (let key in o)
      if (o[key] === 1)
          return key;
};

const max = 10000
let ct = 0;
for (let i = 0; i < max; i++) {
  for (let j = i; j < max; j++) {
    ct++;
  }
}
console.log(ct);