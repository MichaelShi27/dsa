// see also: ../../udemy/findLongestSubstring.js

// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

// optimal - keep track of indices
const lengthOfLongestSubstring = str => {
  let longest = 0;
  const seen = {};

  for (let start = 0, i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char] !== undefined)
      start = Math.max(start, seen[char] + 1);
    seen[char] = i;
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
};

// similar to above
const lengthOfLongestSubstring = s => {
  const seen = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen[char] >= start)
      start = seen[char] + 1;
    maxLen = Math.max(maxLen, i - start + 1);
    seen[char] = i;
  }
  return maxLen;
};

// similar to above 2, but less optimal - doesn't keep track of indices, just # of occurrences
const lengthOfLongestSubstring = (s) => {
  const seen = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    seen[char] = ++seen[char] || 1;

    while (seen[char] > 1) {
      const cur = s[start];
      seen[cur]--;
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

// my orig solution
const lengthOfLongestSubstring = str => {
  let longest = 0;
  const seen = {};
  let currLen = 0;

  for (let i = 0, j = 0; j < str.length; j++) {
    const char = str[j];
    if (seen[char] !== undefined) {
      longest = Math.max(longest, currLen);
      while (i <= seen[char]) {
        delete seen[str[i]];
        currLen--;
        i++;
      }
    }
    currLen++;
    seen[char] = j;
  }

  return Math.max(longest, currLen);
};

// similar to my orig solution
const lengthOfLongestSubstring = str => {
  const obj = {};
  let longest = 0;
  let curLen = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    const lastOccurence = obj[cur];
    if (lastOccurence !== undefined && lastOccurence > -1) {
      while (start <= lastOccurence) {
        obj[str[start]] = -1;
        curLen--;
        start++;
      }
    }
    curLen++;
    obj[cur] = i;
    if (curLen > longest)
      longest = curLen;
  }
  return longest;
};
