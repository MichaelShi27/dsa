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

// const bfs = root => {
//   // iterative
//   const q = [ root ];
//   const visited = [];

//   while (q.length) {
//     root = q.shift();
//     if (root.left) q.push(root.left);
//     if (root.right) q.push(root.right);
//     visited.push(root.val)
//   }
//   return visited;

//   // // recursive w/ helper
//   // const q = [ root ];
//   // const visited = [];

//   // const helper = () => {
//   //   if (!q.length) return visited;
//   //   let node = q.shift();
//   //   if (node.left) q.push(node.left);
//   //   if (node.right) q.push(node.right);
//   //   visited.push(node.val);
//   //   return helper();
//   // };
//   // return helper();
// };

// recursive
const bfs = (root, q = [ root ], visited = []) => {
  if (!q.length) return visited;
  root = q.shift();
  if (root.left)
    q.push(root.left);
  if (root.right)
    q.push(root.right);
  visited.push(root.val);
  return bfs(null, q, visited);
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
console.log(JSON.stringify( bfs(bst.root) ) === JSON.stringify( [ 10, 3, 14, 2, 8, 12, 19, 6, 9, 18, 16 ] ));