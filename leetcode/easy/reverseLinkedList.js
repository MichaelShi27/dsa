
var reverseList = function(head) {
    if (!head) return null;

    let curr = head;
    let prev = null, temp;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;

    }
    return prev;
};

const reverseList = head => {
  const arr = [];
  let cur = head;
  while (cur) {
      arr.push(cur);
      cur = cur.next;
  }
  head = arr[arr.length - 1];
  cur = head;
  for (let i = arr.length - 2; i >= 0; i--) {
      const next = arr[i];
      next.next = null;
      cur.next = next;
      cur = cur.next;
  }
  return head || null;
};