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

  get(idx) {
    if (!this.head || idx < 0 || idx >= this.length)
      return;
    let end = 'head';
    let direction = 'next';
    if (idx > this.length / 2) {
      end = 'tail';
      direction = 'prev';
      idx = this.length - 1 - idx;
    }
    let curr = this[end];
    while (idx--)
      curr = curr[direction];
    return curr;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (!node)
      return false;
    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx === 0)
      return !!this.unshift(val);
    if (idx === this.length)
      return !!this.push(val);

    const next = this.get(idx);
    if (!next)
      return false;

    const prev = next.prev;
    const inserted = new Node(val);
    prev.next = inserted;
    next.prev = inserted;
    inserted.prev = prev;
    inserted.next = next;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx === 0)
      return !!this.shift();
    if (idx === this.length - 1)
      return !!this.pop();

    const removed = this.get(idx);
    if (!removed)
      return false;

    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = null;
    removed.next = null;

    this.length--;
    return removed;
  }

  reverse() {
    let curr = this.head;
    while (curr) {
      [ curr.next, curr.prev ] = [ curr.prev, curr.next ];
      curr = curr.prev;
    }
    [ this.head, this.tail ] = [ this.tail, this.head ];
    return this;
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

const newList = new DoublyLinkedList();
// newList.push('7');
// newList.push('8');
// newList.push('9');
// newList.unshift('6');
// newList.unshift('5');
// newList.unshift('4');
// newList.unshift('3');
// newList.unshift('2');
// newList.unshift('1');
// newList.unshift('0');
// newList.insert(0, 'hi');
newList.reverse();
console.log( printList(newList), newList.length );
console.log(newList.head);
console.log(newList.tail);
