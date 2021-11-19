// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

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

// two pointers
const moveZeroes = nums => {
  for (let i = 0, j = 1; j < nums.length; i++, j++) {
    if (nums[i] !== 0)
      continue;
    else if (nums[j] === 0)
      i--;
    else
      [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
  }
};


// naive
//  var moveZeroes = function(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 0) {
//           count++;
//           nums.splice(i, 1);
//           i--;
//       }
//   }
//   for (let i = 0; i < count; i++)
//       nums.push(0)
// };


// iter sub-optimal
var moveZeroes = function(nums) {
    for (let i = 0, j = 0; i < nums.length; i++, j++) {
        if (nums[j] === 0) {
            nums.push(0);
            nums.splice(j, 1);
            j--;
        }
    }
};


// recurs sub-optimal
var moveZeroes = function(nums, i = 0, j = 0) {
  if (i === nums.length) return;

  if (nums[j] === 0) {
      nums.push(0);
      nums.splice(j, 1);
      j--;
  }
  i++;
  j++;

  moveZeroes(nums, i, j);
};
