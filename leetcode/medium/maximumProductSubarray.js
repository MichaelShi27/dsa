// 152. Maximum Product Subarray

// https://leetcode.com/problems/maximum-product-subarray/

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

const maxProduct = arr => {
  let curMaxProd = 1;
  let curMinProd = 1;
  let overallMaxProd = arr[0];

  for (let el of arr) {
    const temp = curMaxProd;
    curMaxProd = Math.max(el, el * curMaxProd, el * curMinProd);
    curMinProd = Math.min(el, el * temp, el * curMinProd);
    overallMaxProd = Math.max(overallMaxProd, curMaxProd);
  }
  return overallMaxProd;
};
