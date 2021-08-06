const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[smallest])
        smallest = j;
    [ arr[i], arr[smallest] ] = [ arr[smallest], arr[i] ];
  }
  return arr;
};

// const arr = [ 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
// const arr = [ 2, 1, 3, 4, 5, 6, 7, 9, 8, 8, 10, 11 ];
const arr = [ 4, 1, 3, 5, 2 ];
console.log(selectionSort(arr));