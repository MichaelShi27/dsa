// // using first el each time for pivot (worse)
// const pivotHelper = ( arr, start = 0, end = arr.length - 1 ) => {
//   const pivot = arr[start];
//   let count = 0;

//   for (let i = start + 1; i <= end; i++)
//     if (arr[i] < pivot) {
//       count++;
//       [ arr[i], arr[start + count] ] = [ arr[start + count], arr[i] ];
//     }

//   [ arr[start], arr[start + count] ] = [ arr[start + count], arr[start] ];
//   return start + count;
// };

// const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
//   if (start >= end) return;

//   const pivot = pivotHelper(arr, start, end);
//   quickSort( arr, start, pivot - 1 );
//   quickSort( arr, pivot + 1, end ) ;

//   return arr;
// };

// using random pivot - random is prob better than starting at beginning or end b/c lessen possibility of quadratic time
// if you pick lowest or highest el each time in case of sorted arrays (i.e. first or last), that's quadratic
const pivotHelper = ( arr, start = 0, end = arr.length - 1 ) => {
  let rand = Math.floor( Math.random() * (end - start + 1) + start );
  const pivot = arr[rand];
  let count = 0;

  for (let i = start; i <= end; i++)
    if (arr[i] < pivot) {
      [ arr[i], arr[start + count] ] = [ arr[start + count], arr[i] ];
      if (start + count === rand) // this keeps track of the index of wherever the pivot is in case its location is swapped,
        rand = i;                 // so we can move the pivot to its rightful place in the swap after the for loop
      count++;
    }

  [ arr[rand], arr[start + count] ] = [ arr[start + count], arr[rand] ];

  return start + count;
};

const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
  if (start >= end) return;

  const pivot = pivotHelper(arr, start, end);
  quickSort( arr, start, pivot - 1 );
  quickSort( arr, pivot + 1, end ) ;

  return arr;
};

// const arr = [ 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
const arr = [ 22, -1, 80, -33, 3, 0, 8, 11, 0, 56, 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
console.log(quickSort(arr));
// console.log(arr);