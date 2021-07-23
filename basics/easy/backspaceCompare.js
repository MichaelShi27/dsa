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

// // backwards
const backspaceCompare = (s, t) => {
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

// alt backwards
const backspaceCompare = (s, t) => {
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