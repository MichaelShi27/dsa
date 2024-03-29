const reverse = str => str ? reverse(str.slice(1)) + str[0] : '';
// const reverse = str => str.length <= 1 ? str : reverse(str.slice(1)) + str[0];

// console.log(reverse('hellothere'));


const isPalindrome = str => {
  if (!str.length || str.length === 1) return true;
  if (str[0] !== str.slice(-1)) return false;

  return isPalindrome( str.slice(1, -1) );
};

// console.log(isPalindrome('haaaaaabaaaaaaah'));

const isOdd = val => val % 2;

const someRecursive = (arr, func) => {
  if (!arr.length) return false;
  if ( func(arr.pop()) ) return true;
  return someRecursive(arr, func);
};

// console.log(someRecursive([2, 2, 4, 6], isOdd));

// in-place
const flatten = arr => {
  for (let i = 0; i < arr.length; i++) {
    if ( Array.isArray(arr[i]) ) {
      let flat = flatten(arr[i]);
      arr.splice(i, 1, ...flat)
    }
  }

  return arr;
};

// // new arr
// const flatten = arr => {
//   let res = [];
//   for (let el of arr) {
//     if (Array.isArray(el))
//       res = res.concat( flatten(el) ); // can also be res.push(...flatten(el))
//     else
//       res.push(el);
//   }
//   return res;
// };

// // default arg
// const flatten = (arr, res = []) => {
//   for (let el of arr) {
//     if (Array.isArray(el))
//       flatten(el, res);
//     else
//       res.push(el);
//   }
//   return res;
// };

// // helper (similar to default arg)
// const flatten = arr => {
//   const res = [];

//   const helper = arr => {
//     for (let el of arr) {
//       if (Array.isArray(el))
//         helper(el);
//       else
//         res.push(el);
//     }
//   };

//   helper(arr);
//   return res;
// };

// let arr = [1, [2, [3, 4, 5, 6], [[7]]], [[8], 9], 10, 11, 12];
// let arr1 = [1, [2], [3, 4, 5, 6], [[7]], [8], 9, 10, 11, 12];
// // console.log(flatten(arr));
// // console.log(flatten(arr1));


// // Colt's solution
// function capitalizeFirst(array) {
//   if (array.length === 1)
//     return [ array[0][0].toUpperCase() + array[0].slice(1) ];

//   const res = capitalizeFirst( array.slice(0, -1) );
//   const str = array.slice(-1)[0][0].toUpperCase() + array.slice(-1)[0].slice(1);
//   res.push(str);
//   return res;
// }

// // w/ helper
// const capitalizeFirst = arr => {
//     const res = [];

//     const helper = arr => {
//         if (!arr.length) return;
//         let last = arr.pop();
//         last = last[0].toUpperCase() + last.slice(1);
//         res.unshift(last);
//         helper(arr);
//     }
//     helper(arr);
//     return res;
// };

// // w/ default arg
// const capitalizeFirst = (arr, res = []) => {
//     if (!arr.length) return;

//     let last = arr.pop();
//     last = last[0].toUpperCase() + last.slice(1);
//     res.unshift(last);

//     capitalizeFirst(arr, res);
//     return res;
// };


// best solution?
const capitalizeFirst = arr => {
  if (!arr.length) return [];

  let first = arr[0];
  first = first[0].toUpperCase() + first.slice(1);

  return [ first, ...capitalizeFirst(arr.slice(1)) ];
};

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


let array = [ 'hello there', 'booooo', 'yeet' ];
// console.log(array.slice(array.length-1)[0].toUpperCase())
// console.log( capitalizeFirst(array) );

const isObject = arg => typeof arg === "object" && !Array.isArray(arg);

// // my better solution
// const nestedEvenSum = o => {
//     let sum = 0;
//     for (let key in o) {
//         const val = o[key];
//         if (typeof val === 'object')
//             sum += nestedEvenSum(val);
//         else if (typeof val === 'number' && val % 2 === 0)
//             sum += val;
//     }
//     return sum;
// };

// // my weird solution
// function nestedEvenSum(arg) {
//   let sum = 0;
//   if (isObject(arg)) {
//     for (let key in arg)
//       sum += nestedEvenSum(arg[key]);
//     return sum;
//   }
//   if (arg % 2 === 0) return arg;
//   return 0;
// }


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// console.log( nestedEvenSum(obj1) ); // 6
// console.log( nestedEvenSum(obj2) ); // 10

const capitalizeWords = arr => {
  if (arr.length === 1) return [ arr[0].toUpperCase() ];
  const last = arr.pop().toUpperCase();
  return [ ...capitalizeWords(arr), last ];
};

// const capitalizeWords = arr => {
//   if (!arr.length) return [];
//   return [ arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1)) ];
// };

// console.log( capitalizeWords(['hi', 'there', 'my friend']) );

// function foo(arr) {
//   let count = 0;
//   for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j <= i; j++) {
//           // console.log(i, j);
//           count++;
//       }
//   }
//   console.log(count);
//   console.log(arr.length ** 2 / count);
// }

// const fill = num => {
//   let arr = [];
//   for (let i = 0; i <= num; i++)
//     arr.push(i);
//   return arr;
// }
// console.log( foo(fill(1000)) );

// const stringifyNumbers = obj => {
//   for (let key in obj) {
//     if ( isObject(obj[key]) )
//       obj[key] = stringifyNumbers(obj[key]);
//     if (typeof obj[key] === 'number')
//       obj[key] = obj[key].toString();
//   }
//   return obj;
// };

const stringifyNumbers = obj => {
  const res = {};
  for (let key in obj) {
    if ( isObject(obj[key]) )
      res[key] = stringifyNumbers(obj[key]);
    else if (typeof obj[key] === 'number')
      res[key] = obj[key].toString();
    else
      res[key] = obj[key];
  }
  return res;
};

let obj = {
  num: 1, test: [], data: {
    val: 4,info: {
      isRight: true, random: 66
    }
  }
};
// console.log(stringifyNumbers(obj));

const collectStrings = obj => {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string')
      arr.push(obj[key]);
    else if ( isObject(obj[key]) )
      arr = arr.concat( collectStrings(obj[key]) );
  }
  return arr
};

let test = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}
// console.log(collectStrings(test));

const addStringNumbers = (str1, str2) => {
  const obj = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 };

  const convertToNum = str => {
    let num = 0;
    for (let i = str.length - 1, base = 1; i > - 1; i--, base *= 10)
      num += obj[str[i]] * base;
    return num;
  }

  return convertToNum(str1) + convertToNum(str2);
};

// console.log(addStringNumbers('101', '13'));



