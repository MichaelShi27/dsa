// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

// // recursive
// const invertTree = root => {
//   if (root) {
//     [ root.right, root.left ] = [ root.left, root.right ]; // can combine 3 lines into 1: [ root.right, root.left ] = [ invertTree(root.right), invertTree(root.left) ];
//     invertTree(root.right);
//     invertTree(root.left);
//   }
//   return root;
// };

// // recursive one-liner, created new tree/nodes but still passes tests
// const invertTree = root => root && new TreeNode(root.val, invertTree(root.right), invertTree(root.left));

// iterative DFS
const invertTree = root => {
  const stack = [ root ];

  while (stack.length) {
    const cur = stack.pop();
    if (!cur) continue;
    [ cur.right, cur.left ] = [ cur.left, cur.right ];
    stack.push(cur.left, cur.right);
  }

  return root;
};

// iterative BFS
const invertTree = root => {
  const q = [ root ];

  while (q.length) {
    const cur = q.shift();
    if (!cur) continue;
    [ cur.right, cur.left ] = [ cur.left, cur.right ];
    q.push(cur.left, cur.right);
  }

  return root;
};

// test cases
function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const one = new TreeNode(1);
const three = new TreeNode(3);
const six = new TreeNode(6);
const nine = new TreeNode(9);
const two = new TreeNode(2, one, three);
const seven = new TreeNode(7, six, nine);
const four = new TreeNode(4, two, seven);

const printTree = (node, arr = []) => {
  if (!node) return;
  arr.push(node.val);
  printTree(node.left, arr);
  printTree(node.right, arr);
  return arr;
};

invertTree(four);
console.log(printTree(four)); // [ 4, 7, 9, 6, 2, 3, 1 ]
