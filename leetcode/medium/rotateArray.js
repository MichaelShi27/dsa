// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/

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
