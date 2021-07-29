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

// var majorityElement = function(nums) {
//     const obj = {};
//     const num = nums.length / 2;

//     for (let el of nums) {
//         obj[el] = (obj[el] || 0) + 1;
//         if (obj[el] > num) return el;
//     }
// };

var majorityElement = function(nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[ Math.floor(nums.length / 2) ];
};