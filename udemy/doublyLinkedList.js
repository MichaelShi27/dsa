class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head)
      this.head = node;
    else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head)
      return;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      popped.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head)
      return;
    const shifted = this.head;
    this.head = shifted.next;
    if (this.length === 1)
      this.tail = null;
    else {
      shifted.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shifted;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head)
      this.tail = node;
    else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.length++;
    return this;
  }
}

const newList = new DoublyLinkedList();
newList.push('7');
newList.push('8');
newList.push('9');
newList.unshift('6');
newList.unshift('5');
newList.pop();
newList.shift();
console.log(newList, newList.length);