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

// two pointers => O(1n) time, O(1) space? (does ES6 array swapping use space?)
const moveZeroes = nums => {
  for (let i = 0, j = 1; j < nums.length; i++, j++) {
    if (nums[i] !== 0)
      continue;
    else if (nums[j] === 0)
      i--; // since we only want j to increase in this case
    else
      [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
  }
};

// two pointers => O(1n) time, O(1) space
// sub-optimal - if array has lots of 0s, the 2nd for loop is still writing 0s over the 0s which can be redundant
const moveZeroes = nums => {
    let lastNonZero = 0; // actually the idx AFTER last nonzero num
    for (let i = 0; i < nums.length; i++)
        if (nums[i]) {
            nums[lastNonZero] = nums[i];
            lastNonZero++;
        }
    for (let i = lastNonZero; i < nums.length; i++)
        nums[i] = 0;
};

// O(2n) time, O(1n) space
const moveZeroes = nums => {
  const nonZeroes = [];

  for (let num of nums)
    if (num !== 0)
      nonZeroes.push(num);

  for (let i = 0; i < nonZeroes.length; i++)
    nums[i] = nonZeroes[i];

  for (let i = nonZeroes.length; i < nums.length; i++)
    nums[i] = 0;
};


// splice solutions below => O(n^2)?

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


// iterative
var moveZeroes = function(nums) {
    for (let i = 0, j = 0; i < nums.length; i++, j++) {
        if (nums[j] === 0) {
            nums.push(0);
            nums.splice(j, 1);
            j--;
        }
    }
};


// recursive
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
