// my first attempt, "backwards" (inner loop goes up instead of down)
const insertionSort = arr => {
  for (let i = 1, sorted = 1; i < arr.length; i++, sorted++)
    for (let j = 0; j < sorted; j++)
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        for (let k = j + 1; k <= i; k++)
          [ temp, arr[k] ] = [ arr[k], temp ];
      }
  return arr;
};

// with swaps
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++)
    for (let j = i - 1; j >= 0; j--)
      if (arr[j + 1] < arr[j])
        [ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ];
  return arr;
};

// // with shift & insertion instead of swaps
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
};

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) { // using shifts
    const temp = arr[i];
    for (let j = i - 1; j >= -1; j--)
      if (arr[j] > temp)
        arr[j + 1] = arr[j];
      else {
        arr[j + 1] = temp;
        break;
      }
  }
  return arr;

  // for (let i = 1; i < arr.length; i++) // using swaps
  //   for (let j = i - 1; j > -1; j--)
  //     if (arr[j + 1] < arr[j])
  //       [ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ];
  //     else break;
  // return arr;
};

// const arr = [ 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
// const arr = [ 2, 1, 3, 4, 5, 6, 7, 9, 8, 8, 10, 11 ];
const arr = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8 ];
// const arr = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8, -3, 7, 3333, 10, -333, 90, 2, 3.9, 0, 2, 330, 5, 7, 3, 6, 8, 2, 9, 1, 4 ];
// const arr = [ 4, 1, 3, 5, 2 ];
console.log(insertionSort(arr));
