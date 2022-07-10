// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

// uses array of letter counts as key in obj
// n * m (m being avg length of str in strs))
const groupAnagrams = strings => {
  const obj = {};

  for (const str of strings) {
    const letterCounts = new Array(26).fill(0);

    for (const char of str) {
      const idx = char.charCodeAt() - 97;
      letterCounts[idx]++;
    }

    const key = JSON.stringify(letterCounts); // can also use .join w/ a separator (otherwise [ 0, 1, 0, 10 ] and [ 0, 10, 1, 0 ] will get mixed up), or just letterCounts on its own
    if (!obj[key])
      obj[key] = [];
    obj[key].push(str);
  }
  return Object.values(obj);
};

// // uses sorted string as key in obj
// // n * m log m (m being avg length of str in strs)
// const groupAnagrams = strs => {
//   const seen = {};

//   for (const str of strs) {
//     const sorted = str.split('').sort().join('');
//     if (!seen[sorted])
//       seen[sorted] = [];
//     seen[sorted].push(str);
//   }
//   return Object.values(seen);
// };

console.log( groupAnagrams(["eat","tea","tan","ate","nat","bat"]) );
console.log( groupAnagrams(['']) );
console.log( groupAnagrams(['a']) );
