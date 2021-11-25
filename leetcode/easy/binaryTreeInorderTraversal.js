// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

const inorderTraversal = root => {
  const vals = [];

  const recurse = node => {
    if (!node) return;

    recurse(node.left);
    vals.push(node.val);
    recurse(node.right);
  };
  recurse(root);
  return vals;
};
