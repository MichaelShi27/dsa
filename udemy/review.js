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

const findRotatedIndex = () => {

};

const testSort = sort => {
  const testArrayEquality = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
  const defaultSort = arr => arr.sort((a, b) => a - b);
  console.log(testArrayEquality( sort([ 3, 2, 0, -1, 1, 2, 3, 9, 0, 1, 9, 7 ]), [ -1, 0, 0, 1, 1, 2, 2, 3, 3, 7, 9, 9 ] ));
  console.log(testArrayEquality( sort([ 6, 5, 4, 3, 2, 1, 0, -1 ]), [ -1, 0, 1, 2, 3, 4, 5, 6 ] ));
  console.log(testArrayEquality( sort([ -3, -4, 9, 1, 2, 3, 4, 11, 5, 6, 7, 8, 10 ]), [ -4, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ] ));
  console.log(testArrayEquality( sort([ 1 ]), [ 1 ] ));
  console.log(testArrayEquality( sort([ 2, 1 ]), [ 1, 2 ] ));
  console.log(testArrayEquality( sort([ 1, 2 ]), [ 1, 2 ] ));
};

