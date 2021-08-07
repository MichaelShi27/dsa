// optimized (the 2 optimizations are the swap var for when smthg is almost sorted already,
// & the j < i so that the 2nd loop doesn't go all the way every time since the already-sorted
// values on the right side gain more and more elements)
const bubbleSort = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swap = false;
    for (let j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
        swap = true;
      }
    if (!swap) break;
  }
  return arr;
};

// const arr = [ 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
// const arr = [ 2, 1, 3, 4, 5, 6, 7, 9, 8, 8, 10, 11 ];
// const arr = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8 ];
const arr = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8, -3, 7, 3333, 10, -333, 90, 2, 3.9, 0, 2, 330, 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
// const arr = [ 4, 1, 3, 5, 2 ];
console.log(bubbleSort(arr));

// // from algoexpert, alternate way of doing optimized, a tiny bit less efficient but pretty much equivalent
// const bubbleSort = arr => {
//   let swapFound;
//   let count = arr.length;

//   do {
//     swapFound = false;
//     for (let i = 0; i < count; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swapFound = true;
//         [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
//       }
//     }
//     count--;
//   } while (swapFound);

//   return arr;
// };

// // from when i did algoexpert, rly inefficient idk what i was doing lol
// const bubbleSort = arr => { // worst way
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
//       i = 0;
//     }
//   }
//   return arr;
// };