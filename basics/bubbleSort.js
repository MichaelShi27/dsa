
// bubble sort

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
