const reverse = str => {
  return str ? reverse(str.slice(1)) + str[0] : '';
};

// console.log(reverse('hellothere'));


const isPalindrome = str => {
  if (!str.length || str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome( str.slice(1, str.length - 1) );
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
// const flatten = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if ( Array.isArray(arr[i]) ) {
//       let flat = flatten(arr[i]);
//       arr.splice(i, 1, ...flat)
//     }
//   }

//   return arr;
// };

// new arr
const flatten = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ( Array.isArray(arr[i]) )
      newArr = newArr.concat( flatten(arr[i]) );
    else
      newArr.push(arr[i]);
  }

  return newArr;
};

let arr = [1, [2, [3, 4, 5, 6], [[7]]], [[8], 9], 10, 11, 12];
let arr1 = [1, [2], [3, 4, 5, 6], [[7]], [8], 9, 10, 11, 12];
// console.log(flatten(arr));
// console.log(flatten(arr1));


const capitalizeFirst = arg => {
  if (Array.isArray(arg)) {
    for (let i = 0; i < arg.length; i++)
      arg[i] = capitalizeFirst(arg[i]);
    return arg;
  }
  if (arg.length === 1) return arg.toUpperCase();

  const split = arg.split('');
  const char = split.pop();
  return capitalizeFirst( split.join('') ) + char;
};

let array = [ 'hello there', 'booooo', 'yeet' ];
// console.log(array.slice(array.length-1)[0].toUpperCase())
// console.log( capitalizeFirst(array) );

const isObject = arg => typeof arg === "object" && !Array.isArray(arg);

function nestedEvenSum(arg) {
  let sum = 0;
  if (isObject(arg)) {
    for (let key in arg)
      sum += nestedEvenSum(arg[key]);
    return sum;
  }
  if (arg % 2 === 0) return arg;
  return 0;
}


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

  const el = arr.pop();
  arr = capitalizeWords(arr);
  arr.push(el.toUpperCase());
  return arr;
};

console.log( capitalizeWords(['hi', 'there', 'my friend']) );