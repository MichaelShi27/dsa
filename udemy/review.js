// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null;
//   }
// }

// class SinglyLinkedList {

//   constructor(val) {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     const node = new Node(val);
//     if (!this.length)
//       this.head = node;
//     else
//       this.tail.next = node;
//     this.tail = node;
//     this.length++;
//   }

//   unshift(val) {
//     if (!this.length) this.push(val);
//     else {
//       const node = new Node(val);
//       node.next = this.head;
//       this.head = node;
//       this.length++;
//     }
//   }

//   insert(idx, val) {
//     if (idx > this.length || idx < 0) return false;
//     if (!idx)
//     this.unshift(val);
//     else if (idx === this.length)
//     this.push(val);
//     else {
//       const node = new Node(val);
//       let curr = this.head, prev = null;
//       while (idx--) {
//         prev = curr;
//         curr = curr.next;
//       }
//       prev.next = node;
//       node.next = curr;
//       this.length++;
//     }
//     return true;
//   }

//   pop() {
//     if (!this.length) return;
//     const removed = this.tail;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let curr = this.head;
//       while (curr.next !== this.tail)
//         curr = curr.next;
//       this.tail = curr;
//       this.tail.next = null;
//     }
//     this.length--;
//     return removed;
//   }

//   shift() {
//     if (!this.length) return false;
//     const removed = this.head;
//     this.head = this.head.next;
//     this.length--;
//     if (this.length === 0)
//       this.tail = null;
//     return removed;
//   }

//   remove(idx) {
//     if (!this.length) return false;
//     if (idx === 0) return this.shift();
//     if (idx === this.length - 1) return this.pop();
//     const prev = this.get(idx - 1);
//     const removed = prev.next;
//     prev.next = removed.next;
//     this.length--;
//     return removed;
//   }

//   get(idx) {
//     if (!this.length || idx >= this.length || idx < 0) return;
//     let curr = this.head;
//     while (idx--)
//       curr = curr.next;
//     return curr;
//   }

//   rotate(n) {
//     n %= this.length;
//     if (!n) return;
//     if (n < 0) n += this.length;

//     // while (n--) {
//     //   const newHead = this.head.next;
//     //   this.tail.next = this.head;
//     //   this.head.next = null;
//     //   this.tail = this.head;
//     //   this.head = newHead;
//     // }

//     const newTail = this.get(n - 1);
//     const newHead = newTail.next;
//     newTail.next = null;
//     this.tail.next = this.head;
//     this.head = newHead;
//     this.tail = newTail;
//   }
// }

const printList = list => {
  const arr = [];
  let curr = list.head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
};

// let list = new SinglyLinkedList();
// list.insert(0, 0);
// console.log( printList(list) );

const countZeroes = arr => {
  let low = 0;
  let high = arr.length - 1;
  while (true) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === 0) {
      high = mid - 1;
      if (arr[mid - 1] === 1)
        return arr.length - mid;
      if (mid === 1)
        return arr.length;

    } else {
      low = mid + 1;
      if (arr[mid + 1] === 0)
        return arr.length - (mid + 1);
      if (mid === arr.length - 2)
        return 0;
    }

    // // below approach doesn't seem to work if just 1 one or zero
    // if (arr[mid] === 0) {
    //   if (mid === 1)
    //     return arr.length;
    //   if (mid === low + 1)
    //     return arr.length - mid;
    //   high = mid;

    // } else {
    //   if (mid === arr.length - 2)
    //     return 0;
    //   if (mid === high - 1)
    //     return arr.length - (mid + 1);
    //   low = mid;
    // }
  }
};

const testCountZeroes = zeroes => {
  const createArr = zeroes => {
    let ones = 10;
    const arr = [];
    while (ones--) arr.push(1);
    while (zeroes--) arr.push(0);
    return arr;
  };
  let arr = createArr(zeroes);
  console.log(countZeroes(arr) === zeroes);
  console.log(countZeroes([0, 0, 0, 0, 0]) === 5);
  console.log(countZeroes([0, 0, 0, 0, 0, 0]) === 6);
  console.log(countZeroes([1, 1, 1, 1, 1]) === 0);
  console.log(countZeroes([1, 1, 1, 1, 1, 1]) === 0);
  console.log(countZeroes([1, 0, 0, 0, 0, 0]) === 5);
  console.log(countZeroes([1, 0, 0, 0, 0]) === 4);
  console.log(countZeroes([1, 1, 1, 1, 1, 0]) === 1);
  console.log(countZeroes([1, 1, 1, 1, 0]) === 1);
};
const zeroes = 1000000;
// testCountZeroes(zeroes);

const sortedFrequency = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;
  let mid, start, end;
  if (arr[low] > num || arr[high] < num) return -1;

  while (true) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] < num) {
      low = mid;
      if (arr[mid + 1] === num) {
        start = mid + 1;
        break;
      }
    } else {
      high = mid;
      if (arr[mid] === num && mid === 0) {
        start = mid;
        break;
      } else if (arr[mid] === num && arr[mid - 1] < num) {
        start = mid;
        break;
      }
    }
  }

  low = 0;
  high = arr.length - 1;
  while (true) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] > num) {
      high = mid;
      if (arr[mid - 1] === num) {
        end = mid - 1;
        break;
      }
    } else {
      low = mid;
      if (arr[mid + 1] === num && mid === arr.length - 2) {
        end = mid + 1;
        break;
      } else if (arr[mid] === num && arr[mid + 1] > num) {
        end = mid;
        break;
      }
    }
  }
  return end - start + 1;
};

const testSortedFrequency = () => {
  console.log(sortedFrequency( [1,1,2,2,2,2,3], 2 ) === 4);
  console.log(sortedFrequency( [1,1,2,2,2,2,3], 3 ) === 1);
  console.log(sortedFrequency( [1,1,2,2,2,2,3], 1 ) === 2);
  console.log(sortedFrequency( [1,1,2,2,2,2,3], 4 ) === -1);
  console.log(sortedFrequency( [1,2,2,2,2,3], 1 ) === 1);
};
// testSortedFrequency();

// const findRotatedIndex = (arr, num) => {
//   const firstEl = arr[0];
//   const lastEl = arr[arr.length - 1];

//   let low = 0;
//   let high = arr.length - 1;
//   let pivot;
//   if (arr[low] < arr[high])
//     pivot = -1;

//   while (pivot === undefined) {
//     let mid = Math.floor((low + high) / 2);
//     console.log(low, high)
//     if (low === high)
//       pivot = -1;
//     else if (arr[mid] <= arr[mid + 1]) {
//       if (arr[mid] > arr[low] || arr[mid] > arr[high])
//         low = mid;
//       else if (arr[mid] < arr[high] || arr[mid] < arr[low])
//         high = mid;
//     } else
//       pivot = mid;
//   }
//   return pivot;
// };

// findRotatedIndex - see also: ../leetcode/medium/searchInRotatedSortedArray.js

const findRotatedIndex = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;
  const pivotIdx = findPivotIdx(arr);

  if (pivotIdx !== 0) {
    if (num > arr[0])
      high = pivotIdx; // look to left of pivot
    else if (num < arr[0])
      low = pivotIdx; // look to right of pivot
    else
      return 0;
  }

  while (low <= high) {
    const mid = Math.floor( (low + high) / 2 );
    if (num < arr[mid])
      high = mid - 1;
    else if (num > arr[mid])
      low = mid + 1;
    else
      return mid;
  }
  return -1;
};

const findPivotIdx = arr => { // essentially the same as ./findMinimumInRotatedSortedArray.js
  const len = arr.length;
  if (len === 1 || arr[len - 1] > arr[0]) return 0;

  let start = 0;
  let end = len - 1;

  while (true) {
    const mid = Math.floor( (start + end) / 2 );

    if (arr[mid] < arr[mid - 1])
      return mid;
    if (arr[mid] > arr[mid + 1])
      return mid + 1;

    if (arr[start] > arr[mid])
      end = mid - 1;
    else
      start = mid + 1;
  }
};

const bubbleSort = arr => {
  let swapFound = false;
  for (let i = arr.length - 1; i > 0; i--) {
    swapFound = false;
    for (let j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        [ arr[j], arr[j + 1 ] ] = [ arr[j + 1], arr[j] ];
        swapFound = true;
      }
    if (!swapFound) return arr;
  }
  return arr;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[minIdx])
        minIdx = j;
    if (i !== minIdx)
      [ arr[i], arr[minIdx] ] = [ arr[minIdx], arr[i] ];
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

// testSortingFunction(insertionSort);

const mergeSortedArrays = (arr1, arr2) => {
  const newArr = [];
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  return newArr;
};

const testMergeSortedArrays = () => {
  const testArrayEquality = (arr1, arr2) => console.log( JSON.stringify(arr1) === JSON.stringify(arr2) );
  testArrayEquality( mergeSortedArrays([ 3 ], [ 1 ]), [ 1, 3 ] );
  testArrayEquality( mergeSortedArrays([ 1, 3 ], [ 1, 2 ]), [ 1, 1, 2, 3 ] );
  testArrayEquality( mergeSortedArrays([ 0, 2, 3, 3, 4 ], [ 1, 3, 4, 5 ]), [ 0, 1, 2, 3, 3, 3, 4, 4, 5 ] );
  testArrayEquality(
    mergeSortedArrays([ 1, 2, 4, 5, 8, 15 ], [ -2, 0, 1, 1, 2, 3, 5, 7, 8, 9, 12 ]),
    [ -2, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5, 7, 8, 8, 9, 12, 15 ]
  );
};

// testMergeSortedArrays();

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf =  arr.slice(mid);
  return mergeSortedArrays( mergeSort(firstHalf), mergeSort(secondHalf) );
};

const testSortingFunction = sort => {
  const testArrayEquality = (arr1, arr2) => console.log( JSON.stringify(arr1) === JSON.stringify(arr2) );
  testArrayEquality( sort([ 3 ]), [ 3 ] );
  testArrayEquality( sort([ 3, 1 ]), [ 1, 3 ] );
  testArrayEquality( sort([ 1, 2 ]), [ 1, 2 ] );
  testArrayEquality( sort([ 1, 3, 1, 2 ]), [ 1, 1, 2, 3 ] );
  testArrayEquality( sort([ 2, 1, 3, 4, 5, 7, 6 ]), [ 1, 2, 3, 4, 5, 6, 7 ] );
  testArrayEquality( sort([ 6, 5, 4, 3, 2, 1, 0, -1 ]), [ -1, 0, 1, 2, 3, 4, 5, 6 ] );
  testArrayEquality( sort([ 0, 2, 3, 3, 4, 1, 3, 4, 5 ]), [ 0, 1, 2, 3, 3, 3, 4, 4, 5 ] );
  testArrayEquality( sort([ 3, 2, 0, -1, 1, 2, 3, 9, 0, 1, 9, 7 ]), [ -1, 0, 0, 1, 1, 2, 2, 3, 3, 7, 9, 9 ] );
  testArrayEquality(
    sort([ -3, -4, 9, 1, 2, 3, 4, 11, 5, 6, 7, 8, 10 ]),
    [ -4, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
  );
  testArrayEquality(
    sort([ 333, 2432, 321, 934, 154, 333, 5, 49, 2, 92 ]),
    [ 2, 5, 49, 92, 154, 321, 333, 333, 934, 2432 ]
  );
  testArrayEquality(
    sort([ 333, 2432, -321, 934, 154, 333, 5, 49, -2, 92 ]),
    [ -321, -2, 5, 49, 92, 154, 333, 333, 934, 2432 ]
  );
    testArrayEquality(
    sort([ 1, 2, 4, 5, 8, 15, -2, 0, 1, 1, 2, 3, 5, 7, 8, 9, 12 ]),
    [ -2, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5, 7, 8, 8, 9, 12, 15 ]
  );
  testArrayEquality(
    sort([ 22, 0, -1, 80, -33, 3, 0, 8, 11, 0, 56, 5, 22, 1, 7, 3, -2, -18918, -99, -20, -101, 2, 8, 4, 9 ]),
    [ -18918, -101, -99, -33, -20, -2, -1, 0, 0, 0, 1, 2, 3, 3, 4, 5, 7, 8, 8, 9, 11, 22, 22, 56, 80 ]
  );
};

const pivotHelper = (arr, start, end) => {
  const randIdx = Math.floor( Math.random() * (end - start + 1) + start );
  [ arr[start], arr[randIdx] ] = [ arr[randIdx], arr[start] ];

  const pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++)
    if (arr[i] < pivot) {
      pivotIdx++;
      [ arr[pivotIdx], arr[i] ] = [ arr[i], arr[pivotIdx] ];
    }
  [ arr[start], arr[pivotIdx] ] = [ arr[pivotIdx], arr[start] ];
  return pivotIdx;
};

const testPivotHelper = func => {
  const testArrayEquality = (arr1, arr2) => console.log( JSON.stringify(arr1) === JSON.stringify(arr2) );
  testArrayEquality( func([ 1 ]), [ [ 1 ], 0 ] );
  testArrayEquality( func([ 1, 3 ]), [ [ 1, 3 ], 0 ] );
  testArrayEquality( func([ 3, 1 ]), [ [ 1, 3 ], 1 ] );
  testArrayEquality( func([ 3, 1, 4, 2, 4, 5 ]), [ [ 2, 1, 3, 4, 4, 5 ], 2 ] );
  testArrayEquality(
    func([ 0, -2, 0, -3, -1, -1, 4, 2, 1, 4 ]),
    [ [ -1, -2, -3, -1, 0, 0, 4, 2, 1, 4 ], 4 ]
  );
  testArrayEquality( func([ 0, 1, 0, 1, 4 ]), [ [ 0, 1, 0, 1, 4 ], 0 ] );
  testArrayEquality( func([ 6, 3, 2, 1, 4, 5 ]), [ [  5, 3, 2, 1, 4, 6 ], 5 ] );
};

// testPivotHelper(pivotHelper);

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (end <= start) return arr;
  const pivotIdx = pivotHelper(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
  return arr;
};

// testSortingFunction(quickSort);

const getDigit = (num, place) => {
  if (place < 0) return;
  // const reversed = num.toString().split('').reverse();
  // return Number(reversed[place]) || 0;
  return Math.floor(( Math.abs(num) / (10 ** place) ) % 10);
};

const radixSort = arr => {
  let place = 0;
  let currMax = arr[0];
  let maxLen; // num of digits of largest num in arr (i.e. how many times we repeat)

  while (place !== maxLen) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const num of arr) {
      const digit = Math.abs( getDigit(num, place) );
      buckets[digit].push(num);

      if (place === 0 && Math.abs(num) > currMax)
        currMax = Math.abs(num);
    }
    if (place === 0)
      maxLen = currMax.toString().length;

    arr = [];
    for (const bucket of buckets)
      arr = arr.concat(bucket);
    place++;
  }
  return radixSortNegatives(arr);
};

const radixSortNegatives = arr => {
  const buckets = { pos: [], neg: [] };

  for (const num of arr)
    if (num < 0)
      buckets.neg.push(num);
    else
      buckets.pos.push(num);
  return buckets.neg.reverse().concat(buckets.pos);
};

// testSortingFunction(radixSort);

class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  // push(val) {
  //   this.q1.enqueue(val);
  //   while (this.q2.size)
  //     this.q1.enqueue( this.q2.dequeue() );
  //   [ this.q1, this.q2 ] = [ this.q2, this.q1 ];
  // }

  // pop() {
  //   return this.q2.dequeue();
  // }

  push(val) {
    this.q1.enqueue(val);
  }

  pop() {
    while (this.q1.size > 1)
      this.q2.enqueue( this.q1.dequeue() );
    [ this.q1, this.q2 ] = [ this.q2, this.q1 ];
    return this.q2.dequeue();
  }
}

// stack with 2 queues
/*
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(data) {
      var node = new Node(data);

      if (!this.first) {
          this.first = node;
          this.last = node;
      } else {
          this.last.next = node;
          this.last = node;
      }

      return ++this.size;
  }

  dequeue() {
      if (!this.first) return null;

      var temp = this.first;
      if (this.first == this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}
*/


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertIterative(val){
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      }
    }
  }

  insertRecursive(val, curr = this.root) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    if (val < curr.val) {
      if (curr.left)
        this.insertRecursive(val, curr.left);
      else
        curr.left = newNode;
    } else {
      if (curr.right)
        this.insertRecursive(val, curr.right);
      else
        curr.right = newNode;
    }
  }

  findIterative(val) {
    if (!this.root) return;
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) return;
        curr = curr.left;
      } else if (val > curr.val) {
        if (!curr.right) return;
        curr = curr.right;
      } else
        return curr;
    }
  }

  findRecursive(val, curr = this.root) {
    if (!this.root) return;
    if (val < curr.val)
      return curr.left ? this.findRecursive(val, curr.left) : undefined;
    else if (val > curr.val)
      return curr.right ? this.findRecursive(val, curr.right) : undefined;
    else
      return curr;
  }
}

const printBST = (curr, arr = []) => {
  if (!curr) return;
  arr.push(curr.val);
  printBST(curr.left, arr);
  printBST(curr.right, arr);
  return arr;
};

const testBST = () => {
  const testArrayEquality = (a, b) => console.log( JSON.stringify(a) === JSON.stringify(b) );
  const bst = new BinarySearchTree();
  const arr = [ 10, 4, 1, 8, 14, 12, 17, 19, 18, 0, -1, 9, 8.5, 9.5 ];
  arr.forEach(el => bst.insertRecursive(el));

  // test insert()
  // const expected = [ 10, 4, 1, 0, -1, 8, 9, 8.5, 9.5, 14, 12, 17, 19, 18 ];
  // testArrayEquality(printBST(bst.root), expected);

  // test find()
  console.log(!!bst.findRecursive(-1));
  console.log(!!bst.findRecursive(8.5));
  console.log(!!bst.findRecursive(19));
  console.log(!bst.findRecursive(20));
  console.log(!bst.findRecursive(7));
};
// testBST();

// // recursive
// const dfs = (node, visited = []) => {
//   if (!node) return;
//   visited.push(node.val);
//   dfs(node.left, visited);
//   dfs(node.right, visited);
//   return visited;
// };

// iterative
const dfs = root => {
  const visited = [];
  if (!root) return visited;

  const stack = [ root ];
  while (stack.length) {
    const curr = stack.pop();
    visited.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }
  return visited;
};

// // iterative
// const bfs = root => {
//   const visited = [];
//   if (!root) return visited;

//   const q = [ root ];
//   while (q.length) {
//     const curr = q.shift();
//     curr.right && q.push(curr.right);
//     curr.left && q.push(curr.left);
//     visited.push(curr.val);
//   }
//   return visited;
// };

// recursive w/ helper
const bfs = root => {
  const visited = [];
  if (!root) return visited;

  const q = [ root ];
  const recurse = () => {
    if (!q.length) return;
    const node = q.shift();
    visited.push(node.val);
    node.left && q.push(node.left);
    node.right && q.push(node.right);
    recurse();
  };
  recurse(root);
  return visited;
};

// // recursive
// const bfs = (root, visited = [], q = [ root ]) => {
//   if (!root || !q.length) return visited;

//   const curr = q.shift();
//   visited.push(curr.val);
//   curr.left && q.push(curr.left);
//   curr.right && q.push(curr.right);
//   return bfs(root, visited, q);
// };
