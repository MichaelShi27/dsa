const pivotHelper = ( arr, start = 0, end = arr.length - 1 ) => {
  const pivot = arr[start];
  let count = 0;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      count++;
      [ arr[i], arr[start + count] ] = [ arr[start + count], arr[i] ];
    }
  }

  [ arr[start], arr[start + count] ] = [ arr[start + count], arr[start] ];
  return start + count;
};

const quickSort = ( arr, start = 0, end = arr.length - 1 ) => {
  if (start >= end) return;

  const pivot = pivotHelper(arr, start, end);
  quickSort( arr, start, pivot - 1 );
  quickSort( arr, pivot + 1, end ) ;

  return arr;
};

const arr = [ 5, 22, 1, 7, 3, 2, 8, 4, 9 ];
console.log(quickSort(arr));
// console.log(arr);