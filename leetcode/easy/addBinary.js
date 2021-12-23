var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let res = '';

  while (i > -1 || j > -1 || carry) {
    const num1 = +a[i--] || 0; // unary operator (+) just converts to num
    const num2 = +b[j--] || 0; // can also just use Number(), * 1, etc.
    const temp = (num1 + num2 + carry) % 2;
    carry = Math.floor( (num1 + num2 + carry) / 2 );
    res = `${temp}${res}`;
  }
  return res;
};