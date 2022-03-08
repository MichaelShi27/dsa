// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const isAlphanumeric = char => {
  const code = char.charCodeAt();
  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

// split in half & reverse one half (can also reverse & compare entire str)
// n time, n space
const isPalindrome = s => {
  const arr = [];
  for (const char of s)
    if ( isAlphanumeric(char) )
      arr.push( char.toLowerCase() );
  const str = arr.join('');

  const mid = Math.floor(str.length / 2);
  const firstHalf = str.slice(0, mid);
  const secondHalf = str.slice( str.length % 2 === 0 ? mid : mid + 1 );

  return firstHalf === secondHalf.split('').reverse().join('');
};

// two pointers
// n time, const space
const isPalindrome = s => {
  for (let p = 0, q = s.length - 1; p < q; p++, q--) {
    if (!isAlphanumeric(s[p])) {
      q++; // since the last condition in for-loop declaration will still run
      continue;
    }
    if (!isAlphanumeric(s[q])) {
      p--;
      continue;
    }
    if (s[p].toLowerCase() !== s[q].toLowerCase())
      return false;
  }
  return true;
};

// slightly different two-pointer approach => faster, even though I build new str
// n time, n space
const isPalindrome = s => {
  let str = '';
  for (let char of s)
    if (isUpperCase(char))
      str += char.toLowerCase();
    else if (isValidCharCode(char))
      str += char;

  for (let p = 0, q = str.length - 1; p < q; p++, q--)
    if (str[p] !== str[q])
      return false;
  return true;
};

const isUpperCase = char => {
  const code = char.charCodeAt();
  return code >= 65 && code <= 90;
};

const isValidCharCode = char => {
  const code = char.charCodeAt();
  return (code >= 47 && code <= 57) || (code >= 97 && code <= 122);
};


console.log(isPalindrome('A  b ba'))