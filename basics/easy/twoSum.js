const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined)
      return [ i, obj[nums[i]] ];
    else
      obj[target - nums[i]] = i;
  }
};


// var threeSum = function(nums) {
//   const res = [];
//   if (nums.length < 3) return res;
//   const store = {};

//   for (let i = 0; i < nums.length; i++) {
//       let target = -nums[i];
//       let obj = {};

//       for (let j = i + 1; j < nums.length; j++) {
//           if (obj[nums[j]] !== undefined) {
//               let k = obj[nums[j]];
//               if (
//                   obj[nums[j]] !== obj[j] &&
//                   obj[j] !== obj[i] &&
//                   store[obj[i]] !== obj[j] &&
//                   store[obj[i]] !== obj[k]
//               ) {
//                   res.push([ obj[i], obj[j], obj[k] ]);
//                   store[obj[i]] = obj[j];
//                   store[obj[j]] = obj[i];
//                   store[obj[k]] = obj[i];
//               }
//           } else
//               obj[target - nums[j]] = j;
//       }
//   }
//   return res;
// };