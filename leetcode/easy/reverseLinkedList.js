// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

const reverseList = head => {
  if (!head) return null;
  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // while (cur) // can use this while loop instead
  //   [ cur.next, prev, cur ] = [ prev, cur, cur.next ];
  return prev;
};

// O(2n) time, O(1n) space
const reverseList = head => {
  const arr = [];
  for (let cur = head; cur; cur = cur.next)
    arr.push(cur);
  for (let i = arr.length - 1; i >= 0; i--)
    arr[i].next = arr[i - 1] || null;
  return arr[arr.length - 1] || null;
};

// recursive w/ helper (copied from LC discussion)
const reverseList = head => {
  const helper = (cur, prev) => {
    if (!cur) return prev;
    const next = cur.next;
    cur.next = prev;
    return helper(next, cur);
  };
  return helper(head, null);
};

// recursive (copied from LC discussion)
const reverseList = head => {
  if (!head || !head.next) return head;
  const finalHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return finalHead; // this will be "set" once at the very end of the input list, & passed back up
};

// recursive (copied from LC discussion)
const reverseList = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
