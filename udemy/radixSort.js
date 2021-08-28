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
        buckets[getDigit(el, place)].push(el);
      place++;
      if (buckets[0].length === arr.length) break;

      arr = [];
      for (let i = 0; i < 10; i++)
        for (let el of buckets[i])
          arr.push(el);
    }

    // for negative nums
    const buckets = { pos: [], neg: [] };
    for (let el of arr)
      buckets[ el > 0 ? 'pos' : 'neg' ].push(el);
    arr = buckets.neg.reverse().concat(buckets.pos);

    return arr;
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