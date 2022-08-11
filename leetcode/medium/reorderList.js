// 143. Reorder List
// https://leetcode.com/problems/reorder-list/

// n time n space
const reorderList = head => {
  const arr = [];
  let cur = head;

  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  for (let i = 0, j = arr.length - 1; true;) {
    arr[i].next = arr[j];
    i++;
    if (i >= j) {
      arr[j].next = null;
      break;
    }

    arr[j].next = arr[i];
    j--;
    if (i >= j) {
      arr[j].next = null;
      break;
    }
  }
};

// from LC Discussion, similar to above
const reorderList = head => {
  const arr = [];
  let cur = head;

  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  for (let l = 0; true; l++) {
    const r = arr.length - 1 - l;
    if (l >= r) {
      arr[l].next = null;
      break;
    }
    arr[l].next = arr[r];
    arr[r].next = arr[l + 1];
  }
};
