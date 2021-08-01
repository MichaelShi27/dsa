// better solution
const findLongestSubstring = str => {
  let longest = 0;
  const seen = {};

  for (let i = 0, j = 0; j < str.length; j++) {
    const char = str[j];
    if (seen[char] !== undefined)
      i = Math.max(i, seen[char] + 1)
    seen[char] = j;
    longest = Math.max(longest, j - i + 1)
  }

  return longest;
};

// orig solution
const findLongestSubstring = str => {
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
