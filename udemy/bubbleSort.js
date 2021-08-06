const bubbleSort = arr => {
  for (let i = 0, s = 0; i < arr.length - 1; i++, s++)
    for (let j = 0; j < arr.length - 1 - s; j++)
      if (arr[j] > arr[j + 1])
        [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
  return arr;
};

const arr = [ 5, 7, 3, 6, 8, 2, 9, 1, 4 ]
// const arr = [ 4, 1, 3, 5, 2 ]
console.log(bubbleSort(arr));