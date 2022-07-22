// 415. Add Strings
// https://leetcode.com/problems/add-strings/

// O( max(n, m) )
const addStrings = (num1, num2) => {
  let carry = 0;
  let sumStr = '';
  const maxLen = Math.max(num1.length, num2.length);

  for (let i = 0; (i < maxLen) || carry; i++) {
    const char1 = num1[num1.length - 1 - i];
    const char2 = num2[num2.length - 1 - i];
    let curSum = carry + (Number(char1) || 0) + (Number(char2) || 0);

    carry = 0;
    if (curSum >= 10) {
      carry = 1;
      curSum -= 10;
    }
    sumStr = `${curSum}${sumStr}`;
  }
  return sumStr;
};


// 2-pointer approach
// O( max(n, m) )
const addStrings = (num1, num2) => {
  let carry = 0;
  let sum = '';

  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry; i--, j--) {
    const digit1 = (num1[i] - '0') || 0;
    const digit2 = (num2[j] - '0') || 0;
    const tempSum = digit1 + digit2 + carry;
    sum = `${tempSum % 10}${sum}`;
    carry = Math.floor(tempSum / 10);
  }
  return sum;
};
