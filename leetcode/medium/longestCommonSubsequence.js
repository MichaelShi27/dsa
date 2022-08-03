// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/

// O(2 * m * n) time, O(m * n) space
// bottom-up iterative DP approach (can also do top-down? i.e. upper left of chart to bottom right)
// based off NeetCode vid: https://www.youtube.com/watch?v=Ua0GhsJSlWM
const longestCommonSubsequence5 = (str1, str2) => {
  const dp = [];
  for (let i = 0; i < str1.length + 1; i++) { // can't use .fill here since it's a non-primitive value
    const row = new Array(str2.length + 1);
    dp.push( row.fill(0) );
  }

  for (let row = str1.length - 1; row >= 0; row--)
    for (let col = str2.length - 1; col >= 0; col--)
      if (str1[row] === str2[col])
        dp[row][col] = 1 + dp[row + 1][col + 1];
      else
        dp[row][col] = Math.max( dp[row][col + 1], dp[row + 1][col] );

  return dp[0][0];
};

// iterative DP approach based off Abdul Bari's vid: https://www.youtube.com/watch?v=sSno9rV8Rhg
// similar to longestCommonSubsequence5 but nested for-loops go "up" instead of "down"
const longestCommonSubsequence4 = (str1, str2) => {
  const dp = [];
  for (let i = 0; i < str1.length + 1; i++) {
    const row = new Array(str2.length + 1);
    dp.push( row.fill(0) );
  }

  for (let row = 1; row <= str1.length; row++)
    for (let col = 1; col <= str2.length; col++)
      if (str1[row - 1] === str2[col - 1]) // need the -1s to acct for the 0-indexed strs
        dp[row][col] = 1 + dp[row - 1][col - 1];
      else
        dp[row][col] = Math.max( dp[row][col - 1], dp[row - 1][col] );

  return dp[str1.length][str2.length];
};
console.log( longestCommonSubsequence4("abc", "def") );

// recursive memoized approach based off Abdul Bari's vid => uses table
// O(2 * m * n)
const longestCommonSubsequence3 = (str1, str2) => {
  const dp = [];
  for (let i = 0; i < str1.length + 1; i++) {
    const row = new Array(str2.length + 1);
    dp.push( row.fill(null) );
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

// console.log( longestCommonSubsequence3("abcde", "ace") );

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

// naive recursive solution w/o DP => exceeds time limit after 17/44 test cases
// exponential time
// top-down approach
const longestCommonSubsequence1 = (str1, str2) => {
  if (!str1 || !str2) return 0;

  return str1[0] === str2[0]
    ? 1 + longestCommonSubsequence( str1.slice(1), str2.slice(1) )
    : Math.max( longestCommonSubsequence(str1, str2.slice(1)), longestCommonSubsequence(str1.slice(1), str2) );
};

// memoization w/ object (from LC Discussion)
const longestCommonSubsequence0 = (str1, str2) => recurse( str1, str2, str1.length - 1, str2.length - 1, {} );

const recurse = (str1, str2, idx1, idx2, memo) => {
  if (idx1 < 0 || idx2 < 0) return 0;

  const key = idx1 + '#' + idx2;
  if (memo[key]) return memo[key];

  let res;

  if (str1[idx1] === str2[idx2])
    res = 1 + recurse( str1, str2, idx1 - 1, idx2 - 1, memo );
  else
    res = Math.max(
      recurse( str1, str2, idx1, idx2 - 1, memo ),
      recurse( str1, str2, idx1 - 1, idx2, memo )
    );

  memo[key] = res;
  return res;
};

// iter version of longestCommonSubsequence0
const longestCommonSubsequence01 = (str1, str2) => {
  const memo = {};

  for (let i = 0; i < str1.length; i++)
    for (let j = 0; j < str2.length; j++) {
      let val;

      if (str1[i] === str2[j])
        val = 1 + ( memo[`${i - 1}/${j - 1}`] ?? 0 );
      else
        val = Math.max(
          memo[`${i}/${j - 1}`] ?? 0,
          memo[`${i - 1}/${j}`] ?? 0
        );
      memo[`${i}/${j}`] = val;
    }

  return memo[`${str1.length - 1}/${str2.length - 1}`];
};
