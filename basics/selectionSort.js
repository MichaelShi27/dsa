const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) smallestIdx = j;
    }
    [ arr[i], arr[smallestIdx] ] = [ arr[smallestIdx], arr[i] ];
  }
  return arr;
};

// let array = [ 4, 3, 2, 1, 0 ];
let array = [ 4, 3, 2, 1, -10, 11, 3030, -23, 43, 42, 41, -1, -2, -10, -9, 8, 8 ];
console.log(array);
console.log( 'res:', selectionSort(array) );
