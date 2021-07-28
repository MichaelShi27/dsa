/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

var isAnagram = function(s, t) {
  if (s.length !== t.length)
      return false;

  const obj = {};

  for (let i = 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
      obj[t[i]] = (obj[t[i]] || 0) - 1;
  }

  for (let key in obj)
      if (obj[key] !== 0)
          return false;

  return true;
};