const binarySearch = (arr, target) => {
  let high = arr.length;
  let low = 0;

  while (low !== high) {
    let mid = Math.floor( (high + low) / 2 );
    console.log(high, mid, low);
    if (arr[mid] > target) {
      high = mid;
    } else if (arr[mid] < target) {
      low = mid;
    } else return mid;
  }
  return -1;
};

// let array = [ 1, 1, 2, 33, 44, 44, 55, 66 ];
let array = [ -4, 0, 21, 33, 45, 45, 61, 71, 72, 73 ];
let num = 71;
console.log( binarySearch(array, num) );