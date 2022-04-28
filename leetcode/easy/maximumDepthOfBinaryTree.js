// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/


// bfs iterative
const maxDepth = root => {
  if (!root) return 0;

  let depth = 0;
  const q = [ root ];

  while (q.length) {
    depth++;
    let len = q.length;
    while (len-- > 0) {
      const node = q.shift();
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return depth;
};

// dfs recursive
 const maxDepth = root => {
  let curMax = 0;

  const dfs = (node, level) => {
    if (!node) return;
    if (level > curMax)
      curMax = level;
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };
  dfs(root, 1);

  return curMax;
};

// recursive top-down?
const maxDepth = (root, depth = 0) => {
  if (!root) return depth;
  const leftDepth = maxDepth(root.left, depth + 1);
  const rightDepth = maxDepth(root.right, depth + 1);
  return Math.max(leftDepth, rightDepth);
};

// recursive bottom-up?
const maxDepth = root => {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
};

// one-line solution
const maxDepth = root => !root ? 0 : 1 + Math.max( maxDepth(root.left), maxDepth(root.right) );
