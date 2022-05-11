// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst

// dfs pure
const rangeSumBST = ({ val, left, right }, low, high) => {
  let sum = 0;
  if (val <= high && val >= low)
    sum += val;
  if (left && (val > low))
    sum += rangeSumBST(left, low, high);
  if (right && (val < high))
    sum += rangeSumBST(right, low, high);
  return sum;
};

// dfs w/ recursive helper
const rangeSumBST = (root, low, high) => {
  let sum = 0;

  const recurse = ({ val, left, right }) => {
    (val <= high) && (val >= low) && (sum += val);
    left && (val > low) && recurse(left);
    right && (val < high) && recurse(right);
  };

  recurse(root);
  return sum;
};

// bfs iter
const rangeSumBST = (root, low, high) => {
  let sum = 0;
  const q = [ root ];

  while (q.length) {
    const { val, left, right } = q.shift();
    if (val <= high && val >= low)
      sum += val;
    left && (val > low) && q.push(left); // better to check here than to just push in null & check at the top of loop, bc then we can avoid constantly .shift-ing
    right && (val < right) && q.push(right);
  }
  return sum;
};
