// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// original approach
const maxSubArray = nums => {
  let curSum = 0;
  let maxSum = -Infinity;

  for (const num of nums) {
    curSum += num;
    maxSum = Math.max(curSum, maxSum);
    if (curSum <= 0) // we can disregard everything previous if it won't help increase our sum
      curSum = 0;
  }
  return maxSum;
};

// Kadane's algorithm (simple example of dynamic programming)
// - actually quite similar to above solution, just abstracting the logic, e.g. num is just  0 + num
const maxSubArray = nums => {
  let maxSum = -Infinity;
  let curSum = 0;

  for (const num of nums) {
    curSum = Math.max(num, curSum + num);
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};

// similar to above solution, just stores curSum in the arr itself (tabulation?)
const maxSubArray = nums => {
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;
};
