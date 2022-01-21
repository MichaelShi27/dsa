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
    // the above return statement passes the tests, but I feel it should check whole subarray (i.e. lo to hi for both left & right) instead of just its own half.
    // indeed, the official LC solution uses the whole subarray - maybe the LC tests just aren't extensive enough? I feel there are edge cases where the above
    // line won't work, but I couldn't come up with any
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

/*
recursive divide & conquer approach where helper func returns 2 values instead of 1:
- I thought this would be better than the above solution bc it wouldn't have to "recount" if the left & right returned elements weren't equal,
since the left & right halves would also theoretically return the # of occurrences of their respective elements and I could just compare them directly.
However, I ended up still having to count them (i.e. newLeftCt & newRightCt) since otherwise incorrect counts are passed up the recursive stack, leading
to incorrect results
*/
const majorityElement5 = nums => {
  const countInRange = (num, lo, hi) => {
    let ct = 0;
    for (let i = lo; i <= hi; i++)
      if (nums[i] === num)
        ct++;
    return ct;
  };

  const getMajElOfSubarray = (lo, hi) => {
    if (hi === lo)
      return [ nums[lo], 1 ];
    const mid = Math.floor((lo + hi) / 2);
    const [ leftMajEl, leftCt ] = getMajElOfSubarray(lo, mid);
    const [ rightMajEl, rightCt ] = getMajElOfSubarray(mid + 1, hi);
    if (leftMajEl === rightMajEl)
      return [ leftMajEl, leftCt + rightCt ];
    const newLeftCt = countInRange(leftMajEl, lo, mid);
    const newRightCt = countInRange(rightMajEl, mid + 1, hi);
    return newLeftCt > newRightCt ? [ leftMajEl, newLeftCt ] : [ rightMajEl, newRightCt ];
  };
  return getMajElOfSubarray(0, nums.length - 1)[0];
};

const arr = [ 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
console.log(majorityElement6(arr));


// recursive Boyer-Moore algo => see LC solution tab
const majorityElement6 = nums => {
  const boyerMoore = start => {
    let ct = 0;
    let cand = nums[start];

    while (true) {
      if (start === nums.length - 1)
        return cand;

      if (nums[start] === cand)
        ct++;
      else
        ct--;

      start++;
      if (ct === 0)
        return boyerMoore(start);
    }
  };
  return boyerMoore(0);
};

// iterative Boyer-Moore
const majorityElement7 = nums => {
  let ct = 0;
  let cand;
  for (const num of nums) {
    if (ct === 0)
      cand = num;
    ct += cand === num ? 1 : -1;
  }
  return cand;
};

// const arr = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 7, 7, 7, 7];
// const arr = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5];
const arr = [ 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];

console.log(majorityElement6(arr));
