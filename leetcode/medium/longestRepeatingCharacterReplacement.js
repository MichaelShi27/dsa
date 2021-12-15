// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/



// O(26n) since the obj would have all letters in the worst case so Math.max(...Object.values(obj)) would check 26 keys
const characterReplacement = (str, k) => {
  const obj = {};
  let longestSubstrLen = 0;

  for (let p = 0, q = 0; q < str.length; q++) { // sliding window
    obj[str[q]] = ++obj[str[q]] || 1;

    // below loop: while substr is "invalid" i.e. while it can't have all its chars be the same after k changes
    // q - p + 1 is the size of cur substr, while Math.max(...Object.values(obj)) is the number of times the most frequent char in the substr occurs
    while ((q - p + 1) - Math.max( ...Object.values(obj) ) > k) { // can also actually be an if statement, for some reason
      obj[str[p]]--;
      p++;
    }
    longestSubstrLen = Math.max(longestSubstrLen, q - p + 1);
  }
  return longestSubstrLen;
};

console.log( characterReplacement("AAAABBBAAABBAA", 2) );
// console.log( characterReplacement("ABAB", 2) );
