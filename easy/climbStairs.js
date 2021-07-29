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

var climbStairs = function(n) {
  return recurse(0, n);
};

const recurse = (curr, limit) => {
  if (curr > limit) return 0;
  if (curr === limit) return 1;
  return recurse(curr + 1, limit) + recurse(curr + 2, limit);
}

console.log(climbStairs(5));