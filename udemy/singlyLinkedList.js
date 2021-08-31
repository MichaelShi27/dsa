class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head)
      this.head = node;
    else
      this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head)
      return;
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    if (prev) // in case we're removing the sole node (null.next would give error)
      prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0)
      this.head = null;
    return curr.val;
  }

  shift() {
    if (!this.head)
      return;
    const val = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0)
      this.tail = null;
    return val;
  }

  unshift(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    if (this.length === 1)
      this.tail = node;
    return this;
  }
}

const newList = new SinglyLinkedList();
// newList.push('7');
// newList.push('8');
// newList.push('9');
newList.unshift('9');
// console.log( newList.pop() );
// console.log( newList.pop() );
console.log(newList, newList.length);
