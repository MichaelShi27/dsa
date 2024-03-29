// const getDigit = (num, place) => {
//   const str = num.toString();
//   const temp = str.length - 1 - place;
//   return temp < 0 ? 0 : str.slice(temp, temp + 1);
// };

// const getDigit = (num, place) => {
//   let mod;
//   while (place > -1) {
//     mod = num % 10;
//     num = Math.floor(num / 10);
//     place--;
//   }
//   return mod;
// };

const getDigit = (num, place) => Math.floor( Math.abs(num) / (10 ** place) ) % 10;

// console.log( getDigit(43210, 0) );
// console.log( getDigit(43210, 2) );
// console.log( getDigit(43210, 4) );
// console.log( getDigit(43210, 5) );
// console.log( getDigit(43210, 10) );
// console.log( getDigit(-3210, 2) );

const radixSort = arr => {
    let place = 0;
    while (true) {
      const buckets = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };
      for (let el of arr)
        buckets[Math.abs(getDigit(el, place))].push(el);
      place++;
      if (buckets[0].length === arr.length) break;

      arr = [];
      for (let i = 0; i < 10; i++)
        for (let el of buckets[i])
          arr.push(el);
      // arr = [].concat(...buckets); // can also do this
    }

    // for negative nums
    const buckets = { pos: [], neg: [] };
    for (let el of arr)
      buckets[ el > 0 ? 'pos' : 'neg' ].push(el);
    return buckets.neg.reverse().concat(buckets.pos);
};

// const arr = [ 3, 2, 9, 1, 4 ];
// const arr = [ 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
// const arr = [ 9, 3, 11, 111, 3, 901, 8938398, 888, 2989, 1083038389383833333, 11900000, 30901, 898 ];
const arr = [ 22, 0, -1, 80, -33, 3, 0, 8, 11, 0, 56, 5, 22, 1, 7, 3, -2, -18918, -99, -20, -101, 2, 8, 4, 9 ];
console.log(radixSort(arr));

// // below are helper funcs from colt's method
// const getDigitCount = num => {
//   if (num === 0) return 1;

//   let ct = 0;
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     ct++;
//   }
//   return ct;
// };

const getDigitCount = num => {
  if (num === 0) return 1;
  return Math.floor( Math.log10(num) ) + 1;
}
// console.log(getDigitCount(3));
// console.log(getDigitCount(44));
// console.log(getDigitCount(5555));



// // alternate approach, not as good
// const radixSort = arr => {
//   let place = 0;
//   let currMax = arr[0];
//   let maxLen; // num of digits of largest num in arr (i.e. how many times we repeat)

//   while (place !== maxLen) {
//     const buckets = [ [], [], [], [], [], [], [], [], [], [] ];
//     for (const num of arr) {
//       const digit = Math.abs( getDigit(num, place) );
//       buckets[digit].push(num);

//       if (place === 0 && Math.abs(num) > currMax)
//         currMax = Math.abs(num);
//     }
//     if (place === 0)
//       maxLen = currMax.toString().length;

//     arr = [];
//     for (const bucket of buckets)
//       arr = arr.concat(bucket);
//     place++;
//   }
//   return radixSortNegatives(arr);
// };

// const radixSortNegatives = arr => {
//   const buckets = { pos: [], neg: [] };

//   for (const num of arr)
//     if (num < 0)
//       buckets.neg.push(num);
//     else
//       buckets.pos.push(num);
//   return buckets.neg.reverse().concat(buckets.pos);
// };