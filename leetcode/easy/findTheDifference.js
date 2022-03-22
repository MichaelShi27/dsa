// 389. Find the Difference
// https://leetcode.com/problems/find-the-difference/

// obj approach
// max(m, n) time, n space
const findTheDifference = (s, t) => {
  const o = {};
  for (let i = 0; i < t.length; i++) {
    o[s[i]] = (o[s[i]] || 0) - 1;
    o[t[i]] = (o[t[i]] || 0) + 1;
  }
  for (const key in o)
    if (o[key] === 1)
      return key;
};

// alternate obj approach
// m + n time, n space
// worst case is relatively slow, but can short-circuit early
const findTheDifference = (s, t) => {
  const seen = {};

  for (const char of s)
    seen[char] = ++seen[char] || 1;

  for (const char of t)
    if (seen[char]) {
      seen[char]--;
      if (seen[char] === 0)
        delete seen[char];
    } else
      return char;
};


