// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// n space, n time
const containsDuplicate = nums => {
  const seen = {};

  for (let num of nums) {
    if (seen[num])
      return true;
    seen[num] = true;
  }
  return false;
};

// n log n time, const space
const containsDuplicate = nums => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === nums[i + 1])
      return true;
  return false;
};

// n space, n time?
// can't end early when duplicate is found, must iterate thru whole thing
const containsDuplicate = nums => nums.length !== new Set(nums).size;
