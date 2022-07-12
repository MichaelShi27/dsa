// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

// 2nd time - n space
const productExceptSelf = nums => {
  const arr1 = [];
  const arr2 = [];

  let prod = 1;
  for (const num of nums) {
    prod *= num;
    arr1.push(prod);
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prod *= nums[i];
    arr2[i] = prod;
  }

  const res = [];
  for (let i = 0; i < nums.length; i++)
    res[i] = (arr1[i - 1] ?? 1) * (arr2[i + 1] ?? 1);

  return res;
};

// linear space
const productExceptSelf = nums => {
  const left = [];
  const right = new Array(nums.length);

  for (let i = 0; i < nums.length; i++)
    if (i === 0)
      left.push(1);
    else
      left.push( left[i - 1] * nums[i - 1] );

  for (let i = nums.length - 1; i >= 0; i--)
    if (i === nums.length - 1)
      right[i] = 1;
    else
      right[i] = right[i + 1] * nums[i + 1];

  const res = [];
  for (let i = 0; i < nums.length; i++)
    res.push( left[i] * right[i] );

  return res;
};

// similar to above, but uses 1 arr
const productExceptSelf = nums => {
  const left = [];

  for (let i = 0; i < nums.length; i++)
    if (i === 0)
      left.push(1);
    else
      left.push( left[i - 1] * nums[i - 1] );

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    left[i] *= right;
    right *= nums[i];
  }

  const res = [];
  for (let i = 0; i < nums.length; i++)
    res.push( left[i] );

  return res;
};


// constant space, similar to above
const productExceptSelf = nums => {
  const res = [ 1 ];

  for (let i = 1; i < nums.length; i++)
    res.push( res[i - 1] * nums[i - 1] );

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};


// can also do O(1) space and a single loop, fill in right & left at same time

// someone else's solution:
const productExceptSelf = nums => {
  const output = [];
  let leftMult = 1;
  let rightMult = 1;

  for (let i = nums.length - 1, j = 0; i >= 0; i--, j++) {
    output[i] = (output[i] ?? 1) * rightMult;
    output[j] = (output[j] ?? 1) * leftMult;

    rightMult *= nums[i];
    leftMult *= nums[j];
  }

  return output;
};
