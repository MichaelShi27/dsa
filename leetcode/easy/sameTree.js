// 100. Same Tree
// https://leetcode.com/problems/same-tree/

// dfs recursive
const isSameTree = (p, q) => {
  if (!p && !q)
    return true;
  if (!p && q || (p && !q))
    return false;
  if (p.val !== q.val)
    return false;
  if (!dfs(p.right, q.right))
    return false;
  if (!dfs(p.left, q.left))
    return false;
  return true;
};

// shofter dfs recursive
const isSameTree = (p, q) => {
  if (!p && !q)
    return true;
  if (!p && q || (p && !q) || (p.val !== q.val))
    return false;
  return dfs(p.right, q.right) && dfs(p.left, q.left);
};

// dfs iterative
const isSameTree = (p, q) => {
  const stack = [ p, q ];
  while (stack.length) {
    q = stack.pop();
    p = stack.pop();
    if (!p && !q)
      continue;
    if (p && !q || (!p && q) || p.val !== q.val)
      return false;
    stack.push(p.right, q.right, p.left, q.left);
  }
  return true;
};

// bfs iterative - can also do w/ 2 queues, 1 for each tree
const isSameTree = (p, q) => {
  const queue = [ p, q ];

  while (queue.length) {
    const pNode = queue.shift();
    const qNode = queue.shift();
    if (!pNode && !qNode)
      continue;
    if (!pNode && qNode || (pNode && !qNode) || (pNode.val !== qNode.val))
      return false;
    queue.push(pNode.right, qNode.right, pNode.left, qNode.left);
  }
  return true;
};

// bfs recursive w/ helper
const isSameTree = (p, q) => {
  const queue = [ p, q ];

  const recurse = () => {
    if (!queue.length) return true;
    p = queue.shift();
    q = queue.shift();
    if (p && !q || (!p && q))
      return false;
    if (p && q) { // can't follow the format of the above solutions where it checks !p && !q first bc of cases e.g. [1], [1,null,2]
      if (p.val !== q.val)
        return false;
      queue.push(p.left, q.left, p.right, q.right);
    }
    return recurse();
  };
  return recurse();
};

// bfs recursive pure
const isSameTree = (p, q, queue = [ p, q ]) => {
  if (!queue.length) return true;
  p = queue.shift();
  q = queue.shift();
  if (p && !q || (!p && q))
    return false;
  if (p && q) {
    if (p.val !== q.val)
      return false;
    queue.push(p.left, q.left, p.right, q.right);
  }
  return isSameTree(null, null, queue);
};
