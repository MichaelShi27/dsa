// 179. Largest Number
// https://leetcode.com/problems/largest-number/

const largestNumber = nums => {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return (nums[0] === 0) ? '0' : nums.join('');
};


let arr = [ 1, 1, 2, 3, 9, 1, 22, 8 ];
console.log( largestNumber(arr) );
