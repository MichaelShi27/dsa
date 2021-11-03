/*
235. Lowest Common Ancestor of a Binary Search Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/


// dfs
var lowestCommonAncestor = function(root, p, q) {
  const higherVal = Math.max(p.val, q.val);
  const lowerVal = higherVal === p.val ? q.val : p.val;

  if (
    root.val === higherVal || root.val === lowerVal ||
    (root.val < higherVal && root.val > lowerVal)
  ) return root;
  else if (root.val > higherVal)
    return lowestCommonAncestor(root.left, p, q);
  else // if (root.val < lowerVal)
    return lowestCommonAncestor(root.right, p, q);
};

// bfs
var lowestCommonAncestor = function(root, p, q) {
  const queue = [ root ];
  const higherVal = Math.max(p.val, q.val);
  const lowerVal = higherVal === p.val ? q.val : p.val;

  while (queue.length) {
    const curr = queue.shift();
    if (
      curr.val === higherVal || curr.val === lowerVal ||
      (curr.val < higherVal && curr.val > lowerVal)
    ) return curr;
    else if (curr.val > higherVal)
      curr.left && queue.push(curr.left);
    else // if (curr.val < lowerVal)
      curr.right && queue.push(curr.right);
  }
};
