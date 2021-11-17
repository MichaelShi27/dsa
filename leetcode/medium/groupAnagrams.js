// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

// uses array of letter counts as key in obj
const groupAnagrams = strings => {
  const obj = {};
  for (const str of strings) {
    const letterCounts = new Array(26).fill(0);
    for (const char of str) {
      const idx = char.charCodeAt() - 97;
      letterCounts[idx]++;
    }
    if (obj[letterCounts])
      obj[letterCounts].push(str);
    else
      obj[letterCounts] = [ str ];
  }
  return Object.values(obj);
};

// // uses sorted string as key in obj
// const groupAnagrams = strings => {
//   const obj = {};
//   for (const str of strings) {
//     const sortedStr = str.split('').sort();
//     if (obj[sortedStr])
//       obj[sortedStr].push(str);
//     else
//       obj[sortedStr] = [ str ];
//   }
//   return Object.values(obj);
// };

console.log( groupAnagrams(["eat","tea","tan","ate","nat","bat"]) );
console.log( groupAnagrams(['']) );
console.log( groupAnagrams(['a']) );
