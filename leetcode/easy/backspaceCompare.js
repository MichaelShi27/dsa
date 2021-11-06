// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/submissions/

// // Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// // Note that after backspacing an empty text, the text will continue empty.



// // Example 1:

// // Input: s = "ab#c", t = "ad#c"
// // Output: true
// // Explanation: Both s and t become "ac".
// // Example 2:

// // Input: s = "ab##", t = "c#d#"
// // Output: true
// // Explanation: Both s and t become "".
// // Example 3:

// // Input: s = "a##c", t = "#a#c"
// // Output: true
// // Explanation: Both s and t become "c".
// // Example 4:

// // Input: s = "a#c", t = "b"
// // Output: false
// // Explanation: s becomes "c" while t becomes "b".


// // Constraints:

// // 1 <= s.length, t.length <= 200
// // s and t only contain lowercase letters and '#' characters.


// // stacks
// var backspaceCompare = function(s, t) {
//   const stack1 = [];
//   const stack2 = [];

//   let len = Math.max(s.length, t.length);

//   for (let i = 0; i < len; i++) {
//       if (s[i] === '#') stack1.pop();
//       else stack1.push(s[i]);

//       if (t[i] === '#') stack2.pop();
//       else stack2.push(t[i]);
//   }
//   return stack1.join('') === stack2.join('');
// };

// // 2-pointer approach
const backspaceCompare1 = (s, t) => {
  let sCount = 0;
  let tCount = 0;

  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    while (s[i] === '#') {
      sCount++;
      i--;
    }
    while (sCount && s[i] !== '#') {
      sCount--;
      i--;
    }
    if (s[i] === '#') continue;

    while (t[j] === '#') {
      tCount++;
      j--;
    }
    while (tCount && t[j] !== '#') {
      tCount--;
      j--;
    }
    if (t[j] === '#') continue;

    if (s[i--] !== t[j--]) return false;
  }
  return true;
}

// alt 2-pointer
const backspaceCompare2 = (s, t) => {
  let sCount = 0;
  let tCount = 0;

  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        sCount++;
        i--;
      } else if (sCount) {
        sCount--;
        i--;
      } else break;
    }

    while (j >= 0) {
      if (t[j] === '#') {
        tCount++;
        j--;
      } else if (tCount) {
        tCount--;
        j--;
      } else break;
    }

    if (s[i--] !== t[j--]) return false;
  }
  return true;
}

// like backspaceCompare1 but w/ a for-loop
var backspaceCompare3 = function(s, t) {
  for (let i = s.length - 1, j = t.length - 1, sCt = 0, tCt = 0; i >= 0 || j >= 0; i--, j--) {
    while (s[i] === '#') {
      sCt++;
      i--;
    }
    while (sCt || s[i] === '#') {
      if (s[i] === '#')
        sCt++;
      else
        sCt--;
      i--;
    }

    while (t[j] === '#') {
      tCt++;
      j--;
    }
    while (tCt || t[j] === '#') {
      if (t[j] === '#')
        tCt++;
      else
        tCt--;
      j--;
    }
    if (s[i] !== t[j])
      return false;
  }
  return true;
};

// naive approach => best case O(2n) time but performs quite well on LC tests?
var backspaceCompare4 = function(s, t) {
  let newS = '', newT = '';
  let ct = 0;

  for (let i = s.length - 1; i >= 0; i--)
    if (s[i] === '#')
      ct++;
    else
      ct ? ct-- : newS += s[i];

  ct = 0;
  for (let i = t.length - 1; i >= 0; i--)
    if (t[i] === '#')
      ct++;
    else
      ct ? ct-- : newT += t[i];

  return newS === newT;
};

// like backspaceCompare4, but going forward => best case O(4n)?
var backspaceCompare5 = function(s, t) {
  let newS = [], newT = [];
  let ct = 0;

  for (let i = 0; i < s.length; i++)
    if (s[i] === '#')
      newS.length && newS.pop();
    else
      newS.push(s[i]);

  ct = 0;
  for (let i = 0; i < t.length; i++)
    if (t[i] === '#')
      newT.length && newT.pop();
    else
      newT.push(t[i]);

  return newS.join('') === newT.join('');
};
