// 66. Plus One
// https://leetcode.com/problems/plus-one/

// O(2n time), O(1) space
const plusOne = digits => {
  let carry;
  let i = digits.length - 1;

  do {
    carry = 0;
    digits[i]++;
    if (digits[i] === 10) {
      carry = 1;
      digits[i] = 0;
    }
    i--;
  } while (i >= 0 && carry);

  if (carry) digits.unshift(1);
  return digits;
};

// similar to above, but w/ for-loop instead of do-while-loop
const plusOne = digits => {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0 && carry; i--) {
    carry = 0;
    digits[i]++;
    if (digits[i] === 10) {
      carry = 1;
      digits[i] = 0;
    }
  }
  if (carry) digits.unshift(1);
  return digits;
};

// a more "naive" approach w/o a carry var, same space & time
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--)
    if (digits[i] === 9)
      digits[i] = 0;
    else {
      digits[i]++;
      return digits;
    }

  if (digits[0] === 0) digits.unshift(1);
  return digits;
};
