var hasCycle = function(head) {
  // init fastPtr
  // init slowPtr

  // while true
      // if fast === slow, return true
      // increment fast
      // increment slow
      // if fast === null return false
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