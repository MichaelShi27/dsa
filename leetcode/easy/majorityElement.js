/**
 *
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 * @param {number[]} nums
 * @return {number}
 */

// O(n)
const majorityElement = nums => {
  const obj = {};
  const half = nums.length / 2;

  for (let num of nums) {
    obj[num] = ++obj[num] || 1;
    if (obj[num] > half) return num;
  }
};

// O(n log n)
const majorityElement = nums => {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums[mid];
};
