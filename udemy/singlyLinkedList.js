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

    if (prev) // needed in case we're removing the sole node (null.next would give error)
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

  get(idx) {
    if (!this.head || idx < 0 || idx >= this.length)
      return;
    let curr = this.head;
    while (idx--)
      curr = curr.next;
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

    const prev = this.get(idx - 1);
    if (!prev)
      return false;

    const next = prev.next;
    prev.next = new Node(val);
    prev.next.next = next;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length)
      return false;
    if (idx === 0)
      return !!this.shift();
    if (idx === this.length - 1)
      return !!this.pop();

    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    if (!this.head || !this.head.next)
      return this.head;
    let prev = null;
    let curr = this.head;
    let next = curr.next;

    while (curr) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = next ? next.next : null;
    }
    [ this.head, this.tail ] = [ this.tail, this.head ]
    return this;
  }
}

const newList = new SinglyLinkedList();
newList.push('7');
newList.push('8');
newList.push('9');
newList.unshift('6');
newList.reverse();
console.log(newList, newList.length);
