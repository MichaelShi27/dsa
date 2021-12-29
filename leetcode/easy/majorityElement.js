// 169. Majority Element
// https://leetcode.com/problems/majority-element

// hash table approach: n time, n space
const majorityElement = nums => {
  const obj = {};
  const half = nums.length / 2;

  for (let num of nums) {
    obj[num] = ++obj[num] || 1;
    if (obj[num] > half) return num;
  }
};

// .sort() approach: n log n time, const space
const majorityElement = nums => {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums[mid];
};

// random element approach: on average n time, worst case runs forever; const space
const majorityElement = nums => {
  while (true) {
    const randIdx = Math.floor( Math.random() * nums.length );
    if (isMajorityElement(nums[randIdx], nums))
      return nums[randIdx];
  }
};

const isMajorityElement = (num, nums) => {
  let ct = 0;
  for (const el of nums) {
    if (el === num)
      ct++;
    if (ct > nums.length / 2)
      return true;
  }
  return false;
};
