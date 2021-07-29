// turn sorted arr into sorted arr of original's squares

let sortedSquaredArray = array => {
  let minIdx = 0;
  let maxIdx = array.length - 1;
  let res = [];

  for (let i = array.length - 1; i > -1; i--) {
    if ( Math.abs(array[minIdx]) < Math.abs(array[maxIdx]) ) {
      res[i] = array[maxIdx] ** 2;
      maxIdx--;
    } else {
      res[i] = array[minIdx] ** 2;
      minIdx++;
    }
  }

  return res;
};

// BELOW SOLUTIONS ORGOT TO ACCOUNT FOR NEG NUMS LOL

// const sortedSquaredArray = array => {
//   let res = [];
//   for (let el of array) res.push(el * el);
//   return res;
// };

// let sortedSquaredArray = array => {
//   return array.reduce(
//     (res, el) => {
//       res.push(el * el);
//       return res;
//     }, []);
// };

// let sortedSquaredArray = array => array.reduce( (res, el) => [ ...res, el ** 2 ], [] );

let arr = [ -13, -7, 1, 4, 5, 6, 9, 12 ];
console.log( sortedSquaredArray(arr) );
