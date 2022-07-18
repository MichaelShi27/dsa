// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/submissions/


// // stacks
// // max(m, n) time, m + n space
// const backspaceCompare = (s, t) => {
//   const sStack = [];
//   const tStack = [];

//   for (let i = 0; i < Math.max(s.length, t.length); i++) {
//     if (s[i] === '#')
//       sStack.pop();
//     else
//       sStack.push(s[i]);

//     if (t[i] === '#')
//       tStack.pop();
//     else
//       tStack.push(t[i]);
//   }
//   return sStack.join('') === tStack.join('');
// };


// m + n time, m + n space
// str-building backwards
const backspaceCompare = (s, t) => {
  const editStr = str => {
    let res = '';
    let ct = 0;
    for (let i = str.length - 1; i >= 0; i--)
      if (str[i] === '#')
        ct++;
      else
        ct ? ct-- : res += str[i];
    return res;
  }

  return editStr(s) === editStr(t);
};

// 2 ptr approach w/ helper func
// max(m, n) time, const space
const backspaceCompare = (s, t) => {
  let sCt = 0, tCt = 0;
  let i = s.length - 1, j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = skipBackspaces(s, i);
    j = skipBackspaces(t, j);
    if (s[i] !== t[j])
      return false;
    i--;
    j--;
  }
  return true;
};

const skipBackspaces = (str, idx) => {
  let ct = 0;
  while (idx >= 0) {
    if (str[idx] === '#')  ct++;
    else if (ct > 0) ct--;
    else break;
    idx--;
  }
  return idx;
};

// // 2-pointer approach
// // max(m, n) time, const space
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
};

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

// like backspaceCompare1 but w/ a for-loop & no continue statements
const backspaceCompare3 = (s, t) => {
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


// another 2 ptr approach, easier to understand
const backspaceCompare4 = (s, t) => {
  let sCt = 0, tCt = 0;
  let sPtr = s.length - 1, tPtr = t.length - 1;

  while (sPtr >= 0 || tPtr >= 0) {
    const sChar = s[sPtr];
    const tChar = t[tPtr];

    if (sChar === '#') {
      sCt++;
      sPtr--;
      continue;
    } else if (sCt) {
      sCt--;
      sPtr--;
      continue;
    }

    if (tChar === '#') {
      tCt++;
      tPtr--;
      continue;
    } else if (tCt) {
      tCt--;
      tPtr--;
      continue;
    }

    if (sChar !== tChar)
      return false;
    sPtr--;
    tPtr--;
  }
  return true;
};

// like backspaceCompare4 but more concise
const backspaceCompare5 = (s, t) => {
  let sCt = 0, tCt = 0;
  let sPtr = s.length - 1, tPtr = t.length - 1;

  while (sPtr >= 0 || tPtr >= 0) {
    const sChar = s[sPtr];
    const tChar = t[tPtr];

    if (sChar === '#' || sCt) {
      sChar === '#' ? sCt++ : sCt--;
      sPtr--;
      continue;
    }

    if (tChar === '#' || tCt) {
      tChar === '#' ? tCt++ : tCt--;
      tPtr--;
      continue;
    }

    if (sChar !== tChar)
      return false;
    sPtr--;
    tPtr--;
  }
  return true;
};

const s = 'zsabc'
const t = 'z#s###abc'
console.log( backspaceComparez(s, t) );
