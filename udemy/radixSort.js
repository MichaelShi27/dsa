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

const getDigit = (num, place) => Math.floor(num / (10 ** place)) % 10;

// console.log( getDigit(43210, 0) );
// console.log( getDigit(43210, 2) );
// console.log( getDigit(43210, 4) );
// console.log( getDigit(43210, 5) );
// console.log( getDigit(43210, 10) );

const radixSort = arr => {
    let place = 0;
    while (true) {
      const buckets = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };
      for (let el of arr)
        buckets[getDigit(el, place)].push(el);
      place++;

      arr = [];
      for (let i = 0; i < 10; i++)
        for (let el of buckets[i])
          arr.push(el);
      if (buckets[0].length === arr.length) break;
    }
    return arr;
};

// const arr = [ 3, 2, 9, 1, 4 ];
// const arr = [ 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
const arr = [ 9, 3, 11, 111, 3, 901, 8938398, 888, 2989, 1083038389383833333, 11900000, 30901, 898 ];
// const arr = [ 22, -1, 80, -33, 3, 0, 8, 11, 0, 56, 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
console.log(radixSort(arr));