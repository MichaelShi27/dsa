// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

// n time, n space
const isAnagram = (s, t) => {
  if (s.length !== t.length)
    return false;

  const obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
    obj[t[i]] = (obj[t[i]] || 0) - 1;
  }

  for (const key in obj)
    if (obj[key])
      return false;

  return true;
};

// sort approach
// n log n time (bc sort), n space (bc split)?
const isAnagram = (s, t) => {
  if (s.length !== t.length)
    return false;

  s = s.split('');
  t = t.split('');
  s.sort();
  t.sort();

  for (let i = 0; i < s.length; i++)
    if (s[i] !== t[i])
      return false;

  return true;
};

// double obj approach
// n time, n space (or const space since only set # of possible chars?)
const isAnagram = (s, t) => {
  if (s.length !== t.length)
    return false;

  const sObj = {};
  const tObj = {};

  for (const char of s)
    sObj[char] = ++sObj[char] || 1;
  for (const char of t)
    tObj[char] = ++tObj[char] || 1;

  for (const key in sObj)
    if (tObj[key] !== sO[key])
      return false;

  return true;
};
