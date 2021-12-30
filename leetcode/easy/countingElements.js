// 1426. Counting Elements (locked behind LC premium)
// https://leetcode.com/problems/counting-elements/

// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.
// Example 5:

// Input: arr = [1,1,2]
// Output: 2
// Explanation: Both 1s are counted because 2 is in the array.


// Constraints:

// 1 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

// 2n solution
const countElements = nums => {
  const obj = {};
  for (const num of nums)
    obj[num + 1] = true;

  let count = 0;
  for (const num of nums)
    if (obj[num])
      count++;
  return count;
};

// one-pass solution
const countElements1 = arr => {
  const obj = {};
  let count = 0;

  for (let el of arr) {
    obj[el] = 1 + (obj[el] || 0);
    if (obj[el + 1])
      count++;
    if (obj[el - 1] && obj[el] === 1)
      count += obj[el - 1];
  }
  return count;
};

const test = func => {
  console.log( func([1,2,3]) === 2 );
  console.log( func([1,1,3,3,5,5,7,7]) === 0 );
  console.log( func([1,3,2,3,5,0]) === 3 );
  console.log( func([1,1,2,2]) === 2 );
  console.log( func([1,1,2]) === 2 );
  console.log( func([1,2,3,1]) === 3 );
  console.log( func([1,1,1,2,1,1]) === 5 );
};

test(countElements1);
