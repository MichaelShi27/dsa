// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

const maxSubArray = nums => {
  let maxSum = -Infinity;
  let curSum = 0;

  for (let start = 0, end = 0; end < nums.length; end++) {
    curSum += nums[end];
    maxSum = Math.max(maxSum, curSum);
    if (curSum < 0) {
      start = end + 1;
      curSum = 0;
    }
  }
  return maxSum;
};

const maxSubArray = nums => {
  let maxSum = nums[0];
  let curSum = nums[0];

  for (let num of nums) {
    curSum = Math.max(num, curSum + num);
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};
