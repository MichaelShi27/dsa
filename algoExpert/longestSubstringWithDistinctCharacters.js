// function findLongestSubstringWithDistinctCharacters(str){
//   let obj = {};
//   let currMax = 0;
//   let subStr = '';

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (obj[char] !== undefined) {
//       currMax = Math.max(currMax, subStr.length);

//       let idx;
//       for (let j = 0; j < subStr.length; j++) {
//         delete obj[subStr[j]];
//         obj[char] = i;
//         if (subStr[j] === char) {
//           idx = j;
//           break;
//         }
//       }

//       subStr = subStr.slice(idx + 1) + char;
//     } else {
//       subStr += char;
//       obj[char] = i;
//     }
//   }

//   return currMax;
// }

function findLongestSubstringWithDistinctCharacters(str) {
  let obj = {};
  let currMax = 0;
  let subStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (obj[char] !== undefined) {
      let idx = subStr.length - (i - obj[char]);
      for (let j = 0; j < idx; j++)
        delete obj[subStr[j]];

      subStr = subStr.slice(idx + 1) + char;
    } else
      subStr += char;

    obj[char] = i;
    currMax = Math.max(currMax, subStr.length);
  }

  return currMax;
}

console.log( findLongestSubstringWithDistinctCharacters("thisisawesome") ); // 6
console.log( findLongestSubstringWithDistinctCharacters("thecatinthehat") ); // 7
console.log( findLongestSubstringWithDistinctCharacters("bbbb") ); // 1
console.log( findLongestSubstringWithDistinctCharacters("longestsubstring") ); // 8
console.log( findLongestSubstringWithDistinctCharacters("thisishowwedoit") ); // 6


// ideal solution remembers everything in the obj, doesn't delete - if we come to a char we've seen,
// we simply update left side of window to either right above the last time we saw that char, or keep it hwere
// it is if the last time we saw that char is earlier than where left side currently is
// (we never want left side to go backwards), while comparing
// currentStrLen to currentMax each time. what i did was clear up my obj of some chars that are "lost"
// when moving left side of window up multiple chars, bc if i encountered one of those again later I
// thought my left side would move back down and possibly encompass repeated chars. i could've avoided this
// with Math.max