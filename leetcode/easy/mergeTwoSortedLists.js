// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

// iterative
const mergeTwoLists = (l1, l2) => {
  const prehead = new ListNode(-1);
  let cur = prehead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;

  return prehead.next;
};

// pure recursive
const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  let cur;

  if (l1.val < l2.val) {
    cur = l1;
    cur.next = mergeTwoLists(l1.next, l2);
  } else {
    cur = l2;
    cur.next = mergeTwoLists(l1, l2.next);
  }
  return cur;
};

// alternate pure recursive approaches (from Discussion tab)
const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2)
    return l1 || l2;

  if (l1.val > l2.val)
    [ l1, l2 ] = [ l2, l1 ];

  l1.next = mergeTwoLists(l1.next, l2)
  return l1;
};
