// 179. Largest Number
// https://leetcode.com/problems/largest-number/

// from Discussion page
const largestNumber = nums => {
  if (!nums || nums.length === 0)
    return '0';

  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

  if (nums[0] === 0)
    return '0';
  return nums.join('');
};


let arr = [ 1, 1, 2, 3, 9, 1, 22, 8 ];
console.log( largestNumber(arr) );
