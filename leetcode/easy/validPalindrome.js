// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// split in half & reverse
// const isPalindrome = s => {
//   let str = '';
//   const obj = {
//     a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true,
//     j: true, k: true, l: true, m: true, n: true, o: true, p: true, q: true, r: true,
//     s: true, t: true, u: true, v: true, w: true, x: true, y: true, z: true, 1: true,
//     2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 0: true
//   };

//   for (let i = 0; i < s.length; i++) {
//     if ( obj[s[i]] || obj[s[i].toLowerCase()] )
//       str = `${str}${s[i].toLowerCase()}`;
//   }

//   const half = Math.floor(str.length / 2);
//   const s1 = str.slice(0, half);
//   const s2 = str.length % 2 === 0 ? str.slice(half) : str.slice(half + 1);

//   return s1 === s2.split('').reverse().join('');
// };

// two pointers
const isPalindrome = s => {
  const obj = {
    a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true,
    j: true, k: true, l: true, m: true, n: true, o: true, p: true, q: true, r: true,
    s: true, t: true, u: true, v: true, w: true, x: true, y: true, z: true, 1: true,
    2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 0: true
  };

  for (let p = 0, q = s.length - 1; p < q; p++, q--) {
    if (!obj[s[p]] && !obj[s[p].toLowerCase()]) {
      q++;
      continue;
    }
    if (!obj[s[q]] && !obj[s[q].toLowerCase()]) {
      p--;
      continue;
    }
    if (s[p].toLowerCase() !== s[q].toLowerCase())
      return false;
  }
  return true;
};

// slightly different two-pointer approach => faster, even though I build new str
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