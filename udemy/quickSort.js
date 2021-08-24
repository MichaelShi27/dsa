// // implementation using first el each time for pivot (worse)
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

//   const pivotIdx = pivotHelper(arr, start, end);
//   quickSort( arr, start, pivotIdx - 1 );
//   quickSort( arr, pivotIdx + 1, end ) ;

//   return arr;
// };

// // implementation using random pivot - random is prob better than starting at beginning or end b/c lessen possibility of quadratic time
// // if you pick lowest or highest el each time in case of sorted arrays (i.e. first or last), that's quadratic
// // a probably-smarter approach is simply swapping the random with the first el each time, then proceeding like in first approach above
// const pivotHelper = ( arr, start = 0, end = arr.length - 1 ) => {
//   let rand = Math.floor( Math.random() * (end - start + 1) + start );
//   const pivot = arr[rand];
//   let count = 0;

//   for (let i = start; i <= end; i++)
//     if (arr[i] < pivot) {
//       [ arr[i], arr[start + count] ] = [ arr[start + count], arr[i] ];
//       if (start + count === rand) // this keeps track of the index of wherever the pivot is in case its location is swapped,
//         rand = i;                 // so we can move the pivot to its rightful place in the swap after the for loop
//       count++;
//     }

//   [ arr[rand], arr[start + count] ] = [ arr[start + count], arr[rand] ];

//   return start + count;
// };

// const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
//   if (start >= end) return;

//   const pivotIdx = pivotHelper(arr, start, end);
//   quickSort( arr, start, pivotIdx - 1 );
//   quickSort( arr, pivotIdx + 1, end ) ;

//   return arr;
// };

// // using more space
// const quickSort = arr => {
//   if (arr.length === 1) return arr;
//   if (arr.length === 0) return [];

//   const rand = Math.floor( Math.random() * arr.length );
//   const pivot = arr[rand];
//   const leftArr = [];
//   const rightArr = [];

//   for (let i = 0; i < arr.length; i++)
//     if (i === rand)
//       continue;
//     else if (arr[i] < pivot)
//       leftArr.push(arr[i]);
//     else
//       rightArr.push(arr[i]);

//   return [ ...quickSort(leftArr), pivot, ...quickSort(rightArr) ];
// };

// // random pivot, simple, const space
const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
  if (end <= start) return;

  const rand = Math.floor( Math.random() * (end - start + 1) + start );
  [ arr[rand], arr[start] ] = [ arr[start], arr[rand] ];
  const pivot = arr[start];
  let ct = 0;

  for (let i = start + 1; i <= end; i++)
    if (arr[i] < pivot) {
      ct++;
      [ arr[i], arr[start + ct] ] = [ arr[start + ct], arr[i] ];
    }

  const pivotIdx = start + ct;
  [ arr[start], arr[pivotIdx] ] = [ arr[pivotIdx], arr[start] ];

  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);

  return arr;
};

// const arr = [ 3, 2, 9, 1, 4 ];
// const arr = [ 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
const arr = [ 22, -1, 80, -33, 3, 0, 8, 11, 0, 56, 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
const res = quickSort(arr);
console.log('res:', res)
// console.log(arr);





// // i tried lol, keep getting errors e.g. call stack exceeded
// const pivotHelper = ( arr, start = 0, end = arr.length - 1 ) => {
//   const rand = Math.floor( Math.random() * (end - start + 1) + start );
//   const pivot = arr[rand];
//   const leftArr = [];
//   const rightArr = [];

//   // console.log('before:', arr, start, end, rand)
//   for (let i = 0; i < arr.length; i++)
//     if (i === rand)
//       continue;
//     else if (arr[i] < pivot)
//       leftArr.push(arr[i]);
//     else
//       rightArr.push(arr[i]);

//   arr = [ ...leftArr, pivot, ...rightArr ];
//   // console.log('after:', arr, `\n`)
//   return [ leftArr.length, arr[leftArr.length], arr ];
// };

// const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
//   if (start === end) return [ arr[start] ];
//   if (start >= end) return [];

//   const temp = pivotHelper(arr, start, end);
//   // console.log(temp)
//   const pivotIdx = temp[0];
//   const pivot = temp[1];
//   arr = temp[2];

//   // quickSort(arr, start, pivotIdx - 1);
//   // quickSort(arr, pivotIdx + 1, end);

//   // console.log('below:', arr, start, end, `\n`)
//   // return arr;
//   let left = quickSort(arr, start, pivotIdx - 1);
//   let right = quickSort(arr, pivotIdx + 1, end);
//   // console.log('below:', arr);
//   // console.log(left, pivot, right)
//   // console.log('\n')
//   return [ ...left, pivot, ...right ];
// };

// // attempt to combine helper and main func
// const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
//   // if (start === end) return arr[start] !== undefined ? [ arr[start] ] : [];
//   if (start >= end) return [];

//   // const rand = Math.floor( Math.random() * (end - start + 1) + start );
//   let rand = start;
//   const pivot = arr[rand];
//   const leftArr = [];
//   const rightArr = [];

//   for (let i = start; i <= end; i++)
//     if (i === rand)
//       continue;
//     else if (arr[i] < pivot)
//       leftArr.push(arr[i]);
//     else
//       rightArr.push(arr[i]);

//   arr = [ ...leftArr, pivot, ...rightArr ];

//   let left = quickSort(arr, start, leftArr.length - 1);
//   let right = quickSort(arr, leftArr.length + 1, end);
//   console.log(left, pivot, right)
//   return [ ...left, pivot, ...right ];
// };