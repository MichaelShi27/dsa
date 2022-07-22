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

// charCode solution from LC Discussion
// 2(m + n) time?, m + n space
// don't use .split() or .reduce() to improve time?
const findTheDifference = (s, t) => {
  const sSum = s.split('').reduce((sum, cur) => sum + cur.charCodeAt(0));
  const tSum = t.split('').reduce((sum, cur) => sum + cur.charCodeAt(0));
  return String.fromCharCode(tSum - sSum);
};

// sort solution
const findTheDifference = (s, t) => {
  s = s.split('').sort();
  t = t.split('').sort();
  return t.find((char, i) => char !== s[i]);
};

// xor solution
const findTheDifference = (s, t) => {
  let sum = t.charCodeAt(t.length - 1);

  for (let i = 0; i < s.length; i++) {
    sum ^= s.charCodeAt(i);
    sum ^= t.charCodeAt(i);
  }
  return String.fromCharCode(sum);
};

// alt xor solution
const findTheDifference = (s, t) => {
  let xor = 0

  for (const char of s)
    xor ^= char.charCodeAt();
  for (const char of t)
    xor ^= char.charCodeAt();

  return String.fromCharCode(xor);
};
