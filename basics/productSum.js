// product sum of a "special" array is the sum of its elements, where "special" arrays inside the original are summed themselves & then multiplied by their level of depth (i.e. how far nested it is)
// example: [ x, [ y, [ z ] ] ] = x + 2 * (y * 3 * z)


const findProductSum = arr => recurse(arr, 2);

const recurse = (arr, depth) => {
  let sum = 0;
  for (let el of arr)
    sum += Array.isArray(el) ? depth * recurse(el, depth + 1) : el;
  return sum;
};

let array = [ 5, 2, [ 7, -1 ], 3, [ 6, [ -13, 8 ], 4 ] ]; // 12
console.log( findProductSum(array) );