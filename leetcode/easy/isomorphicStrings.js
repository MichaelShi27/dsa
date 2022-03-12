// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/

// obj approach
// n time, n space
const isIsomorphic = (s, t) => {
  const sObj = {};
  const tObj = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sObj[sChar] === undefined)
      sObj[sChar] = tChar;
    else if (sObj[sChar] !== tChar)
      return false;

    if (tObj[tChar] === undefined)
      tObj[tChar] = sChar;
    else if (tObj[tChar] !== sChar)
      return false;
  }
  return true;
};

// alt obj approach
// n time, n space
const isIsomorphic = (s, t) => {
  const sObj = {};
  const tObj = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (tObj[sChar] || sObj[tChar]) { // what if only 1 exists? not sure why this works lol
      if (sChar !== sObj[tChar] || tChar !== tObj[sChar])
        return false;
    } else {
      sObj[tChar] = sChar;
      tObj[sChar] = tChar;
    }
  }
  return true;
};

// build new strings based on idx of 1st char occurence, then compare
// n time, n space
const isIsomorphic = (s, t) => {
  const tObj = {};
  const sObj = {};
  const sArr = [];
  const tArr = [];

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sObj[sChar] === undefined)
      sObj[sChar] = i;
    sArr.push(sObj[sChar]);

    if (tObj[tChar] === undefined)
      tObj[tChar] = i;
    tArr.push(tObj[tChar]);
  }
  return sArr.join(',') === tArr.join(',');
};

// track idx of 1st char occurrence in obj, compare as we go => can return false early
// n time, n space
const isIsomorphic = (s, t) => {
  const tObj = {};
  const sObj = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sObj[sChar] === undefined)
      sObj[sChar] = i;
    if (tObj[tChar] === undefined)
      tObj[tChar] = i;

    if (sObj[sChar] !== tObj[tChar])
      return false;
  }
  return true;
};
