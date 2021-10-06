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

list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.rotate(3);
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.rotate(2);
console.log( printList(list) );

// list.unshift(0);
// list.unshift(1);
// list.unshift(2);
// list.insert(0, 0);
// console.log( printList(list) );
// list.insert(1, 1);
// console.log( printList(list) );
// list.insert(3, 3);
// console.log( printList(list) );
// list.insert(7, 7)
// list.insert(0, 7)
// list.insert(6, 6)
// console.log( printList(list) );
