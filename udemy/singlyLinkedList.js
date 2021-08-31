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
    if (prev) // in case we're removing the sole node
      prev.next = null;
    this.tail = prev;
    this.length--;
    return curr.val;
  }
}

const newList = new SinglyLinkedList();
newList.push('7');
newList.push('8');
newList.push('9');
newList.pop();
console.log(newList, newList.length);
