// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = strings => {
  const obj = {};
  for (const string of strings) {
    const letterCounts = new Array(26).fill(0);
    for (const char of string) {
      const idx = char.charCodeAt() - 97;
      letterCounts[idx]++;
    }
    if (obj[letterCounts])
      obj[letterCounts].push(string);
    else
      obj[letterCounts] = [ string ];
  }
  return Object.values(obj);
};

console.log( groupAnagrams(["eat","tea","tan","ate","nat","bat"]) );
console.log( groupAnagrams(['']) );
console.log( groupAnagrams(['a']) );
