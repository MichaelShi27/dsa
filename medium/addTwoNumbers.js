var addTwoNumbers = function(l1, l2) {
  let p = l1;
  let q = l2;
  let head = new ListNode();
  let curr = head;
  let carry = 0;

  while (p || q || carry) {
      const sum = ( p ? p.val : 0 ) + ( q ? q.val : 0 ) + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      p = p ? p.next : null;
      q = q ? q.next : null;
  }

  return head.next;
};