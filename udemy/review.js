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
  while (true) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= arr[mid + 1]) {
      if (arr[mid] > arr[low])
        low = mid;
      else
        high = mid;
    } else {
      pivot = mid;
      break;
    }
    // what if actually sorted
  }
  return pivot;
  // while (true) {
  //   let mid = Math.floor((low + high) / 2);
  //   if (arr[mid] < num) {

  //   } else if (arr[mid] > num) {

  //   } else return mid;
  // }
};

console.log(findRotatedIndex([ 15, 3, 5, 6, 7, 8, 10, 11, 14, 15 ]));

const testSortingFunction = sort => {
  const testArrayEquality = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
  const defaultSort = arr => arr.sort((a, b) => a - b);
  console.log(testArrayEquality( sort([ 3, 2, 0, -1, 1, 2, 3, 9, 0, 1, 9, 7 ]), [ -1, 0, 0, 1, 1, 2, 2, 3, 3, 7, 9, 9 ] ));
  console.log(testArrayEquality( sort([ 6, 5, 4, 3, 2, 1, 0, -1 ]), [ -1, 0, 1, 2, 3, 4, 5, 6 ] ));
  console.log(testArrayEquality( sort([ -3, -4, 9, 1, 2, 3, 4, 11, 5, 6, 7, 8, 10 ]), [ -4, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ] ));
  console.log(testArrayEquality( sort([ 1 ]), [ 1 ] ));
  console.log(testArrayEquality( sort([ 2, 1 ]), [ 1, 2 ] ));
  console.log(testArrayEquality( sort([ 1, 2 ]), [ 1, 2 ] ));
  console.log(testArrayEquality( sort([ 2, 1, 3, 4, 5, 7, 6 ]), [ 1, 2, 3, 4, 5, 6, 7 ] ));
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

testSortingFunction(insertionSort);
