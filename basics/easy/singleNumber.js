// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

const singleNumber = function(nums) {
  const seen = {};

  for (let el of nums)
      seen[el] = 1 + (seen[el] || 0);

  for (let key in seen)
      if (seen[key] === 1)
          return key;
};