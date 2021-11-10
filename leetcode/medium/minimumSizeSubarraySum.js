// see also: ../../udemy/minSubarrayLen.js

// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

const minSubArrayLen = (target, arr) => {
  let minLength = Infinity;
  let currSum = 0;

  for (let i = 0, j = 0; j <= arr.length;) {
    if (arr[j] >= target)
      return 1;
    if (currSum >= target) {
      minLength = Math.min(minLength, j - i);
      currSum -= arr[i];
      i++;
    } else {
      currSum += arr[j];
      j++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};


// alternate-but-similar approach
const minSubArrayLen = (target, arr) => {
  let minLength = Infinity;

  let i = 0;
  let curSum = 0;

  for (let j = 0; j < arr.length; j++) {
    curSum += arr[j];

    while (curSum >= target) {
      minLength = Math.min(minLength, j - i + 1);
      curSum -= arr[i];
      i++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
