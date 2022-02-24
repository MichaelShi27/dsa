// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

// floyd's algo (2 pointers/fast & slow/tortois & hare)
// n time, const space
const hasCycle = head => {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};

// set => n time & space
const hasCycle = head => {
  const set = new Set();
  let cur = head;

  while (cur) {
    if (set.has(cur)) return true;
    set.add(cur);
    cur = cur.next;
  }
  return false;
};

// n time, n space?
const hasCycle = head => {
  let cur = head;
  while (cur) {
    if (cur.seen) return true;
    cur.seen = true;
    cur = cur.next;
  }
  return false;
};
