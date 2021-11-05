// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// store each mapping
var isIsomorphic = function(s, t) {
  const sObj = {};
  const tObj = {};
  for (let i = 0; i < s.length; i++) {
      const sChar = s[i];
      const tChar = t[i];
      if (tObj[sChar] || sObj[tChar]) {
          if (sChar !== sObj[tChar] || tChar !== tObj[sChar])
              return false;
      } else {
          sObj[tChar] = sChar;
          tObj[sChar] = tChar;
      }
  }
  return true;
};

// alter strings & compare
var isIsomorphic = function(s, t) {
  const sObj = {};
  const tObj = {};
  s = s.split('');
  t = t.split('');

  for (let i = 0; i < s.length; i++) {
    if ( sObj[s[i]] !== undefined )
      s[i] = sObj[s[i]];
    else {
      sObj[s[i]] = i;
      s[i] = i;
    }
    if ( tObj[t[i]] !== undefined )
      t[i] = tObj[t[i]];
    else {
      tObj[t[i]] = i;
      t[i] = i;
    }
  }
  return s.join(' ') === t.join(' ');
};
