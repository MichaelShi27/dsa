const mergeSortedArrays = (arr1, arr2) => {
  const res = [];

  for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
    if (arr1[i] === undefined) {
      res.push(arr2[j]);
      j++;
    } else if (arr2[j] === undefined) {
      res.push(arr1[i]);
      i++;
    } else if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  return res;
};

// const mergeSortedArrays = (arr1, arr2) => {
//   const newArr = [];
//   for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
//     if (arr1[i] < arr2[j] || arr2[j] === undefined) {
//       newArr.push(arr1[i]);
//       i++;
//     } else {
//       newArr.push(arr2[j]);
//       j++;
//     }
//   }
//   return newArr;
// };

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  return mergeSortedArrays( mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)) );
};

const arr1 = [];
// const arr1 = [ 1, 3, 8, 11, 14, 20, 21, 21, 29, 33, 34, 44, 45, 46, 47, 48, 49, 100, 101, 209 ];
// const arr2 = [ 2, 4, 5, 6, 12, 14, 15, 16, 21, 23, 29, 33, 39 , 102 ];
const arr3 = [ 2, 3, 1, 0, 3, 9, 2, 8, 7, 0, -29 ]
console.log( mergeSort(arr3) );