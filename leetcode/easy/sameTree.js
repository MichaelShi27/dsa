/*
100. Same Tree
https://leetcode.com/problems/same-tree/

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

// dfs recursive
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (p && !q || (!p && q)) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// dfs iterative
var isSameTree = function(p, q) {
  const stack = [ p, q ];
  while (stack.length) {
      q = stack.pop();
      p = stack.pop();
      if (p && !q || (!p && q))
          return false;
      if (!p && !q)
          continue;
      if (p.val !== q.val)
          return false;
      stack.push(p.left, q.left, p.right, q.right);
  }
  return true;
};

// bfs iterative
var isSameTree = function(p, q) {
  const queue = [ p, q ];
  while (queue.length) {
      p = queue.shift();
      q = queue.shift();
      if (p && !q || (!p && q))
          return false;
      if (!p && !q)
          continue;
      if (p.val !== q.val)
          return false;
      queue.push(p.left, q.left, p.right, q.right);
  }
  return true;
};

// bfs recursive helper
var isSameTree = function(p, q) {
  const queue = [ p, q ];

  const recurse = () => {
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
      return recurse();
  };
  return recurse();
};

// bfs recursive pure
var isSameTree = function(p, q, queue = [ p, q ]) {
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