// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/

// O(n) time, O(1) space => reverse arr, then reverse first k elements of arr, then reverse rest
const rotate = (nums, k) => {
  if (k >= nums.length)
    k %= nums.length;

  // can use less space by not declaring p & q each time, and especially by not using ES6 syntax swap (temp var actually better!?)
  for (let p = 0, q = nums.length - 1; p < q; p++, q--)
    [ nums[p], nums[q] ] = [ nums[q], nums[p] ];
  for (let p = 0, q = k - 1; p < q; p++, q--)
    [ nums[p], nums[q] ] = [ nums[q], nums[p] ];
  for (let p = k, q = nums.length - 1; p < q; p++, q--)
    [ nums[p], nums[q] ] = [ nums[q], nums[p] ];
};

// O(n) time, O(n) space
const rotate = (nums, k) => {
  if (k >= nums.length)
    k %= nums.length;

  const pivotIdx = nums.length - k;
  const spliced = nums.splice(0, pivotIdx);
  nums.push(...spliced);
};

// O(2n) time, O(n) space
const rotate = (nums, k) => {
  if (k >= nums.length)
    k %= nums.length;

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let newIdx = i + k;
    if (newIdx >= nums.length)
      newIdx -= nums.length;
    res[newIdx] = nums[i];
  }
  for (let i = 0; i < nums.length; i++)
    nums[i] = res[i];
  return nums;
};

const arr = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log( rotate(arr, 3) ); // [ 5, 6, 7, 1, 2, 3, 4 ]
