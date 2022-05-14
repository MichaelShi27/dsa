// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

// iterative - the stack is only for the left children
const inorderTraversal = root => {
  const vals = [];
  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    vals.push(cur.val);
    cur = cur.right;
  };
  return vals;
};

// recursive 1
// const inorderTraversal = root => {
//   const vals = [];

//   const recurse = node => {
//     if (!node) return;

//     recurse(node.left);
//     vals.push(node.val);
//     recurse(node.right);
//   };
//   recurse(root);
//   return vals;
// };

// recursive 2
// const inorderTraversal = root => {
//   const vals = [];

//   const recurse = (node, vals = []) => {
//     if (!node) return vals;

//     recurse(node.left, vals);
//     vals.push(node.val);
//     recurse(node.right, vals);

//     return vals;
//   };
//   return recurse(root);
// };

// pure recursive
// const inorderTraversal = root => {
//   if (!root) return [];
//   return [ ...inorder(root.left), root.val, ...inorderTraversal(root.right) ];
// };
