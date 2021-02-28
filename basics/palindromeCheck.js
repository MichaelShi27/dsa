const isPalindrome = str => {
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};

let string = 'abcddcba';
console.log( isPalindrome(string) );

// can also just reverse string and check if it's equal to input lol