// find longest substr with all unique chars
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594

// better solution
const findLongestSubstring = str => {
  let longest = 0;
  const seen = {};

  for (let i = 0, j = 0; j < str.length; j++) {
    const char = str[j];
    if (seen[char] !== undefined)
      i = Math.max(i, seen[char] + 1);
    seen[char] = j;
    longest = Math.max(longest, j - i + 1);
  }

  return longest;
};

// my orig solution
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

// similar to my orig solution
const findLongestSubstring = str => {
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
