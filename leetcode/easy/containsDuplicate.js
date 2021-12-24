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

