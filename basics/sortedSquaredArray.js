const sortedSquaredArray = array => {
  let res = [];
  for (let el of array) res.push(el * el);
  return res;
};

// let sortedSquaredArray = array => {
//   return array.reduce(
//     (res, el) => {
//       res.push(el * el);
//       return res;
//     }, []);
// };


let arr = [ 1, 4, 5, 6, 9, 12 ];
console.log( sortedSquaredArray(arr) );