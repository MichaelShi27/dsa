class Node {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.length)
      this.head = node;
    else
      this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  unshift(val) {
    if (!this.length) this.push(val);
    else {
      const node = new Node(val);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  insert(idx, val) {
    if (idx > this.length || idx < 0) return false;
    if (!idx)
    this.unshift(val);
    else if (idx === this.length)
    this.push(val);
    else {
      const node = new Node(val);
      let curr = this.head, prev = null;
      while (idx--) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = node;
      node.next = curr;
      this.length++;
    }
    return true;
  }

  pop() {
    if (!this.length) return;
    const removed = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      while (curr.next !== this.tail)
        curr = curr.next;
      this.tail = curr;
      this.tail.next = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (!this.length) return false;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0)
      this.tail = null;
    return removed;
  }

  remove(idx) {
    if (!this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  get(idx) {
    if (!this.length || idx >= this.length || idx < 0) return;
    let curr = this.head;
    while (idx--)
      curr = curr.next;
    return curr;
  }

  rotate(n) {
    n %= this.length;
    if (!n) return;
    if (n < 0) n += this.length;

    // while (n--) {
    //   const newHead = this.head.next;
    //   this.tail.next = this.head;
    //   this.head.next = null;
    //   this.tail = this.head;
    //   this.head = newHead;
    // }

    const newTail = this.get(n - 1);
    const newHead = newTail.next;
    newTail.next = null;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = newTail;
  }
}

const printList = list => {
  const arr = [];
  let curr = list.head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
};

let list = new SinglyLinkedList();
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

const findRotatedIndex = (arr, num) => {
  const firstEl = arr[0];
  const lastEl = arr[arr.length - 1];

  let low = 0;
  let high = arr.length - 1;
  let pivot;
  if (arr[low] < arr[high])
    pivot = -1;

  while (pivot === undefined) {
    let mid = Math.floor((low + high) / 2);
    console.log(low, high)
    if (low === high)
      pivot = -1;
    else if (arr[mid] <= arr[mid + 1]) {
      if (arr[mid] > arr[low] || arr[mid] > arr[high])
        low = mid;
      else if (arr[mid] < arr[high] || arr[mid] < arr[low])
        high = mid;
    } else
      pivot = mid;
  }
  console.log(pivot);
  return pivot;
  // while (true) {
  //   let mid = Math.floor((low + high) / 2);
  //   if (arr[mid] < num) {

  //   } else if (arr[mid] > num) {

  //   } else return mid;
  // }
};

// console.log(findRotatedIndex([ 1, 1, 1 ]) === -1);
// console.log(findRotatedIndex([ 0, 1, 1 ]) === -1);
// console.log(findRotatedIndex([ 1, 1, 1, 1, 1, 1, 1, 1 ]) === -1);
// console.log(findRotatedIndex([ 0, 1, 1, 1, 1, 1, 1, 1 ]) === -1);
// console.log(findRotatedIndex([ 1, 1, 1, 1, 1, 1, 1, 1, 0 ]) === 7);
// console.log(findRotatedIndex([ 8, 1, 1, 1, 1, 1, 1, 1, 2 ]) === 0);
// console.log(findRotatedIndex([ 8, 1, 1, 1, 1, 1, 1, 1, 2 ]) === 0);
// console.log(findRotatedIndex([ 2, 3, 4, 8, 1, 1, 1, 1, 1, 1, 1, 2 ]) === 3);
// console.log(findRotatedIndex([ 2, 3, 4, 8, 9, 10, 11, 12, 13, -3, -2, -1, 0 ]) === 8);

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

testSortingFunction(quickSort);
