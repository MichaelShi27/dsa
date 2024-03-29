/*
572. Subtree of Another Tree
https://leetcode.com/problems/subtree-of-another-tree/

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/

var isSubtree = function(root, subRoot) {
  if (!root || !subRoot) return false;
  if (root.val === subRoot.val)
    if (isSameTree(root, subRoot))
      return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};


var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (p && !q || (!p && q)) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};