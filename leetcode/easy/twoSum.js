// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// const twoSum = (nums, target) => {
//   const obj = {};

//   for (let i = 0; i < nums.length; i++)
//     if (obj[nums[i]] !== undefined)
//       return [ i, obj[nums[i]] ];
//     else
//       obj[target - nums[i]] = i;
// };

// two-pointer method => less efficient: n log n b/c of .sort()
const twoSum = (nums, target) => {
  const obj = {};
  const found = [];
  const numsCopy = nums.slice();
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0, j = sortedNums.length - 1; true; i++, j--) {
    const lowerEl = sortedNums[i];
    const higherEl = sortedNums[j];

    if (obj[lowerEl] !== undefined) {
      found.push(lowerEl, target - lowerEl);
      break;
    } else
      obj[target - lowerEl] = true;

    if (obj[higherEl] !== undefined) {
      found.push(higherEl, target - higherEl);
      break;
    } else
      obj[target - higherEl] = true;
  }

  let firstIdx, secondIdx;
  for (let i = 0; firstIdx == undefined || secondIdx === undefined; i++) {
    if (firstIdx === undefined && numsCopy[i] === found[0])
      firstIdx = i;
    else if (numsCopy[i] === found[1])
      secondIdx = i;
  }
  return [ firstIdx, secondIdx ];
};

// console.log( twoSum([ -18, 12, 3, 0 ], -6) ); // [ 0, 1 ]
console.log( twoSum([ 3, 3 ], 6) ); // [ 0, 1 ]
// console.log( twoSum([ 3, 2, 4 ], 6) ); // [ 1, 2 ]
