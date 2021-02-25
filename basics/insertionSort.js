// insertion sort

// const insertionSort = arr => { // not in place
//   const res = [ arr[0] ];
//   let flag;

//   for (let i = 1; i < arr.length; i++) {
//     flag = false;
//     for (let j = 0; j < res.length; j++) {
//       if (arr[i] < res[j]) {
//         flag = true;
//         res.splice( j, 0, arr[i] );
//         break;
//       }
//     }
//     if (!flag) res.push(arr[i]);
//   }
//   return res;
// };

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j > -1 && arr[j + 1] < arr[j]; j--) {
      [ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ];
    }
  }
  return arr;
};

// let array = [ 4, 3, 2, 1, 0 ];
let array = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8 ];
console.log(array);
console.log( 'res:', insertionSort(array) );