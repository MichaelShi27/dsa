// 15. 3Sum
// https://leetcode.com/problems/3sum/

/*
Why sort array? In my below solutions, the ones where I sort are a lot faster, even though they seem to still be O(n^2) w/o major optimizations
- I think it's just bc sorting allows very quick skipping of duplicate triplets

From some website:
Sorting your input array allows for powerful assumptions:
- duplicates are always adjacent to each other
- moving an index to the right increases the value, while moving an index to the left decreases the value
*/

const threeSum = nums => {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) // since nums is sorted, we know if cur val is pos, following vals are bigger & no combo can equal 0, so we break early
      break;
    if (nums[i] === nums[i - 1]) // using an obj to keep track of repeat values rather than this if statement seems to be faster for some reason
      continue;

    for (let low = i + 1, high = nums.length - 1; low < high;) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum > 0)
        high--;
      else if (sum < 0)
        low++;
      else {
        res.push([ nums[i], nums[low], nums[high] ]);
        low++; // can also move high, or both, but only need to move 1 of the vars
        while (nums[low] === nums[low - 1])
          low++;
      }
    }
  }
  return res;
};

console.log( threeSum([ -1, 0, 1, 2, -1, -4 ]) ); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ];


// very slow solution => faster than ~12%
const threeSum = nums => {
  const seen = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num]) // we've already added all possible answers with this num
      continue;

    const candidates = modifiedTwoSum(nums, -num, i + 1);
    for (const cand of candidates)
      if (!seen[cand[0]] && !seen[cand[1]] && !seen[cand[2]]) // if a num is in 'seen', it's been fully "explored" so we'd be adding duplicate
        res.push(cand);
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
    } else // seen[num] is undefined
      seen[target - num] = true;
  }
  return res;
};

// console.log( modifiedTwoSum([-1, 0, 1, 1, 0, 2, -1, -2, -4 ], 1, 1) );

// // 2nd time
// // similar to above approach, but checks for repeats in main func rather than helper, which is less efficient I think. it also does extra work by not using startingIdx var,
// const threeSum = nums => {
//   const seen = {};
//   const res = [];

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (seen[num]) continue;
//     seen[num] = true;

//     const candidates = modifiedTwoSum(nums, -num, i);

//     for (const cand of candidates) {
//       const str = JSON.stringify( cand.sort((a, b) => a - b) );
//       if (seen[str]) continue;

//       seen[str] = true;
//       res.push(cand);
//     }
//   }
//   return res;
// };

// const modifiedTwoSum = (nums, target, idx) => {
//   const seen = {};
//   const res = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (i === idx) continue;

//     const num = nums[i];
//     if (seen[num])
//       res.push([ num, target - num, -target ]);
//     seen[target - num] = true;
//   }
//   return res;
// };
