// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/

// O(2 * m * n) time, O(m * n) space
// bottom-up approach (can also do top-down? i.e. upper left of chart to bottom right)
// based off NeetCode video
const longestCommonSubsequence4 = (str1, str2) => {
  const dp = []; // if I use .fill(), I get a bug that seems inherent to .fill()
  for (let i = 0; i < str1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str2.length + 1; j++)
      row.push(0);
    dp.push(row);
  }

  for (let row = str1.length - 1; row >= 0; row--)
    for (let col = str2.length - 1; col >= 0; col--)
      if (str1[row] === str2[col])
        dp[row][col] = 1 + dp[row + 1][col + 1];
      else
        dp[row][col] = Math.max( dp[row][col + 1], dp[row + 1][col] );

  return dp[0][0];
};

// console.log( longestCommonSubsequence("abcba", "abcbcba") );


// memoized approach based off https://www.youtube.com/watch?v=sSno9rV8Rhg
// O(m * n)
const longestCommonSubsequence3 = (str1, str2) => {
  const dp = []; // if I use .fill(), I get a bug that seems inherent to .fill()
  for (let i = 0; i < str1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str2.length + 1; j++)
      row.push(null);
    dp.push(row);
  }

  const recurse = (row, col) => {
    if (row === str1.length || col === str2.length)
      dp[row][col] = 0;
    else if (str1[row] === str2[col]) {
      const temp = dp[row + 1][col + 1] || recurse(row + 1, col + 1);
      dp[row][col] = 1 + temp;
    } else {
      const temp1 = dp[row][col + 1] || recurse(row, col + 1);
      const temp2 = dp[row + 1][col] || recurse(row + 1, col);
      dp[row][col] = Math.max(temp1, temp2);
    }
    return dp[row][col];
  };
  return recurse(0, 0);
};

console.log( longestCommonSubsequence3("abcde", "ace") );

/*
- attempted memoized recursive solution => passes 42/44 test cases but gets this error msg:
  terminate called after throwing an instance of 'std::bad_alloc'
    what():  std::bad_alloc
- the test case it fails has massive string inputs => perhaps the key eventually gets too large to store in the object?
*/
const longestCommonSubsequence2 = (str1, str2, seen = {}) => {
  if (!str1 || !str2) return 0;

  let res;
  if (str1[0] === str2[0]) {
    const temp = seen[`${str1.slice(1)} ${str2.slice(1)}`] || longestCommonSubsequence( str1.slice(1), str2.slice(1), seen );
    res = 1 + temp;
  } else {
    const temp1 = seen[`${str1.slice(1)} ${str2}`] || longestCommonSubsequence( str1.slice(1), str2, seen );
    const temp2 = seen[`${str1} ${str2.slice(1)}`] || longestCommonSubsequence( str1, str2.slice(1), seen );
    res =  Math.max(temp1, temp2);
  }
  seen[`${str1} ${str2}`] = res;
  return seen[`${str1} ${str2}`];
};

// // naive recursive solution w/o DP => exceeds time limit after 17/44 test cases
// // exponential time
// // top-down approach
// const longestCommonSubsequence1 = (str1, str2) => {
//   if (!str1 || !str2) return 0;

//   return str1[0] === str2[0]
//     ? 1 + longestCommonSubsequence( str1.slice(1), str2.slice(1) );
//     : Math.max( longestCommonSubsequence(str1, str2.slice(1)), longestCommonSubsequence(str1.slice(1), str2) );
// };
