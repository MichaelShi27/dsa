// 415. Add Strings
// https://leetcode.com/problems/add-strings/

const addStrings = (num1, num2) => {
  let carry = 0;
  let sumStr = '';
  const maxLen = Math.max(num1.length, num2.length);

  for (let i = 0; i < maxLen || carry; i++) {
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
