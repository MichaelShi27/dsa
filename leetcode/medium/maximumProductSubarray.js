// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/

const maxProduct = nums => {
  let curMaxProd = 1;
  let curMinProd = 1;
  let overallMaxProd = nums[0];

  for (const num of nums) {
    const temp = curMaxProd;
    curMaxProd = Math.max(num, num * curMaxProd, num * curMinProd);
    curMinProd = Math.min(num, num * temp, num * curMinProd);
    overallMaxProd = Math.max(overallMaxProd, curMaxProd);
  }
  return overallMaxProd;
};
