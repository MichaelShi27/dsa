// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// naive - n * m time
const strStr = (haystack, needle) => {
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++)
    for (let j = 0; j < needle.length; j++)
      if (haystack[i + j] !== needle[j]) 
        break;
      else if (j === needle.length - 1)
        return i;

  return -1;
};
