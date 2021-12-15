// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

// don't actually need a var to keep track of longest substr len, we can just return substr size at the end
// see https://leetcode.com/problems/longest-repeating-character-replacement/discuss/872604/99-Javascript-Solution-with-Explanation
const characterReplacement4 = (str, k) => {
  const obj = {};
  let longestSubstrLen = 0;
  let mostCommonCharCt = 0;
  let p = 0;
  let q = 0;

  for (; q < str.length; q++) {
    obj[str[q]] = ++obj[str[q]] || 1;
    mostCommonCharCt = Math.max( mostCommonCharCt, obj[str[q]] );

    if ((q - p + 1) - mostCommonCharCt > k) {
      obj[str[p]]--;
      p++;
    }
  }
  return q - p;
};

// O(1n) - we actually only need to update mostCommonCharCt when there's a bigger val. it doesn't matter otherwise
// see 12:00 in https://www.youtube.com/watch?v=gqXU1UyA8pk
const characterReplacement3 = (str, k) => {
  const obj = {};
  let longestSubstrLen = 0;
  let mostCommonCharCt = 0;

  for (let p = 0, q = 0; q < str.length; q++) {
    obj[str[q]] = ++obj[str[q]] || 1;
    mostCommonCharCt = Math.max( mostCommonCharCt, obj[str[q]] );

    if ((q - p + 1) - mostCommonCharCt > k) {
      obj[str[p]]--;
      p++;
    }
    longestSubstrLen = Math.max(longestSubstrLen, q - p + 1);
  }
  return longestSubstrLen;
};

// also O(26n), pretty similar to below approach
const characterReplacement2 = (str, k) => {
  const obj = {};
  let longestSubstrLen = 0;

  for (let p = 0, q = 0; q < str.length; q++) {
    obj[str[q]] = ++obj[str[q]] || 1;

    let mostCommonCharCt = 0;
    // find the new mostCommonCharCt for the cur substr, since last iteration of the for-loop we could've decremented a count
    // ( can also use Math.max(...Object.values(obj)) )
    for (let i = p; i <= q; i++)
      mostCommonCharCt = Math.max( mostCommonCharCt, obj[str[i]] );

    if ((q - p + 1) - mostCommonCharCt > k) {
      obj[str[p]]--;
      p++;
    }
    longestSubstrLen = Math.max(longestSubstrLen, q - p + 1);
  }
  return longestSubstrLen;
};

// O(26n) since the obj would have all letters in the worst case so Math.max(...Object.values(obj)) would check 26 keys
const characterReplacement1 = (str, k) => {
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
