// see also: findRotatedIdx in ../../udemy/review.js & ./findMinimumInRotatedSortedArray.js

// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

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

// 2nd time
const search = (nums, target) => {
  if (nums.length === 1)
    return nums[0] === target ? 0 : -1;

  let pivot = (nums[0] < nums[nums.length - 1]) ? 0 : findPivot(nums);
  let lo = 0, hi = nums.length - 1;

  if (pivot !== 0) {
    if (target >= nums[0] && target <= nums[pivot - 1])
      hi = pivot;
    else
      lo = pivot;
  }


  while (lo <= hi) {
    const mid = Math.floor( (lo + hi) / 2 );
    if (nums[mid] === target)
      return mid;
    else if (nums[mid] > target)
      hi = mid - 1;
    else
      lo = mid + 1;
  };
  return -1;
};

const findPivot = nums => {
  let lo = 0, hi = nums.length - 1;

  while (true) {
    const mid = Math.floor( (lo + hi) / 2 );
    if (nums[lo] < nums[hi])
      return lo;
    else if (nums[mid] > nums[mid + 1])
      return mid + 1;
    else if (nums[lo] > nums[mid])
      hi = mid;
    else // nums[lo] < nums[mid]
      lo = mid;
  }
};
