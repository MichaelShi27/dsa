// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/

// from Solution tab
const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;

  let prod = 1;
  let res = 0;
  for (let start = 0, end = 0; end < nums.length; end++) {
    prod *= nums[end];
    while (prod >= k)
      prod /= nums[start++];
    res += end - start + 1;
  }
  return res;
};
