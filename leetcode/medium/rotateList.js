// 61. Rotate List
// https://leetcode.com/problems/rotate-list/

// like rotateRight1, but with a rotateLeft in case it's more efficient to use it
const rotateRight2 = (head, k) => {
  if (!head || !head.next) return head;

  let prev;
  let cur = head;
  let len = 0;

  while (cur) {
    cur = cur.next;
    len++;
  }
  k %= len;
  cur = head;

  if (k > len / 2)
    return rotateLeft(head, len - k);

  while (k-- > 0) {
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    cur.next = head; // cur is essentially the current tail
    prev.next = null;
    head = cur;
  }
  return head;
};

const rotateLeft = (head, k) => {
  let cur = head;
  while (cur.next) {
    prev = cur;
    cur = cur.next;
  }
  let tail = cur;

  while (k-- > 0) {
    tail.next = head;
    tail = head;
    head = head.next;
    tail.next = null;
  }
  return head;
};

// O( (k % n) * n + n )? worst case is if k % n is n - 1, so time is (n - 1) * n
const rotateRight1 = (head, k) => {
  if (!head || !head.next) return head;

  let prev;
  let cur = head;
  let len = 0;

  while (cur) {
    cur = cur.next;
    len++;
  }
  k %= len;
  cur = head;

  while (k-- > 0) {
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    cur.next = head; // cur is essentially the current tail
    prev.next = null;
    head = cur;
  }
  return head;
};
