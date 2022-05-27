// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

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

// iterative - similar to tabulation method, but uses fibonacci sequence (the # of steps actually follows fibonacci)
const climbStairs4 = n => {
  let prev = 0, cur = 1;
  for (let i = 2; i <= n; i++)
    [ prev, cur ] = [ cur, prev + cur ];
  return cur;
};

// memoization => this approach is like approach 1, just going 0 to n instead of n to 0. this approach sort of simulates "real life" -
// at each step, I can take 1 or 2 steps, and if I go past the end (whether using 1 or 2 steps) it doesn't count, while if I hit the end
// exactly, it counts
const climbStairs3 = n => {
  const seen = {};

  const recurse = (curStep) => {
    if (curStep > n) return 0;
    if (curStep === n) return 1;
    if (seen[curStep]) return seen[curStep];

    const res = recurse(curStep + 1) + recurse(curStep + 2);
    seen[curStep] = res;
    return res;
  };
  return recurse(0);
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
