class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, curr = this.root) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    if (val < curr.val)
      curr.left
        ? this.insert(val, curr.left)
        : curr.left = node;
    else if (val > curr.val)
      curr.right
        ? this.insert(val, curr.right)
        : curr.right = node;
    return this;
  }
}

// pre-order: visit/push node first, then explore children
// post-order: explore children first, then visit/push node
// in-order: explore left, then visited node, then explore right

// pre-order iterative (can I only do pre-order?)
const dfs = root => {
  const visited = [];
  if (!root) return visited;

  const stack = [ root ];
  while (stack.length) {
    const curr = stack.pop();
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
    visited.push(curr.val);
  }
  return visited;
};

// // in-order recursive w/ helper
// const dfs = root => {
//   if (!root) return;
//   const visited = [];

//   const helper = node => {
//     if (node.left) helper(node.left);
//     visited.push(node.val);
//     if (node.right) helper(node.right);
//   };
//   helper(root);
//   return visited;
// };

// // post-order recursive
// const dfs = node => {
//   let visited = [];
//   if (!node) return visited;
//   visited = [ ...dfs(node.left), ...dfs(node.right) ];
//   visited.push(node.val);
//   return visited;
// };

// // pre-order recursive
// const dfs = (node, visited = []) => {
//   if (!node) return visited;
//   visited.push(node.val);
//   dfs(node.left, visited);
//   dfs(node.right, visited);
//   return visited;
// };

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(14);
bst.insert(3);
bst.insert(8);
bst.insert(6);
bst.insert(9);
bst.insert(19);
bst.insert(18);
bst.insert(2);
bst.insert(12);
bst.insert(16);
const res = dfs(bst.root);
const postOrder = JSON.stringify([ 2, 6, 9, 8, 3, 12, 16, 18, 19, 14, 10 ]);
const preOrder = JSON.stringify([ 10, 3, 2, 8, 6, 9, 14, 12, 19, 18, 16 ]);
const inOrder = JSON.stringify([ 2, 3, 6, 8, 9, 10, 12, 14, 16, 18, 19 ]);
console.log( JSON.stringify(res) === postOrder );
// console.log(res);