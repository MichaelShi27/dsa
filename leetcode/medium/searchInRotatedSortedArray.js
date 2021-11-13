// see also: findRotatedIdx in ../../udemy/review.js & ./findMinimumInRotatedSortedArray.js

// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/


// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

const search = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;
  const pivotIdx = findPivotIdx(arr);

  if (pivotIdx !== 0) {
    if (num > arr[0])
      high = pivotIdx; // look to left of pivot
    else if (num < arr[0])
      low = pivotIdx; // look to right of pivot
    else
      return 0;
  }

  while (low <= high) {
    const mid = Math.floor( (low + high) / 2 );
    if (num < arr[mid])
      high = mid - 1;
    else if (num > arr[mid])
      low = mid + 1;
    else
      return mid;
  }
  return -1;
};

const findPivotIdx = arr => { // essentially the same as ./findMinimumInRotatedSortedArray.js
  const len = arr.length;
  if (len === 1 || arr[len - 1] > arr[0]) return 0;

  let start = 0;
  let end = len - 1;

  while (true) {
    const mid = Math.floor( (start + end) / 2 );

    if (arr[mid] < arr[mid - 1])
      return mid;
    if (arr[mid] > arr[mid + 1])
      return mid + 1;

    if (arr[start] > arr[mid])
      end = mid - 1;
    else
      start = mid + 1;
  }
};

// console.log( search([ 3, 4, 1, 2 ], 4) === 1 );
// console.log( search([ 6, 7, 8, 9, 1, 2, 3, 4 ], 8) === 2 );
// console.log( search([ 6, 7, 8, 9, 1, 2, 3, 4 ], 3) === 6 );
// console.log( search([ 6, 7, 8, 9, 1, 2, 3, 4 ], 12) === -1 );
// console.log( search([ 37, 44, 66, 102, 10, 22, 10101, 2 ], 12) === -1 );
// console.log( search([ 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 9 ], 16) === 5 );
// console.log( search([ 1, 2, 3, 4 ], 1) === 0 );
// console.log( search([ 6, 7, 8, 1, 2, 3, 4 ], 1) === 3 );
// console.log( search([ 6, 7, 8, 1, 2, 3, 4 ], 8) === 2 );
// console.log( search([ 6, 7, 8, 1, 2, 3, 4 ], 6) === 0 );
// console.log( search([ 6, 7, 8, 1, 2, 3, 4 ], 4) === 6 );
// console.log( search([ 4 ], 4) === 0 );
// console.log( search([ 1, 3 ], 3) === 1 );
// console.log( search([ 1, 3, 5 ], 3) === 1 );
// console.log( search([ 6 ], 1) === -1 );