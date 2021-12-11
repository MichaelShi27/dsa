// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (l1, l2) => {
  let p = l1;
  let q = l2;
  let prehead = new ListNode(null);
  let cur = prehead;
  let carry = 0;

  while (p || q || carry) {
    const sum = (p ? p.val : 0) + (q ? q.val : 0) + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    p = p ? p.next : null;
    q = q ? q.next : null;
  }

  return prehead.next;
};

// a less succinct solution, but still O( Math.max(m, n) )
const addTwoNumbers = (l1, l2) => {
  let p = l1;
  let q = l2;
  let carry = 0;
  let prehead = new ListNode(null);
  let cur = prehead;

  while (p || q) {
    let sum = (p ? p.val : 0) + (q ? q.val : 0);

    if (carry) {
      sum += carry;
      carry = 0;
    }
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }
    cur.next = new ListNode(sum);
    cur = cur.next;

    if (p) p = p.next;
    if (q) q = q.next;
  }
  if (carry)
    cur.next = new ListNode(1);

  return prehead.next;
};
