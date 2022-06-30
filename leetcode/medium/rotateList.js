// 61. Rotate List
// https://leetcode.com/problems/rotate-list/

// from LC discussion - doesn't make LL circular immediately, but similar logic
const rotateRight5 = (head, k) => {
  if (!head || !head.next) return head;
	let count = 0,
		  ptr = head;

	//Step 1 of the algo, count list nodes
	while (ptr) {
		count++;
		ptr = ptr.next;
	}

	//Step 2: Number of rotations are now restricted within limit
	k = k % count;
	let prev = head;
	ptr = head;

	//Step 3: Moving one pointer k positions ahead
	while (k--) {
		ptr = ptr.next;
	}

	//Step 4: The actual magic, explained above
	while (ptr.next) {
		prev = prev.next;
		ptr = ptr.next;
	}

	//Step 5: Simply modifying the head and last node
	ptr.next = head;
	head = prev.next;
	prev.next = null;
	return head;
};

// O(2n) - similar to rotateRight3, but only need to move a tail ptr in while loop, then move head ptr afterwards
const rotateRight4 = (head, k) => {
  if (!head || !head.next) return head;

  let cur = head;
  let len = 1;
  while (cur.next) {
    cur = cur.next;
    len++;
  }

  let tail = cur;
  tail.next = head; // make it circular

  k %= len;
  let rounds = len - k;
  while (rounds--)
    tail = tail.next;

  head = tail.next;
  tail.next = null;

  return head;
};

// O(2n)
const rotateRight3 = (head, k) => {
  if (!head || !head.next) return head;

  let cur = head;
  let len = 1;
  while (cur.next) { // find tail & length
    cur = cur.next;
    len++;
  }
  let tail = cur;
  tail.next = head; // make list circular
  k = len - (k % len); // we'll have to move head & tail (len - k) since we're technically rotating left in the below while loop

  while (k !== len && k-- > 0) { // 1st condition handles edge case - avoid rotating len # of times since the list would already be in the correct order
    head = head.next;
    tail = tail.next;
  }
  tail.next = null;

  return head;
};

// like rotateRight1, but with a rotateLeft in case it's more efficient to use it
const rotateRight2 = (head, k) => {
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

  if (k > len / 2)
    return rotateLeft(head, len - k);

  while (k-- > 0) {
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    cur.next = head; // cur is essentially the current tail
    prev.next = null;
    head = cur;
  }
  return head;
};

const rotateLeft = (head, k) => {
  let cur = head;
  while (cur.next) {
    prev = cur;
    cur = cur.next;
  }
  let tail = cur;

  while (k-- > 0) {
    tail.next = head;
    tail = head;
    head = head.next;
    tail.next = null;
  }
  return head;
};


// naive
// O( (k % n) * n )? worst case is if k % n is n - 1, so time is (n - 1) * n
const rotateRight1 = (head, k) => {
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

  while (k-- > 0) {
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    cur.next = head; // cur is essentially the current tail
    prev.next = null;
    head = cur;
  }
  return head;
};
