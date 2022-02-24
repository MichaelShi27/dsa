// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

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
