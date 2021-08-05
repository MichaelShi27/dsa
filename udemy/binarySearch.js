const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor( (right + left) / 2 );
      if (arr[mid] > val)
          right = mid - 1;
      else if (arr[mid] < val)
          left = mid + 1;
      else return mid;
  }
  return -1;
};