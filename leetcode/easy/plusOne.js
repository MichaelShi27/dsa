// 66. Plus One
// https://leetcode.com/problems/plus-one/

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
