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
      curr.left ? this.insert(val, curr.left) : curr.left = node;
    else if (val > curr.val)
      curr.right ? this.insert(val, curr.right) : curr.right = node;
    return this;
  }
}

// // recursive w/ helper
// const dfs = root => {
//   const visited = [];

//   const helper = node => {
//     visited.push(node.val);
//     if (!node.left && !node.right) return;
//     if (node.left) helper(node.left);
//     if (node.right) helper(node.right);
//   };
//   helper(root);
//   return visited;
// };

// // recursive
// const dfs = node => {
//   let visited = [];
//   visited.push(node.val);
//   if (!node.left && !node.right) return visited;
//   if (node.left) visited = [ ...visited, ...dfs(node.left) ];
//   if (node.right) visited = [ ...visited, ...dfs(node.right) ];
//   return visited;
// };

// recursive
const dfs = (node, visited = []) => {
  visited.push(node.val);
  if (!node.left && !node.right) return;
  if (node.left) dfs(node.left, visited);
  if (node.right) dfs(node.right, visited);
  return visited;
};

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
console.log( dfs(bst.root) );