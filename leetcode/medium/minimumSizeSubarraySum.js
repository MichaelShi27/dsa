// see also: ../../udemy/minSubarrayLen.js

// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

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
const minSubArrayLen = (target, nums) => {
  let minLen = Infinity;

  for (let left = 0, right = 0, sum = 0; right < nums.length; right++) {
    if (nums[right] >= target) return 1;
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
