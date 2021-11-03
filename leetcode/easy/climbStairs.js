// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45


/*
APPROACH:
- solve for first few cases (e.g. n = 1-4) and look for pattern
- intuition: can only get to n by taking 1 step from n-1 or 2 steps from n-2, so it's all of the ways to get to n-2 (since we simply add 2 to each to get to n) plus all the ways to get to n-1 (and we simply add 1 to each to get to n)
*/

// memoization
const climbStairs1 = n => {
  const seen = {};

  const recurse = n => {
    if (n === 1 || n === 2) return n;
    if (seen[n]) return seen[n];

    const res = recurse(n - 1) + recurse(n - 2);
    seen[n] = res;
    return res;
  };
  return recurse(n);
};

// tabulation
const climbStairs2 = n => {
  const arr = [ null, 1, 2 ];
  for (let i = 3; i <= n; i++)
    arr[i] = arr[i - 1] + arr[i - 2];
  return arr[n];
};


const func = climbStairs1;
const arr = [ 1, 2, 3, 4, 5, 6, 11 ].map(el => func(el));
const expected = [ 1, 2, 3, 5, 8, 13, 144 ];
console.log( JSON.stringify(arr) === JSON.stringify(expected) );


// // my original approach (exceeds time limit)
// var climbStairs = function(n) {
//   let ct = 1;

//   const recurse = cur => {
//       if (cur === n || cur === n - 1 )
//           return;
//       ct++;
//       recurse(cur + 1);
//       recurse(cur + 2);
//   };
//   recurse(0);
//   return ct;
// };
