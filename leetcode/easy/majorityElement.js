// 169. Majority Element
// https://leetcode.com/problems/majority-element

// hash table approach: n time, n space
const majorityElement1 = nums => {
  const obj = {};
  const half = nums.length / 2;

  for (let num of nums) {
    obj[num] = ++obj[num] || 1;
    if (obj[num] > half) return num;
  }
};

// .sort() approach: n log n time, const space
const majorityElement2 = nums => {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums[mid];
};

// random element approach: on average n time, worst case runs forever; const space
const majorityElement3 = nums => {
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

// recursive divide & conquer approach:
// faster when 'countInRange' functionality is kept inside 'getMajElOfSubarray'
const majorityElement4 = nums => {
  const getMajElOfSubarray = (lo, hi) => {
    if (hi === lo)
      return nums[lo]
    const mid = Math.floor((lo + hi) / 2);
    const leftRes = getMajElOfSubarray(lo, mid);
    const rightRes = getMajElOfSubarray(mid + 1, hi);
    if (leftRes === rightRes)
      return leftRes;
    return countInRange(leftRes, lo, mid) > countInRange(rightRes, mid + 1, hi) ? leftRes : rightRes;
  };

  const countInRange = (num, lo, hi) => {
    let ct = 0;
    for (let i = lo; i <= hi; i++)
      if (nums[i] === num)
        ct++;
    return ct;
  };
  return getMajElOfSubarray(0, nums.length - 1);
};

const arr = [ 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
console.log(majorityElement4(arr));