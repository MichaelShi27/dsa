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

// also a recursive solution - starting from both ends, check if each value is equal, then increment/decrement pointer and recurse with new pointers