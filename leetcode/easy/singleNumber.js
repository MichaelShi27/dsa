// 136. Single Number
// https://leetcode.com/problems/single-number/

// n time, n space
const singleNumber = nums => {
  const seen = {};

  for (const num of nums)
    seen[num] = 1 + (seen[el] || 0);

  for (const key in seen)
    if (seen[key] === 1)
      return key;
};

// n log n time, const space
const singleNumber = nums => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2)
    if (nums[i] !== nums[i + 1])
        return nums[i];
};

// n time, const space
const singleNumber = nums => {
  let res = 0;
  for (const num of nums)
    res ^= num;
  return res;
};
