// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

// // n time, const space
// const romanToInt = s => {
//   let sum = 0;

//   for (let i = 0; i < str.length; i++)
//     if ( map[str[i]] < map[str[i + 1]] )
//       sum -= map[str[i]];
//     else
//       sum += map[str[i]];

//   return sum;
// };

// pure recursive approach
const romanToInt = str => (
  str.length === 1
    ? map[str[0]]
    : romanToInt(str.slice(1)) + map[str[0]] * ( (map[str[0]] < map[str[1]]) ? -1 : 1 )
);

// // recursive w helper
// const romanToInt = s => {
//   let sum = 0;

//   const helper = str => {
//     if (!str.length) return;
//     if ( map[str[0]] < map[str[1]] )
//       sum -= map[str[0]];
//     else
//       sum += map[str[0]];
//     helper(str.slice(1));
//   };
//   helper(s);
//   return sum;
// };

console.log( romanToInt('LVIII') === 58 );
console.log( romanToInt('MCMXCIV') === 1994 );
// console.log(3 < undefined);
