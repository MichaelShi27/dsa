// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// linear space
var productExceptSelf = function(nums) {
    const left = [];
    const right = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0)
            left.push(1);
        else
            left.push( left[i - 1] * nums[i - 1] );
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1)
            right[i] = 1;
        else
            right[i] = right[i + 1] * nums[i + 1];
    }

    const res = [];
    for (let i = 0; i < nums.length; i++)
        res.push( left[i] * right[i] );

    return res;
};

// 2
var productExceptSelf = function(nums) {
  const left = [];

  for (let i = 0; i < nums.length; i++) {
      if (i === 0)
          left.push(1);
      else
          left.push( left[i - 1] * nums[i - 1] );
  }
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
var productExceptSelf = function(nums) {
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
const productExceptSelf = function(nums) {
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
}