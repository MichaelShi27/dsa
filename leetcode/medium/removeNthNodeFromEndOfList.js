// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// 2-pass: n time, const space
const removeNthFromEnd = (head, n) => {
  let len = 1;
  let cur = head;
  while (cur.next) {
    len++;
    cur = cur.next;
  }
  if (len === 1)
    return null;

  const diff = len - n;
  if (diff === 0) // we're removing the first el
    return head.next;

  let prev = head;
  for (let i = 0; i < diff - 1; i++)
    prev = prev.next;
  prev.next = prev.next.next;

  return head;
};

// 1-pass: n time, n space
const removeNthFromEnd = (head, n) => {
  const obj = {};
  let len = 1;
  let cur = head;
  while (cur.next) {
    obj[len] = cur;
    len++;
    cur = cur.next;
  }
  if (len === 1)
    return null;

  const diff = len - n;
  if (diff === 0) // we're removing first el
    return head.next;

  obj[diff].next = obj[diff + 1] ? obj[diff + 1].next : null;
  return head;
};

// 1-pass: n time, const space
// 2 pointers, fast starts at n from head & slow starts at head
const removeNthFromEnd = (head, n) => {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++)
    fast = fast.next;

  if (!fast) // fast has reached end, which means we're removing first el
    return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};

// from LC Discussion: similar to above, but uses prehead to avoid if-statements for edge cases
const removeNthFromEnd = (head, n) => {
  const prehead = new ListNode(null);
  prehead.next = head;
  let fast = prehead, slow = prehead;

  for (let i = 0; i < n + 1; i++)
    fast = fast.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return prehead.next;
};
