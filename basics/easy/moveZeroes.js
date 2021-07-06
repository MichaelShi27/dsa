// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// iter
// var moveZeroes = function(nums) {
//     for (let i = 0, j = 0; i < nums.length; i++, j++) {
//         if (!nums[j]) {
//             nums.push(nums[j]);
//             nums.splice(j, 1);
//             j--;
//         }
//     }
// };


// recurs
var moveZeroes = function(nums, i = 0, j = 0) {
  if (i === nums.length) return;

  if (!nums[j]) {
      nums.push(nums[j]);
      nums.splice(j, 1);
      j--;
  }
  i++;
  j++;

  moveZeroes(nums, i, j);
  return nums;
};
