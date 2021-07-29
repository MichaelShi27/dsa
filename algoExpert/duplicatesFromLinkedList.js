const removeDuplicatesFromLinkedList = list => {
  let prev = list;
  let curr = list.next;

  while (prev.next) {
    if (prev.value === curr.value) prev.next = curr.next // remove curr from LL
    else prev = curr;
    curr = curr.next;
  }
  return list;
};

// can also solve w/ an inner loop that traverses all current duplicates at once, then removes them all at once

// TESTING

class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let one = new LinkedList(1);
let two = new LinkedList(1);
let three = new LinkedList(3);
let four = new LinkedList(4);
let five = new LinkedList(4);
let six = new LinkedList(4);
let seven = new LinkedList(5);
let eight = new LinkedList(6);
let nine = new LinkedList(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;
eight.next = nine;

// let curr = one;
let curr = removeDuplicatesFromLinkedList(one);

while (curr) {
  console.log(curr.value);
  curr = curr.next;
}