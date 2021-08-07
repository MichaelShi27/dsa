
// bubble sort => 2 optimizations: flag var & 2nd for loop

// const bubbleSort = arr => { // worst way
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
//       i = -1;
//     }
//   }
//   return arr;
// };

const bubbleSort = arr => {
  let swapFound;
  let count = arr.length;

  do {
    swapFound = false;
    for (let i = 0; i < count; i++) {
      if (arr[i] > arr[i + 1]) {
        swapFound = true;
        [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
      }
    }
    count--;
  } while (swapFound);

  return arr;
};



// let arr = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8 ];
// const arr = [ 2, 1, 3, 4, 5, 6, 7, 9, 8, 8, 10, 11 ];
// const arr = [ 4, 1, 3, 5, 2 ];
// const arr = [ 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
const arr = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8, -3, 7, 3333, 10, -333, 90, 2, 3.9, 0, 2, 330, 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
console.log( 'res:', bubbleSort(arr) );

