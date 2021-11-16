// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// like twoSum but input arr is sorted, & also 1-indexed for some reason

// the hash table solution works too, but this one uses no extra space
const twoSum = (nums, target) => {
  for (let i = 0, j = nums.length - 1; true;)
    if (nums[i] + nums[j] > target)
      j--;
    else if (nums[i] + nums[j] < target)
      i++;
    else
      return [ i + 1, j + 1 ];
};
