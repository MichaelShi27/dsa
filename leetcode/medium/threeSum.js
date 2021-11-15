// 15. 3Sum

// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []




// very slow solution => faster than ~12%
const threeSum = nums => {
  const seen = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num]) // we've already added all possible answers with this num
      continue;

    const twoSumRes = modifiedTwoSum(nums, -num, i + 1);
    if (twoSumRes.length)
      for (let candidate of twoSumRes)
        if (!seen[candidate[0]] && !seen[candidate[1]] && !seen[candidate[2]]) // if it's in 'seen', it's been fully "explored" so we'd be adding duplicate
          res.push(candidate);
    seen[num] = true;
  }
  return res;
};

const modifiedTwoSum = (nums, target, startingIdx) => {
  const seen = {};
  const res = [];

  for (let i = startingIdx; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num] === false) // we've already used this num & its counterpart, so we skip to avoid repeated values
      continue;
    else if (seen[num]) {
      res.push([ -target, num, target - num ]);
      seen[num] = false;
      seen[target - num] = false;
    } else
      seen[target - num] = true;
  }
  return res;
};

console.log( modifiedTwoSum([-1, 0, 1, 1, 0, 2, -1, -2, -4 ], 1, 1) );
