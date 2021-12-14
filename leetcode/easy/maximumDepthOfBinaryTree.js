/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// bfs iterative (inspired by someone else's approach)
const maxDepth = root => {
  if (!root) return 0;
  let depth = 0;
  const q = [ root ];

  while (q.length) {
    depth++;
    const len = q.length;
    for (let i = 0; i < len; i++) {
      if (q[i].left) q.push(q[i].left);
      if (q[i].right) q.push(q[i].right);
    }
    q.splice(0, len);
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

// old solution
 const maxDepth = (root, depth = 0, currMax = 0) => {
  if (!root) return depth;

  if (currMax < depth) currMax = depth;
  let left = maxDepth(root.left, depth + 1, currMax);
  let right = maxDepth(root.right, depth + 1, currMax);

  let temp = Math.max(left, right);
  if (currMax < temp) currMax = temp;

  return currMax;
};

// one-line solution
const maxDepth = root => !root ? 0 : 1 + Math.max( maxDepth(root.left), maxDepth(root.right) );
