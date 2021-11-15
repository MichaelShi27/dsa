// • dynamic programming (aka DP) => solving a problem by breaking it down into subproblems, solving each subproblem once, & storing their solutions
// - needs both overlapping subproblems & optimal substructure
//     - overlapping subproblems: not just subproblems (e.g. merge sort), they have to overlap/repeat
//     - optimal substructure: if the optimal solution for a bigger problem can be constructed from the optimal solution for subproblems (e.g. finding shortest path thru graph or fibonacci numbers)
// - memoization is "top down"
// - tabulation is "bottom up" (storing result of a previous result in a “table," usually array)
// 	  - usually done w/ iteration, better space complexity (b/c doesn’t need recursive call stack)

// recursive (non-DP approach)
const getNthFib1 = n => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib1(n - 1) + getNthFib1(n - 2);
};

// memoization
const getNthFib2 = (n, seen = {}) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  if (seen[n]) return seen[n];

  const res = getNthFib2(n - 1, seen) + getNthFib2(n - 2, seen);
  seen[n] = res;
  return res;
};

// tabulation
const getNthFib3 = n => {
  const arr = [ 0, 1 ];
  for (let i = 2; i < n; i++)
    arr[i] = arr[i - 1] + arr[i - 2];
  return arr[n - 1];
};

console.log(getNthFib1(3)); // 1
console.log(getNthFib2(3)); // 1
console.log(getNthFib3(3)); // 1

console.log(getNthFib1(11)); // 55
console.log(getNthFib2(11)); // 55
console.log(getNthFib2(11)); // 55

console.log(getNthFib1(22)); // 10946
console.log(getNthFib2(22)); // 10946
console.log(getNthFib3(22)); // 10946

// DP doesn't always look like the above examples - Kadane's algorithm for finding a maximum subarray sum is considered by many to be a simple example of DP
const maxSubArray = arr => {
  let maxSum = -Infinity;
  let curSum = 0;

  for (let el of arr) {
    curSum = Math.max(el, curSum + el); // this line is where the overlapping subproblems are found
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};
// b/c of the way this algo uses optimal substructures (the maximum subarray ending at each position is calculated in a simple way from a related but smaller and overlapping subproblem: the maximum subarray ending at the previous position), this algo can be viewed as a simple/trivial example of DP
