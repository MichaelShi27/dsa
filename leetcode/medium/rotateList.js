// 61. Rotate List
// https://leetcode.com/problems/rotate-list/

// O(k * n) => exceeds time limit
const rotateRight = (head, k) => {
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
  while (k > 0) {
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    cur.next = head; // cur is essentially the current tail
    prev.next = null;
    head = cur;
    k--;
  }
  return head;
};
