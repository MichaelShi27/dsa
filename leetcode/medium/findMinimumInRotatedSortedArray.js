// similar problem: findRotatedIndex in ../../udemy/review.js & ./searchInRotatedSortedArray.js

// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// LC solution - similar to mine
const findMin = nums => {
  const len = nums.length;
  if (len === 1 || nums[len - 1] > nums[0]) return nums[0];

  let start = 0;
  let end = len - 1;

  while (true) {
    const mid = Math.floor( (start + end) / 2 );

    if (nums[mid] < nums[mid - 1])
      return nums[mid];
    if (nums[mid] > nums[mid + 1])
      return nums[mid + 1];

    if (nums[start] > nums[mid])
      end = mid - 1;
    else
      start = mid + 1;
  }
};

// pure recursive - can also just pass the pointers instead of slicing array each time
const findMin = nums => {
  const end = nums.length - 1,
    mid = Math.floor(end / 2);

  if (nums[0] <= nums[end])
    return nums[0];
  if (nums[mid] > nums[mid + 1])
    return nums[mid + 1];
  return nums[0] > nums[mid]
    ? findMin( nums.slice(0, mid + 1) )
    : findMin( nums.slice(mid) );
};

// iterative => log n time (binary search)
const findMin = nums => {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (true) {
    mid = Math.floor( (left + right) / 2 );

    if (nums[left] <= nums[right])
      return nums[left];
    if (nums[mid] > nums[mid + 1])
      return nums[mid + 1];
    if (nums[left] > nums[mid])
      right = mid;
    else
      left = mid;
  }
};

// from LC Discussion tab
const findMin = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor( (l + r) / 2 );
    if (nums[m] > nums[r])
      l = m + 1;
    else
      r = m;
  }
  return nums[l];
};
