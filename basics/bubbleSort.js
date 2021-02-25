
// bubble sort => 2 optimizations: flag var & 2nd for loop

// const bubbleSort = arr => { // worst way
// for (let i = 0; i < arr.length; i++, count++) {
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



// let array = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8 ];
// console.log(array);
// console.log( 'res:', bubbleSort(array) );


// let arr = [ 1, 2, 3, 4 ];
// [ arr[0], arr[1] ] = [ arr[1], arr[0] ];
// console.log('arr:', arr)

