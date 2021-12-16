// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/


const longestCommonSubsequence = (str1, str2) => {
  const dp = new Array(str1.length + 1);
  dp.fill( new Array(str2.length + 1).fill(0) );
  console.log(dp);
};

// naive recursive solution w/o DP => exceeds time limit but passes 17/44 test cases
// O(2^n)?
const longestCommonSubsequence = (str1, str2) => {
  if (!str1 || !str2) return 0;

  return str1[0] === str2[0]
    ? 1 + longestCommonSubsequence( str1.slice(1), str2.slice(1) );
    : Math.max( longestCommonSubsequence(str1, str2.slice(1)), longestCommonSubsequence(str1.slice(1), str2) );
};
