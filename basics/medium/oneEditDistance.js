// Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

// A string s is said to be one distance apart from a string t if you can:

// Insert exactly one character into s to get t.
// Delete exactly one character from s to get t.
// Replace exactly one character of s with a different character to get t.

// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.
// Example 2:

// Input: s = "", t = ""
// Output: false
// Explanation: We cannot get t from s by only one step.
// Example 3:

// Input: s = "a", t = ""
// Output: true
// Example 4:

// Input: s = "", t = "A"
// Output: true


// Constraints:

// 0 <= s.length <= 104
// 0 <= t.length <= 104
// s and t consist of lower-case letters, upper-case letters and/or digits.

const isOneEditDistance = (s, t) => {
  if ( Math.abs(s.length - t.length) > 1 )
    return false;

  if (t.length < s.length)
    [ s, t ] = [ t, s ];

  for (let i = 0, j = 0, count = 0; i < s.length; i++, j++) {
    if (s[i] !== t[j]) {
      if (s[i + 1] === t[j + 1]) {
        s[i] = t[j];
        count++;
      }
    }
    if (count > 1) return false;
    // if curr not equal
      // if next equal (have to replace)
        // replace, increm count
      // else (have to remove)
        // increm j, increm count
  }
};



aa bb c
bb cc